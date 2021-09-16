import styles from "../styles/layout/HomeCustomerReview.module.scss";
import useCustomerReview from "../hooks/useCustomerReview.hook";
import Slider from "react-slick";

export default function HomeCustomerReview() {

  const { settings, customerData } = useCustomerReview()
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles.CustomerReview__Slider}`}>
              <div className="row">
                <Slider {...settings}>
                  {customerData.map((customer, index) => (
                    <div className="col-sm-12 col-md-6" key={`customerDetail_${index}`}>
                      <div className={`${styles.CustomerReview__Item}`}>
                        <div className={`${styles.CustomerReview__Item__Left}`}>
                          <img src="images/customer_1.jpeg" alt="" />
                        </div>
                        <div className={`${styles.CustomerReview__Item__Right}`}>
                          <div className={`star-rating rating-${customer.rating}`}>
                            <span>
                              <strong></strong>
                            </span>
                          </div>
                          <div className={`${styles.CustomerReview__Content}`}>
                            <p>{customer.comment}</p>

                          </div>
                          <div className={`${styles.CustomerReview__Contact}`}>
                            <strong>{customer.customerName}</strong>
                            <span> / </span>
                            <span>{customer.source}</span>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>



    </section>
  )
}
