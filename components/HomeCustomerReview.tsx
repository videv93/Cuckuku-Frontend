import styles from "../styles/layout/HomeCustomerReview.module.scss";
import useCustomerReview from "../hooks/useCustomerReview.hook";
import Slider from "react-slick";
import {useIntl} from "react-intl";

export default function HomeCustomerReview({ reviews }) {
  const intl = useIntl();
  const { settings } = useCustomerReview()
  return (
    <section className={`${styles.CustomerReview}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles.CustomerReview__Title}`}>
              <h3>{intl.formatMessage({id: 'feedback'})}</h3>
              <h2>
                {intl.formatMessage({id: 'customer_feedback'})}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles.CustomerReview__Slider}`}>
              <div className="row w-100">
                <Slider {...settings}>
                  {(reviews || []).map((customer, index) => (
                    <div className="col-sm-12 col-md-6" key={`customerDetail_${index}`}>
                      <div className={`${styles.CustomerReview__Item}`}>
                        <div className={`${styles.CustomerReview__Item__Left}`}>
                          <img src={customer.avatar?.url} alt="" />
                        </div>
                        <div className={`${styles.CustomerReview__Item__Right}`}>
                          <div className={`star-rating rating-${customer.rating}`}>
                            <span>
                              <strong></strong>
                            </span>
                          </div>
                          <div className={`${styles.CustomerReview__Content}`}>
                            <p>{customer.content}</p>
                          </div>
                          <div className={`${styles.CustomerReview__Contact}`}>
                            <strong>{customer.customerName}</strong>
                            <span> / </span>
                            <span>{customer.customerCompany}</span>
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
