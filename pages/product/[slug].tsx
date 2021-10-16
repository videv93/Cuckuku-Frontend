import {gql} from "graphql-request";
import client from "../../utils/client";
import {GetStaticPaths, GetStaticProps} from "next";
import styles from "../../styles/pages/Product.module.scss";
import parse from "html-react-parser";
import Button from "../../components/Button";
import React, {useEffect} from "react";
import useProduct from "../../hooks/useProduct.hook";
import {useIntl} from "react-intl";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../utils/firebase";

export default function Product({product}) {
  const { formik, loading, summary } = useProduct({slug: product.slug});
  const intl = useIntl();
  useEffect(() => {
    logEvent(analytics, 'screen_view', {
      firebase_screen: product.slug,
      firebase_screen_class: 'Product'
    });
  }, [analytics])
  return (
    <div className="container p-4">
      <h3 className={`${styles.title} animate__animated animate__fadeInDown`}>{product.title}</h3>
      <div className="row mt-4">
        <div className="col-sm-12 col-md-6 animate__animated animate__fadeInLeft">
          {(product.thumbnails || []).map(thumbnail => (
            <img className={styles.thumbnail} src={thumbnail.url} alt="" />
          ))}
        </div>
        <div className="col-sm-12 col-md-6 mt-4 mt-sm-0 animate__animated animate__fadeInRight">
          {parse(product.description?.html || '')}
        </div>
      </div>
      <div>
        {(product.features || []).map((feature, index) => {
          if (index % 2 == 0) {
            return (
              (
                <div className="row align-items-center mt-4">
                  <div className="col-sm-12 col-md-6 animate__animated animate__fadeInLeft" key={index}>
                    {(feature.thumbnails || []).map(thumbnail => (
                      <img className={styles.featureThumbnail} src={thumbnail.url} alt="" />
                    ))}
                  </div>
                  <div className="col-sm-12 col-md-6 text-start animate__animated animate__fadeInRight">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              )
            )
          } else {
            return (
              <div className="row align-items-center mt-4">
                <div className="col-sm-12 col-md-6 text-end animate__animated animate__fadeInLeft">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
                <div className="col-sm-12 col-md-6 animate__animated animate__fadeInRight">
                  {(feature.thumbnails || []).map(thumbnail => (
                    <img className={styles.featureThumbnail} src={thumbnail.url} alt="" />
                  ))}
                </div>
              </div>
            )
          }
        })}
      </div>
      <div className="row justify-content-around my-4">
        <div className="col-sm-12 col-md-3 text-center">
          <h4 className={styles.number}>999</h4>
          <p>{intl.formatMessage({id: 'view_number'})}</p>
        </div>
        <div className="col-sm-12 col-md-3 text-center">
          <h4 className={styles.number}>{summary.comments}</h4>
          <p>{intl.formatMessage({id: 'comment_number'})}</p>
        </div>
        <div className="col-sm-12 col-md-3 text-center">
          <h4 className={styles.number}>{summary.likes}</h4>
          <p>{intl.formatMessage({id: 'like_number'})}</p>
        </div>
      </div>
      <div>
        <h3 className="text-center my-4">{intl.formatMessage({id: 'review_product'})}</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 pb-4">
              <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                placeholder={intl.formatMessage({id: 'name'})}
                autoComplete="off"
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="error-message">{formik.errors.fullName}</div>
              ) : null}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 pb-4">
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder={intl.formatMessage({id: 'email'})}
                autoComplete="off"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error-message">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 pb-4">
              <input
                id="phone"
                name="phone"
                type="tel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder={intl.formatMessage({id: 'phone_number'})}
                autoComplete="off"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="error-message">{formik.errors.phone}</div>
              ) : null}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12-pb-4">
              <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-4 pt-0">{intl.formatMessage({id: 'review_question'})}</legend>
                <div className="col-sm-8">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="liked"
                      onChange={e => formik.setFieldValue('liked', true)}
                      checked={formik.values.liked}
                      id="like" />
                    <label className="form-check-label" htmlFor="like">
                      {intl.formatMessage({id: 'yes'})}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="liked"
                      onChange={e => formik.setFieldValue('liked', false)}
                      id="dislike"
                      checked={!formik.values.liked}
                    />
                    <label className="form-check-label" htmlFor="dislike">
                      {intl.formatMessage({id: 'no'})}
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 pb-4">
              <textarea
                id="comment"
                name="comment"
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
                placeholder={intl.formatMessage({id: 'comment'})}
                autoComplete="off"
              />
              {formik.touched.comment && formik.errors.comment ? (
                <div className="error-message">{formik.errors.comment}</div>
              ) : null}
            </div>
            <div className="col-12">
              <Button type="submit" title={intl.formatMessage({id: 'sent'})} loading={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

  export const getStaticProps: GetStaticProps = async({locale, params}) => {
  const slug = params.slug as string;
  const query = gql`
    query Post($slug: String!, $locale: Locale!) {
      product(where: {slug: $slug}, locales: [$locale]) {
        id
        locale
        slug
        title
        locale
        features {
          ... on Feature {
            id
            title
            description
            thumbnails(locales: en) {
              url
              id
            }
            createdAt
          }
        }
        createdAt
        thumbnails(locales: en) {
          url
          id
        }
        description {
          html
        }
      }
    }
  `;
  const product = await client.request(query, {slug, locale});
  return {
    props: {
      product: product.product
    },
    revalidate: 60 * 60
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const query = gql`
    query Products {
      products {
        slug
      }
    }
  `;
  const data = await client.request(query);
  let paths = []
  for (const locale of locales) {
    paths = [
      ...paths,
      ...data.products.map(post => ({ params: { slug: post.slug }, locale}))
    ]
  }
  return {
    paths: paths,
    fallback: "blocking"
  }
}
