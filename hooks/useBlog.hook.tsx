import { sampleBlogData } from "../utils/sample-data";


const useBlog = () => {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

  };

  const data = sampleBlogData;
const content = {
  category: "Chuyên Nghiệp",
  title: "Nơi chia sẽ những thông tin bổ ích",
  description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]
}

  return { settings, data, content }
}

export default useBlog
