import useHomeAboutUs from "../hooks/useHomeAboutUs.hook";
import styles from "../styles/layout/HomeAboutUs.module.scss";
import TitleLine from "./TitleLine";

export default function HomeAboutUs({ aboutUs }) {
  const { data } = useHomeAboutUs()
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
              category={data.category}
              description={aboutUs.description?.html}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
