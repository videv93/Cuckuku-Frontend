import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import 'animate.css'
import '../styles/main.scss';
import Layout from "../components/Layout";
import {gql} from "graphql-request";
import client from "../utils/client";
import ModalProvider from "../contexts/Modal.provider";
import { IntlProvider } from 'react-intl';
import { useRouter } from "next/router"

const languages = {
  vi: require('../locale/vi.json'),
  en: require('../locale/en.json')
};

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale } = router;
  const messages = languages[locale];

  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale}>
      <ModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </IntlProvider>
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