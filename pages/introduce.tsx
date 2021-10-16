import React from "react";
import PageHeader from "../components/PageHeader";
import styles from '../styles/pages/Introduce.module.scss'
import CardIcon from "../components/CardIcon";
import {gql} from "graphql-request";
import client from "../utils/client";
import {useIntl} from "react-intl";

const Introduce = ({ introduce }) => {
  const intl = useIntl();
  return (
    <>
      <PageHeader title={intl.formatMessage({id: 'introduce'})} breadcrumbs={{ title: intl.formatMessage({id: 'home_page'}), url: '/' }} />
      <div className="container">
        <div className={`${styles.Introduce}`}>
          <div className="row">
            <div className="col-lg-3 col-md-2 col-sx-0">
            </div>
            <div className="col-lg-6 col-md-8 col-sx-12">
              <div className={`${styles.Introduce__Title}`}>
                <h1>
                  {introduce?.title}
                </h1>
                <p>
                  {introduce?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 align-self-center">
              <div className={`${styles.Introduce__Content__Left}`}>
              </div>
              <div className="mb-5">
                <CardIcon
                  imgUrl={introduce?.feature1Thumbnail.url}
                  title={introduce?.feature1Title}
                  description={introduce?.feature1Description} />
              </div>
              <div className="mb-5">
                <CardIcon
                  imgUrl={introduce?.feature2Thumbnail.url}
                  title={introduce?.feature2Title}
                  description={introduce?.feature2Description} />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
              <div className={`${styles.Introduce__Content__Center}`}>
                <img src={introduce?.thumbnail.url} alt={introduce?.title} />
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 align-self-center">
              <div className={`${styles.Introduce__Content__Right}`}>
                <div className="mb-5">
                  <CardIcon
                    imgUrl={introduce?.feature3Thumbnail.url}
                    title={introduce?.feature3Title}
                    description={introduce?.feature3Description} />
                </div>
                <div className="mb-5">
                  <CardIcon
                    imgUrl={introduce?.feature4Thumbnail.url}
                    title={introduce?.feature4Title}
                    description={introduce?.feature4Description} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ >
  )
}
export default Introduce

export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
  const introduceQuery = gql`
    query introduceQuery($locale: Locale!) {
      cmsIntroduce(locales: [$locale], where: {id: "ckufov4tcm6s20d873t045xho"}) {
        description
        feature1Description
        feature1Thumbnail(locales: en) {
          url
        }
        feature1Title
        feature2Description
        feature2Thumbnail(locales: en) {
          url
        }
        feature2Title
        feature3Description
        feature3Thumbnail(locales: en) {
          url
        }
        feature3Title
        feature4Description
        feature4Thumbnail(locales: en) {
          url
        }
        feature4Title
        title
        thumbnail(locales: en) {
          url
        }
      }
    }
  `;
  const introduce = await client.request(introduceQuery, {locale});
  return {
    props: {
      introduce: introduce?.cmsIntroduce,
    },
  }
}
