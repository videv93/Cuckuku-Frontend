import styles from "../styles/layout/HomeCustomerReview.module.scss";
import useCustomerReview from "../hooks/useCustomerReview.hook";
import Slider from "react-slick";

export default function HomeCustomerReview() {

  const { settings } = useCustomerReview()
  return (
    <section className={`${styles.CustomerReview}`}>
      <div className="container">

        <div className="row">
          <div className="col-12">
            <div className={`${styles.CustomerReview__Title}`}>
              <h3>Phản hồi</h3>
              <h2>
                Khách hàng nói về chúng tôi
              </h2>
            </div>
          </div>

        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={`${styles.CustomerReview__Slider}`}>
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className={`${styles.CustomerReview__Item}`}>
                        <div className={`${styles.CustomerReview__Item__Left}`}>
                          <img src="images/customer_1.jpeg" alt="" />
                        </div>
                        <div className={`${styles.CustomerReview__Item__Right}`}>
                          <div className="star-rating">
                            <span>
                              <strong></strong>
                            </span>
                          </div>
                          <div className={`${styles.CustomerReview__Content}`}>
                            <p>The overall use of flatsome is very VERY useful. It lacks very few, if any, things! I loved it and have created my first ever website Punsteronline.com! Best yet, flatsome gets free updates that are great! (and the support is amazing as well!:)</p>

                          </div>
                          <div className={`${styles.CustomerReview__Contact}`}>
                            <strong>Mark Jance</strong>
                            <span> / </span>
                            <span>Facebook</span>
                          </div>

                        </div>
                      </div>

                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className={`${styles.CustomerReview__Item}`}>
                        <div className={`${styles.CustomerReview__Item__Left}`}>
                          <img src="images/customer_2.jpeg" alt="" />
                        </div>
                        <div className={`${styles.CustomerReview__Item__Right}`}>
                          <div className="star-rating">
                            <span>
                              <strong></strong>
                            </span>
                          </div>
                          <div className={`${styles.CustomerReview__Content}`}>
                            <p>The overall use of flatsome is very VERY useful. It lacks very few, if any, things! I loved it and have created my first ever website Punsteronline.com! Best yet, flatsome gets free updates that are great! (and the support is amazing as well!:)</p>

                          </div>
                          <div className={`${styles.CustomerReview__Contact}`}>
                            <strong>Mark Jance</strong>
                            <span> / </span>
                            <span>Facebook</span>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">

            <div className="row">
              <div className="col-12">
                <div className={`${styles.CustomerReview__Slider}`}>
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className={`${styles.CustomerReview__Item}`}>
                        <div className={`${styles.CustomerReview__Item__Left}`}>
                          <img src="images/customer_3.jpeg" alt="" />
                        </div>
                        <div className={`${styles.CustomerReview__Item__Right}`}>
                          <div className="star-rating">
                            <span>
                              <strong></strong>
                            </span>
                          </div>
                          <div className={`${styles.CustomerReview__Content}`}>
                            <p>The overall use of flatsome is very VERY useful. It lacks very few, if any, things! I loved it and have created my first ever website Punsteronline.com! Best yet, flatsome gets free updates that are great! (and the support is amazing as well!:)</p>

                          </div>
                          <div className={`${styles.CustomerReview__Contact}`}>
                            <strong>Mark Jance</strong>
                            <span> / </span>
                            <span>Facebook</span>
                          </div>

                        </div>
                      </div>

                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className={`${styles.CustomerReview__Item}`}>
                        <div className={`${styles.CustomerReview__Item__Left}`}>
                          <img src="images/customer_4.jpeg" alt="" />
                        </div>
                        <div className={`${styles.CustomerReview__Item__Right}`}>
                          <div className="star-rating">
                            <span>
                              <strong></strong>
                            </span>
                          </div>
                          <div className={`${styles.CustomerReview__Content}`}>
                            <p>The overall use of flatsome is very VERY useful. It lacks very few, if any, things! I loved it and have created my first ever website Punsteronline.com! Best yet, flatsome gets free updates that are great! (and the support is amazing as well!:)</p>

                          </div>
                          <div className={`${styles.CustomerReview__Contact}`}>
                            <strong>Mark Jance</strong>
                            <span> / </span>
                            <span>Facebook</span>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Slider>
    </section>
  )
}
