import styles from "../styles/layout/HomeBlog.module.scss";
import Button from "./Button"
import TitleLine from "./TitleLine";
import Slider from "react-slick";
import useBlog from "../hooks/useBlog.hook";
import Link from "next/link";
import {useIntl} from "react-intl";

export default function HomeBlog() {
  const intl = useIntl();
  const { settings, data, content } = useBlog();
  return (
    <section className={`${styles.Blog} Blog`}>
      <div className="container">
        <div className="row gx-5">
          <div className="col-sm-12 col-md-10 col-lg-4 align-self-center">
            <TitleLine category={content.category} title={content.title} description={content.description} />
            <Button title={intl.formatMessage({id: 'view_more'})} variant="primary is-outline" href="/blog?s=" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8 align-self-center">
            <div className="row gx-2">
              <Slider {...settings}>
                {data.map(blog => (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={blog.id}>
                    <Link href={`/blog/${blog.slug}`}>
                      <a className={`${styles.Blog__Item}`}>
                        <div className={`${styles.Blog__Item__Inner}`}>
                          <div className={`${styles.Blog__Item__ImageWrapper}`}>
                            <div className={`${styles.Blog__Item__Image}`}>
                              <img src={blog.img} alt={blog.title} srcSet="" />
                            </div>
                          </div>
                          <div className={`${styles.Blog__Item__Content}`}>
                            <div className={`${styles.Blog__Item__Title}`}>
                              <h5>{blog.title}</h5>
                            </div>
                            <div className={`${styles.Blog__Item__Description}`}>
                              <p>{blog.description}</p>
                            </div>
                            <div className={`${styles.Blog__Item__Button}`}>
                              <Link href={`/blog/${blog.slug}`} key={blog.id}>
                                <button>{intl.formatMessage({id: 'view_more'})}</button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
