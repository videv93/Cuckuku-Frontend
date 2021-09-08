import { sampleCustomerReview } from "../utils/sample-data";


const useCustomerReview = () => {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

  };

  const customerData = sampleCustomerReview;


  return { settings, customerData }
}

export default useCustomerReview
