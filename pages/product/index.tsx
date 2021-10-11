import Layout from "../../components/Layout";
import {gql} from "graphql-request";
import client from "../../utils/client";
import Product from "../../components/Product";

export default function Products({products}) {
  return (
    <div className="container mt-4 px-4">
      <div className="row">
        {(products || []).map(product => (
          <div className="col-sm-12 col-md-4" key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const {s, page} = context.query;
  const queryProducts = gql`
    query {
        products {
          id
          slug
          title
          shortDescription
          thumbnails {
            url
          }
          createdAt
          features {
            ... on Feature {
              id
              title
              createdAt
              description
              thumbnails {
                url
                id
              }
            }
          }
        }
      }
    `;
  const products = await client.request(queryProducts);
  return {
    props: {
      products: products.products,
    },
  }
}
