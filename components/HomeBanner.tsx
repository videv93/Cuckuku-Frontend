import styles from "../styles/layout/HomeBanner.module.scss";
import useBanner from "../hooks/useBanner.hook";
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
              <img width="840" height="841" src="http://mauweb.monamedia.net/webdep/wp-content/uploads/2018/11/banner-image-1.jpg" className="attachment-original size-original" alt="" srcSet="http://mauweb.monamedia.net/webdep/wp-content/uploads/2018/11/banner-image-1.jpg 840w, http://mauweb.monamedia.net/webdep/wp-content/uploads/2018/11/banner-image-1-150x150.jpg 150w, http://mauweb.monamedia.net/webdep/wp-content/uploads/2018/11/banner-image-1-300x300.jpg 300w, http://mauweb.monamedia.net/webdep/wp-content/uploads/2018/11/banner-image-1-768x769.jpg 768w, http://mauweb.monamedia.net/webdep/wp-content/uploads/2018/11/banner-image-1-600x601.jpg 600w, http://mauweb.monamedia.net/webdep/wp-content/uploads/2018/11/banner-image-1-100x100.jpg 100w" sizes="(max-width: 840px) 100vw, 840px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
