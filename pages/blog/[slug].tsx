import React from "react";
import {gql} from "graphql-request";
import {GetStaticPaths, GetStaticProps} from "next";
import client from "../../utils/client";
import Layout from "../../components/Layout";
import SearchBox from "../../components/SearchBox";
import RecentBlogs from "../../components/RecentBlogs";
import parse from "html-react-parser";
import Badge from "../../components/Badge";
import styles from "../../styles/pages/Blog.module.scss";

export default function Blog({ recentPosts, post }) {
  return (
    <Layout title={post.tittle}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-3">
            <div className="container">
              <SearchBox />
              <RecentBlogs blogs={recentPosts} />
            </div>
          </div>
          <div className="col-9">
            <div className="container">
              <span className={styles.blog}>BLOG</span>
              <h3>{post?.tittle}</h3>
              <div className={styles.divider} />
              <div className={`relative ${styles.contentWrapper}`}>
                <Badge date={post?.createdAt} />
                <img src={post?.thumbnail?.url} alt="" className="thumbnail"/>
                <div className="content">
                  {parse(post?.content?.html)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async({params}) => {
  const slug = params.slug as string;
  const query = gql`
    query Post($slug: String!) {
      post(where: {slug: $slug}) {
        id
        tittle
        thumbnail {
          url
        }
        content {
          html
        }
        createdAt
        createdBy {
          name
        }
      }
    }
  `;
  const queryRecentPosts = gql`
    query Posts() {
      posts(orderBy: createdAt_DESC, first: 5) {
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
  `
  const post = await client.request(query, {slug});
  console.log('post', post.post);
  const recentPosts = await client.request(queryRecentPosts);
  return {
    props: {
      recentPosts: recentPosts.posts,
      post: post.post
    },
    revalidate: 60 * 60
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Posts {
      posts {
        slug
      }
    }
  `;
  const data = await client.request(query);
  return {
    paths: data.posts.map(post => ({ params: { slug: post.slug }})),
    fallback: "blocking"
  }
}
