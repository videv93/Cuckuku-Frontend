import SearchBox from "../../components/SearchBox";
import RecentBlogs from "../../components/RecentBlogs";
import React from "react";
import {gql} from "graphql-request";
import client from "../../utils/client";
import styles from "../../styles/pages/Search.module.scss";
import Badge from "../../components/Badge";
import Link from "next/link";

export default function Blogs({recentPosts, searchPosts}) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-12 col-md-3">
          <div className="container">
            <SearchBox />
            <RecentBlogs blogs={recentPosts} />
          </div>
        </div>
        <div className="col-sm-12 col-md-9 mt-4 mt-md-0">
          <div className="row px-4">
            {(searchPosts || []).map(post => (
              <Link href={`/blog/${post.slug}`}>
                <a className={`col-xs-12 col-md-4 relative ${styles.container}`}>
                  <Badge date={post.createdAt}/>
                  <img className={styles.thumbnail} src={post.thumbnail?.url} alt="" />
                  <h5 className={styles.title}>{post.tittle}</h5>
                  <p className={styles.description}>{post.description}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { s, page } = context.query;
  const locale = context.locale;
  const querySearchPosts = gql`
    query Posts($search: String!, $skip: Int, $locale: Locale!) {
      posts(orderBy: createdAt_DESC, first: 6, where: {_search: $search}, skip: $skip, locales: [$locale]) {
        id
        slug
        tittle
        description
        createdAt
        thumbnail(locales: en) {
          url
          id
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
  `;
  const recentPosts = await client.request(queryRecentPosts, {locale});
  const searchPosts = await client.request(querySearchPosts, { search: s, skip: page * 6, locale});
  return {
    props: {
      recentPosts: recentPosts.posts,
      searchPosts: searchPosts.posts,
    },
  }
}