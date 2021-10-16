import { sampleBlogData } from "../utils/sample-data";
import {gql} from "graphql-request";
import {useEffect, useState} from "react";
import client from "../utils/client";
import {useIntl} from "react-intl";
const useBlog = () => {
  const [blogs, setBlogs] = useState<any>([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const intl = useIntl();
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
    category: intl.formatMessage({id: 'professional'}),
    title: intl.formatMessage({id: 'sharing_place'}),
    description: intl.formatMessage({id: 'sharing_place_desc'})
  }
  return { settings, data: blogs, recentBlogs, content }
}

export default useBlog
