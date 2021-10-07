import React from "react";
import { useRouter } from 'next/router'
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import GoogleMapReact from 'google-map-react';
import styles from '../styles/pages/AboutUs.module.scss'
import useAboutUs from "../hooks/useAboutUs.hook";
import Button from "../components/Button"

const AboutUs = () => {
  const router = useRouter()
  const { s } = router.query
  const { formik } = useAboutUs()
  return (
    <>
      <PageHeader title="LIÊN HỆ" breadcrumbs={{ title: 'Trang chủ', url: '/' }} />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div style={{ height: '520px', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAA9JjiLtqCv24lzKUI7vzwb2LCWGDpn0o' }}
                defaultCenter={{
                  lat: 59.95,
                  lng: 30.33
                }}
                defaultZoom={11}
              >

              </GoogleMapReact>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-3 align-self-center">
                <div className={`${styles.AboutUs__Logo} col-inner text-center`}>
                  <img src="images/logo-mona.png" alt="" srcSet="" />
                </div>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-9 align-self-center">
                <div className={styles.AboutUs__Contact}>
                  <ul className="reset-list mt-4">
                    <li className={styles.AboutUs__Contact__Item}>
                      <img className={styles.AboutUs__Contact__Image} src="images/address.svg" alt="address" />
                      <p className={styles.AboutUs__Contact__Text}>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                    </li>
                    <li className={styles.AboutUs__Contact__Item}>
                      <img className={styles.AboutUs__Contact__Image} src="images/phone.svg" alt="phone" />
                      <p className={styles.AboutUs__Contact__Text}>076 922 0162</p>
                    </li>
                    <li className={styles.AboutUs__Contact__Item}>
                      <img className={styles.AboutUs__Contact__Image} src="images/email.svg" alt="email" />
                      <p className={styles.AboutUs__Contact__Text}>demonhunter@gmail.com</p>
                    </li>
                    <li className={styles.AboutUs__Contact__Item}>
                      <img className={styles.AboutUs__Contact__Image} src="images/skype.svg" alt="skype" />
                      <p className={styles.AboutUs__Contact__Text}>demonhunterp</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className={`${styles.AboutUs__Title} text-center mt-4 mb-4`}>
                <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
              </div>
            </div>
            <div className="col-sm-12">
              <div className={`${styles.AboutUs__Form}`}>
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
                        placeholder="Họ và Tên"
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
                        placeholder="Email"
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
                        placeholder="Số điện thoại"
                        autoComplete="off"
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <div className="error-message">{formik.errors.phone}</div>
                      ) : null}
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 pb-4">
                      <input
                        id="address"
                        name="address"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        placeholder="Địa chỉ"
                        autoComplete="off"
                      />
                      {formik.touched.address && formik.errors.address ? (
                        <div className="error-message">{formik.errors.address}</div>
                      ) : null}
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 pb-4">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        placeholder="Lời nhắn"
                        autoComplete="off"
                      />
                      {formik.touched.message && formik.errors.message ? (
                        <div className="error-message">{formik.errors.message}</div>
                      ) : null}
                    </div>
                    <div className="col-12">
                      <Button type="submit" title="Gởi"></Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

    </ >
  )
}
export default AboutUs
