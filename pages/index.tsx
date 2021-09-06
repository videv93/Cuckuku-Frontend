import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner";
import HomeOurMission from "../components/HomeOurMission";
import HomeAboutUs from "../components/HomeAboutUs";
import HomeCustomerReview from "../components/HomeCustomerReview";

const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <HomeOurMission></HomeOurMission>
    <HomeAboutUs></HomeAboutUs>
    <HomeCustomerReview></HomeCustomerReview>
  </Layout>
)

export default IndexPage
