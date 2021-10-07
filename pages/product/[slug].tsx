import Layout from "../../components/Layout";
import {gql} from "graphql-request";
import client from "../../utils/client";
import {GetStaticPaths, GetStaticProps} from "next";
import styles from "../../styles/pages/Product.module.scss";
import parse from "html-react-parser";

export default function Product({product}) {
  return (
    <div className="container p-4">
      <h3 className={`${styles.title} animate__animated animate__fadeInDown`}>{product.title}</h3>
      <div className="row mt-4">
        <div className="col-sm-12 col-md-6 animate__animated animate__fadeInLeft">
          {(product.thumbnails || []).map(thumbnail => (
            <img className={styles.thumbnail} src={thumbnail.url} alt="" />
          ))}
        </div>
        <div className="col-sm-12 col-md-6 mt-4 mt-sm-0 animate__animated animate__fadeInRight">
          {parse(product.description.html)}
        </div>
      </div>
      <div className="row align-items-center mt-4">
        {(product.features || []).map((feature, index) => {
          if (index % 2 == 0) {
            return (
              (
                <>
                  <div className="col-sm-12 col-md-6 animate__animated animate__fadeInLeft">
                    {(feature.thumbnails || []).map(thumbnail => (
                      <img className={styles.featureThumbnail} src={thumbnail.url} alt="" />
                    ))}
                  </div>
                  <div className="col-sm-12 col-md-6 text-start animate__animated animate__fadeInRight">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </>
              )
            )
          } else {
            return (
              <>
                <div className="col-sm-12 col-md-6 text-end animate__animated animate__fadeInLeft">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
                <div className="col-sm-12 col-md-6 animate__animated animate__fadeInRight">
                  {(feature.thumbnails || []).map(thumbnail => (
                    <img className={styles.featureThumbnail} src={thumbnail.url} alt="" />
                  ))}
                </div>
              </>
            )
          }
        })}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async({params}) => {
  const slug = params.slug as string;
  const query = gql`
    query Post($slug: String!) {
      product(where: {slug: $slug}) {
        id
        locale
        slug
        title
        features {
          ... on Feature {
            id
            title
            description
            thumbnails {
              url
              id
            }
            createdAt
          }
        }
        createdAt
        thumbnails {
          url
          id
        }
        description {
          html
        }
      }
    }
  `;
  const product = await client.request(query, {slug});
  return {
    props: {
      product: product.product
    },
    revalidate: 60 * 60
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Products {
      products {
        slug
      }
    }
  `;
  const data = await client.request(query);
  return {
    paths: data.products.map(post => ({ params: { slug: post.slug }})),
    fallback: "blocking"
  }
}