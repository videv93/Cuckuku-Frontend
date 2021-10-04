import { sampleBlogData } from "../utils/sample-data";
import {gql} from "graphql-request";
import {useEffect, useState} from "react";
import client from "../utils/client";
const useBlog = () => {
  const [blogs, setBlogs] = useState<any>([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  useEffect(() => {
    const query = gql`
      query Posts {
        posts {
          slug
          tittle
          description
          thumbnail {
            url
          }
        }
      }
    `;
    client.request(query).then(data => {
      const blogs = (data?.posts || []).map(post => ({
        slug: post.slug,
        title: post.tittle,
        description: post.description,
        img: post.thumbnail?.url
      }));
      console.log(blogs)
      setBlogs(blogs);
    });
    const queryRecentPosts = gql`
    query Posts() {
      posts(orderBy: createdAt_DESC, first: 3) {
        id
        slug
        tittle
        createdAt
        thumbnail {
          url
          id
        }
      }
    }
  `;
    client.request(queryRecentPosts).then(data => {
      setRecentBlogs(data.posts);
    });
  }, [])
  const content = {
    category: "Chuyên Nghiệp",
    title: "Nơi chia sẽ những thông tin bổ ích",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]
  }
  return { settings, data: blogs, recentBlogs, content }
}

export default useBlog
