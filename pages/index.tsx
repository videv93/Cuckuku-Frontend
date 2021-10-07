import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeOurMission from "../components/HomeOurMission";
import HomeAboutUs from "../components/HomeAboutUs";
import HomeCustomerReview from "../components/HomeCustomerReview";
import HomeBlog from "../components/HomeBlog";
import {gql} from "graphql-request";
import client from "../utils/client";

const IndexPage = ({ reviews, banner, aboutUs }) => {
    console.log('reviews', reviews);
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
    const reviewQuery = gql`
        query {
            reviews {
                content
                avatar {
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
        query {
            banner(where: {id: "ckufnncfcm2os0a40e32k01zg"}) {
                id
                locale
                description
                subTitle
                title
                thumbnail {
                  url
                  id
                }
              }
        }
    `;
    const aboutUsQuery = gql`
        query {
            aboutUs(where: {id: "ckufo2mkwm5yx09869v5tiv7v"}) {
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
            thumbnail {
              url
            }
            jobThumbnail1 {
              url
              id
            }
            jobThumbnail2 {
              url
              id
            }
            jobThumbnail3 {
              url
              id
            }
          }
        }
    `
    const reviews = await client.request(reviewQuery);
    const banner = await client.request(bannerQuery);
    const aboutUs = await client.request(aboutUsQuery);
    return {
        props: {
            reviews: reviews.reviews,
            banner: banner.banner,
            aboutUs: aboutUs.aboutUs,
        },
    }
}
