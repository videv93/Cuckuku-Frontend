import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeOurMission from "../components/HomeOurMission";
import HomeAboutUs from "../components/HomeAboutUs";
import HomeCustomerReview from "../components/HomeCustomerReview";
import HomeBlog from "../components/HomeBlog";
import {gql} from "graphql-request";
import client from "../utils/client";

const IndexPage = ({ reviews, banner, aboutUs, intl }) => {
    return (
      <>
          <HomeBanner banner={banner} />
          <HomeOurMission aboutUs={aboutUs} />
          <HomeAboutUs aboutUs={aboutUs}/>
          <HomeCustomerReview reviews={reviews} />
          <HomeBlog />
      </>
    )
}

export default IndexPage;

export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
    const reviewQuery = gql`
        query reviewQuery($locale: Locale!) {
            reviews(locales: [$locale]) {
                content
                avatar(locales: en) {
                  id
                  url
                }
                customerName
                customerCompany
                locale
                rating
                id
              }
        }
    `;
    const bannerQuery = gql`
        query bannerQuery($locale: Locale!) {
            banner(locales: [$locale], where: {id: "ckufnncfcm2os0a40e32k01zg"}) {
                id
                locale
                description
                subTitle
                title
                thumbnail(locales: en) {
                  url
                  id
                }
              }
        }
    `;
    const aboutUsQuery = gql`
        query aboutQuery($locale: Locale!) {
            aboutUs(locales: [$locale], where: {id: "ckufo2mkwm5yx09869v5tiv7v"}) {
            id
            jobDescription1
            jobDescription2
            jobDescription3
            jobTitle1
            jobTitle2
            jobTitle3
            locale
            title
            description {
              html
            }
            thumbnail(locales: en) {
              url
            }
            jobThumbnail1(locales: en) {
              url
              id
            }
            jobThumbnail2(locales: en) {
              url
              id
            }
            jobThumbnail3(locales: en) {
              url
              id
            }
          }
        }
    `
    const reviews = await client.request(reviewQuery, {locale});
    const banner = await client.request(bannerQuery, {locale});
    const aboutUs = await client.request(aboutUsQuery, {locale});
    return {
        props: {
            reviews: reviews.reviews,
            banner: banner.banner,
            aboutUs: aboutUs.aboutUs,
        },
    }
}
