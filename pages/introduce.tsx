import React from "react";
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import styles from '../styles/pages/Introduce.module.scss'
import CardIcon from "../components/CardIcon";

const Introduce = () => {
  return (
    <Layout>
      <PageHeader title="GIỚI THIỆU"
        breadcrumbs={{ title: 'Trang chủ', url: '/' }} />
      <div className="container">
        <div className={`${styles.Introduce}`}>
          <div className="row">
            <div className="col-lg-3 col-md-2 col-sx-0">
            </div>
            <div className="col-lg-6 col-md-8 col-sx-12">
              <div className={`${styles.Introduce__Title}`}>
                <h1>
                  MONA MEDIA
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 align-self-center">
              <div className={`${styles.Introduce__Content__Left}`}>
              </div>
              <div className="mb-5">

                <CardIcon imgUrl={'images/introduce-1.png'} title="New Features" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt."></CardIcon>
              </div>
              <div className="mb-5">

                <CardIcon imgUrl={'images/introduce-2.png'} title="New Features" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt."></CardIcon>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
              <div className={`${styles.Introduce__Content__Center}`}>
                <img src="images/introduce-center.png" alt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh." />
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 align-self-center">
              <div className={`${styles.Introduce__Content__Right}`}>
                <div className="mb-5">

                  <CardIcon imgUrl={'images/introduce-3.png'} title="New Features" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt."></CardIcon>
                </div>
                <div className="mb-5">

                  <CardIcon imgUrl={'images/introduce-4.png'} title="New Features" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt."></CardIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}
export default Introduce
