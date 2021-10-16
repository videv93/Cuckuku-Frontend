import { sampleCustomerReview } from "../utils/sample-data";
const useCustomerReview = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  const customerData = sampleCustomerReview;
  return { settings, customerData }
}

export default useCustomerReview
