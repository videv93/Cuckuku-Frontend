import styles from "../styles/layout/HomeAboutUs.module.scss";

export default function HomeAboutUs() {
  return (
    <section className={`${styles.AboutUs}`}>
      <div className="container">

        <div className="row">
          <div className="col-ms-12 col-lg-6">
            <div className="col-inner text-center">
              <img src="images/about-us.png" alt="About Us" />
            </div>
          </div>
          <div className="col-ms-12 col-md-10 col-lg-6">
            <div className={`${styles.AboutUs__Title}`}>
              <h3>Về chúng tôi</h3>
              <h2>
                Chúng tôi có một đội ngũ chuyên nghiệp trên nhiều lĩnh vực như thiết kế, marketing, lập trình web và lập trình ứng dụng.
              </h2>
            </div>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</p>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</p>
          </div>

        </div>
      </div>
    </section>
  )
}
