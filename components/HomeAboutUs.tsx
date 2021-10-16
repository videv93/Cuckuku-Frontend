import styles from "../styles/layout/HomeAboutUs.module.scss";
import TitleLine from "./TitleLine";
import {useIntl} from "react-intl";

export default function HomeAboutUs({ aboutUs }) {
  const intl = useIntl();
  return (
    <section className={`${styles.AboutUs}`}>
      <div className="container">
        <div className="row">
          <div className="col-ms-12 col-lg-6">
            <div className="col-inner text-center">
              <img src={aboutUs.thumbnail?.url} alt="About Us" />
            </div>
          </div>
          <div className="col-ms-12 col-md-10 col-lg-6">
            <TitleLine
              title={aboutUs.title}
              category={intl.formatMessage({id: 'about_us'})}
              description={aboutUs.description?.html}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
