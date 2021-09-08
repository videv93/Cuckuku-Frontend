import React from "react";
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner";
import HomeOurMission from "../components/HomeOurMission";
import HomeAboutUs from "../components/HomeAboutUs";
import HomeCustomerReview from "../components/HomeCustomerReview";
import HomeBlog from "../components/HomeBlog";

const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <HomeOurMission></HomeOurMission>
    <HomeAboutUs></HomeAboutUs>
    <HomeCustomerReview></HomeCustomerReview>
    <HomeBlog></HomeBlog>
  </Layout>
)

export default IndexPage
