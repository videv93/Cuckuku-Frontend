import React from "react";
import {gql} from "graphql-request";
import {GetStaticPaths, GetStaticProps} from "next";
import client from "../../utils/client";
import Layout from "../../components/Layout";


export default function Blog() {
  return (
    <Layout>
      Blogs
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

  const data = await client.request(query, {slug});
  console.log(data);

  return {
    props: {},
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
