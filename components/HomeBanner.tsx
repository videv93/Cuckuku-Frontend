import styles from "../styles/layout/HomeBanner.module.scss";
import Button from "./Button"

export default function HomeBanner() {
  return (
    <section className={`${styles.Banner} banner`}>
      <div className={`${styles.Banner__Bg}  container`}>
        <div className={`${styles.Banner__Content} row`}>
          <div className={`${styles.Banner__TextBox} col-sm-12 col-md-6 align-self-center`}>
            <div className="text-inner text-left">
              <h2 className="uppercase">
                <strong>
                  Chuyên Nghiệp
                </strong>
              </h2>
              <h3>
                Trong từng sản phẩm
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
              <Button title="Về chúng tôi"></Button>
              <Button title="Liên hệ" variant="primary is-outline"></Button>
            </div>
          </div>
          <div className="col-sm-0 col-md-1"></div>
          <div className={`${styles.Banner__Img} col-sm-12 col-md-5 align-self-center`}>
            <div className={`${styles.Banner__Img__Inner}`}>
              <img width="840" height="841" src="images/banner-image-1.jpeg" className="attachment-original size-original" alt="Về chúng tôi" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
