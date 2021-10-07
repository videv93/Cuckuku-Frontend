import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'animate.css'
import '../styles/main.scss';
import Layout from "../components/Layout";
import {gql} from "graphql-request";
import client from "../utils/client";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export async function getInitialProps(context) {
  const queryCompany = gql`
    query {
      company(where: {id: "ckufmb7egm0u70d84rg9rh0tk"}, locales: en) {
        address
        email
        facebook
        instagram
        logo {
          url
          id
        }
        phone
        skype
        twitter
      }    
    }
    `;
  const company = await client.request(queryCompany);
  return {
    props: {
      company: company.company,
    },
  }
}