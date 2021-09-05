import styles from "../styles/layout/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className={styles.contact}>
                <img className={styles.logo} src="images/logo-webdep.png" alt="logo" />
                <ul className="reset-list mt-4">
                  <li className={styles.item}>
                    <img className={styles.image} src="images/address.svg" alt="address" />
                    <p className={styles.text}>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                  </li>
                  <li className={styles.item}>
                    <img className={styles.image} src="images/phone.svg" alt="phone" />
                    <p className={styles.text}>076 922 0162</p>
                  </li>
                  <li className={styles.item}>
                    <img className={styles.image} src="images/email.svg" alt="email" />
                    <p className={styles.text}>demonhunter@gmail.com</p>
                  </li>
                  <li className={styles.item}>
                    <img className={styles.image} src="images/skype.svg" alt="skype" />
                    <p className={styles.text}>demonhunterp</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className={styles.menu}>
                <h3>Menu</h3>
                <ul className="reset-list">
                  <li className={styles.item}><a href="/">Trang chủ</a></li>
                  <li className={styles.item}><a href="/gioi-thieu">Giới thiệu</a></li>
                  <li className={styles.item}><a href="/blog">Blog chia sẻ</a></li>
                  <li className={styles.item}><a href="/tin-tuc">Tin tức sự kiện</a></li>
                  <li className={styles.item}><a href="/lien-he">Liên hệ</a></li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <h3>Blog</h3>
            </div>
            <div className="col-4">
              <div className={styles.subscription}>
                <h3>Đăng ký</h3>
                <p>Đăng ký để nhận được thông tin mới nhất từ chúng tôi</p>
                <form>
                  <p>
                    <input name="email" />
                    <label htmlFor="email">
                      <i className="fas fa-plane"/>
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
