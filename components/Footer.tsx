import styles from "../styles/layout/Footer.module.scss";
import moment from "moment";
import React from "react";
import useSubscription from "../hooks/useSubscription.hook";
import {Spinner} from "react-bootstrap";

export default function Footer(props) {
  const { blogs, company } = props;
  const { formik, loading } = useSubscription();
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
                  <li className={styles.item}><a href="/">Trang chủ</a></li>
                  <li className={styles.item}><a href="/introduce">Giới thiệu</a></li>
                  <li className={styles.item}><a href="/product">Sản phẩm</a></li>
                  <li className={styles.item}><a href="/blog?s=">Blog chia sẻ</a></li>
                  <li className={styles.item}><a href="/about-us">Liên hệ</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mt-4 mt-md-0">
              <div className={styles.blogs}>
                <h3>Blog</h3>
                {(blogs || []).map(blog => (
                  <a href={`/blog/${blog.slug}`} className={styles.item}>
                    <p className={styles.title}>{blog.tittle}</p>
                    <span>{moment(blog.createdAt).format("YYYY/MM/DD HH:mm")}</span>
                    <div className={styles.divider} />
                  </a>
                ))}
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-4 mt-md-0">
              <div className={styles.subscription}>
                <h3>Đăng ký</h3>
                <p>Đăng ký để nhận được thông tin mới nhất từ chúng tôi</p>
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
                <h3>Kết nối với chúng tôi</h3>
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
            © Bản quyền thuộc về . Thiết kế website Mona Media
          </div>
        </div>
      </div>
    </footer>
  )
}
