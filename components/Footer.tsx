import styles from "../styles/layout/Footer.module.scss";
import moment from "moment";
import React from "react";
import useSubscription from "../hooks/useSubscription.hook";
import {Spinner} from "react-bootstrap";
import {useIntl} from "react-intl";
import Link from "next/link";

export default function Footer(props) {
  const { blogs, company } = props;
  const { formik, loading } = useSubscription();
  const intl = useIntl();
  return (
    <footer className={styles.footer}>
      <section className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 mt-4 mt-md-0">
              <div className={styles.contact}>
                <img className={styles.logo} src="/images/logo-webdep.png" alt="logo" />
                <ul className="reset-list mt-4">
                  <li className={styles.item}>
                    <img className={styles.image} src="/images/address.svg" alt="address" />
                    <p>
                      <a href={`https://maps.google.com/?q=${company?.address}`} target="_blank" className={styles.text}>{company?.address}</a>
                    </p>
                  </li>
                  <li className={styles.item}>
                    <img className={styles.image} src="/images/phone.svg" alt="phone" />
                    <p className={styles.text}>{company?.phone}</p>
                  </li>
                  <li className={styles.item}>
                    <img className={styles.image} src="/images/email.svg" alt="email" />
                    <p className={styles.text}>{company?.email}</p>
                  </li>
                  <li className={styles.item}>
                    <img className={styles.image} src="/images/skype.svg" alt="skype" />
                    <p className={styles.text}>{company?.skype}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-2 mt-4 mt-md-0">
              <div className={styles.menu}>
                <h3>Menu</h3>
                <ul className="reset-list">
                  <li className={styles.item}><Link href="/">{intl.formatMessage({id : 'home_page'})}</Link></li>
                  <li className={styles.item}><Link href="/introduce">{intl.formatMessage({id : 'introduce'})}</Link></li>
                  <li className={styles.item}><Link href="/product">{intl.formatMessage({id : 'product'})}</Link></li>
                  <li className={styles.item}><Link href="/blog?s=">{intl.formatMessage({id : 'blog'})}</Link></li>
                  <li className={styles.item}><Link href="/about-us">{intl.formatMessage({id : 'contact'})}</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mt-4 mt-md-0">
              <div className={styles.blogs}>
                <h3>Blog</h3>
                {(blogs || []).map(blog => (
                  <Link href={`/blog/${blog.slug}`}key={blog.id}>
                    <a className={styles.item}>
                      <p className={styles.title}>{blog.tittle}</p>
                      <span>{moment(blog.createdAt).format("YYYY/MM/DD HH:mm")}</span>
                      <div className={styles.divider} />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-4 mt-md-0">
              <div className={styles.subscription}>
                <h3>{intl.formatMessage({id: 'subscribe'})}</h3>
                <p>{intl.formatMessage({id: 'subscribe_for_more_info'})}</p>
                <form onSubmit={formik.handleSubmit}>
                  <p className={styles.input}>
                    <input
                      name="email"
                      placeholder="Email..."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className="w-100"/>
                    <label className={styles.label} htmlFor="email" onClick={() => formik.submitForm()}>
                      {loading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        <i className="bi bi-telegram" />
                      )}
                    </label>
                  </p>
                </form>
                <h3>{intl.formatMessage({id: 'connect_with_us'})}</h3>
                <div className={styles.social}>
                  <a className={styles.icon} href={company?.facebook}><i className="bi bi-facebook" /></a>
                  <a className={styles.icon} href={company?.instagram}><i className="bi bi-instagram" /></a>
                  <a className={styles.icon} href={company?.twitter}><i className="bi bi-twitter" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`text-center ${styles.copyRight}`}>
        <div className="container">
          <div className={styles.text}>
            {intl.formatMessage({id: 'copy_right'})}
          </div>
        </div>
      </div>
    </footer>
  )
}
