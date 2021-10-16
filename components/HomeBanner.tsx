import styles from "../styles/layout/HomeBanner.module.scss";
import Button from "./Button"
import {useIntl} from "react-intl";

export default function HomeBanner({banner}) {
  const intl = useIntl();
  return (
    <section className={`${styles.Banner} banner`}>
      <div className={`${styles.Banner__Bg}  container`}>
        <div className={`${styles.Banner__Content} row`}>
          <div className={`${styles.Banner__TextBox} col-sm-12 col-md-6 align-self-center`}>
            <div className="text-inner text-left">
              <h2 className="uppercase">
                <strong>
                  {banner?.title}
                </strong>
              </h2>
              <h3>
                {banner?.subTitle}
              </h3>
              <p>{banner?.description}</p>
              <Button title={intl.formatMessage({id: 'about_us'})} href="/introduce" />
              <Button title={intl.formatMessage({id: 'contact'})} variant="primary is-outline" href="/about-us" />
            </div>
          </div>
          <div className="col-sm-0 col-md-1"></div>
          <div className={`${styles.Banner__Img} col-sm-12 col-md-5 align-self-center`}>
            <div className={`${styles.Banner__Img__Inner}`}>
              <img width="840" height="841" src={banner.thumbnail?.url} className="attachment-original size-original" alt="Về chúng tôi" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
