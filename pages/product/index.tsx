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
  const locale = context.locale;
  const queryProducts = gql`
    query queryProducts($locale: Locale!) {
        products(locales: [$locale]) {
          id
          slug
          title
          shortDescription
          thumbnails(locales: en) {
            url
          }
          createdAt
        }
      }
    `;
  const products = await client.request(queryProducts, {locale});
  return {
    props: {
      products: products.products,
    },
  }
}
