import React from "react";
import {gql} from "graphql-request";
import {GetStaticPaths, GetStaticProps} from "next";
import client from "../../utils/client";
import SearchBox from "../../components/SearchBox";
import RecentBlogs from "../../components/RecentBlogs";
import parse from "html-react-parser";
import Badge from "../../components/Badge";
import styles from "../../styles/pages/Blog.module.scss";

export default function Blog({ recentPosts, post }) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-12 col-md-3 order-sm-2">
          <div className="container">
            <SearchBox />
            <RecentBlogs blogs={recentPosts} />
          </div>
        </div>
        <div className="col-sm-12 col-md-9">
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
  )
}

export const getStaticProps: GetStaticProps = async({locale, params}) => {
  const slug = params.slug as string;
  const query = gql`
    query Post($slug: String!, $locale: Locale!) {
      post(where: {slug: $slug}, locales: [$locale]) {
        id
        tittle
        thumbnail(locales: en) {
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
    query Posts($locale: Locale!) {
      posts(orderBy: createdAt_DESC, first: 5, locales: [$locale]) {
        id
        slug
        tittle
        createdAt
        thumbnail(locales: en) {
          url
          id
        }
      }
    }
  `
  const post = await client.request(query, {slug, locale});
  const recentPosts = await client.request(queryRecentPosts, {locale});
  return {
    props: {
      recentPosts: recentPosts.posts,
      post: post.post
    },
    revalidate: 60 * 60
  }
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
  const query = gql`
    query Posts {
      posts {
        slug
      }
    }
  `;
  const data = await client.request(query);
  let paths = []
  for (const locale of locales) {
    paths = [
      ...paths,
      ...data.posts.map(post => ({ params: { slug: post.slug }})),
    ]
  }
  return {
    paths: paths,
    fallback: "blocking"
  }
}
