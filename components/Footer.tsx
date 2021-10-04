import styles from "../styles/layout/Footer.module.scss";
import moment from "moment";

export default function Footer(props) {
  const { blogs } = props;
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
                    <p className={styles.text}>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                  </li>
                  <li className={styles.item}>
                    <img className={styles.image} src="/images/phone.svg" alt="phone" />
                    <p className={styles.text}>076 922 0162</p>
                  </li>
                  <li className={styles.item}>
                    <img className={styles.image} src="/images/email.svg" alt="email" />
                    <p className={styles.text}>demonhunter@gmail.com</p>
                  </li>
                  <li className={styles.item}>
                    <img className={styles.image} src="/images/skype.svg" alt="skype" />
                    <p className={styles.text}>demonhunterp</p>
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
                  <li className={styles.item}><a href="/blog?s=">Blog chia sẻ</a></li>
                  <li className={styles.item}><a href="/blog?s=">Tin tức sự kiện</a></li>
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
                <form>
                  <p>
                    <input name="email" className="w-100"/>
                    <label htmlFor="email">
                      <i className="fas fa-plane" />
                    </label>
                  </p>
                </form>
                <h3>Kết nối với chúng tôi</h3>
                <div className={styles.social}>
                  <a className={styles.icon} href="https://www.facebook.com/"><i className="bi bi-facebook" /></a>
                  <a className={styles.icon} href="https://www.instagram.com/"><i className="bi bi-instagram" /></a>
                  <a className={styles.icon} href="https://twitter.com/"><i className="bi bi-twitter" /></a>
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
