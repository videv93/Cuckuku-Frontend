import styles from "../styles/layout/HomeOurMission.module.scss";
import useOurMission from "../hooks/useOurMission.hook";
import IconImage from "./IconImage"


export default function HomeOurMission({ aboutUs }) {

  const { listItem } = useOurMission()
  return (
    <section className={`${styles.OurMission}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col-inner text-center">
              <h3>
                Nhiệm vụ
              </h3>
              <h2>
                Những công việc mà chúng tôi làm
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="col-inner text-center">
              <IconImage
                width={240}
                height={240}
                src={aboutUs.jobThumbnail1?.url}
                alt={aboutUs.jobTitle1}
                title={aboutUs.jobTitle1}
                description={aboutUs.jobDescription1}
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="col-inner text-center">
              <IconImage
                width={240}
                height={240}
                src={aboutUs.jobThumbnail2?.url}
                alt={aboutUs.jobTitle2}
                title={aboutUs.jobTitle2}
                description={aboutUs.jobDescription2}
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="col-inner text-center">
              <IconImage
                width={240}
                height={240}
                src={aboutUs.jobThumbnail3?.url}
                alt={aboutUs.jobTitle3}
                title={aboutUs.jobTitle3}
                description={aboutUs.jobDescription3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
