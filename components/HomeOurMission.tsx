import styles from "../styles/layout/HomeOurMission.module.scss";
import useOurMission from "../hooks/useOurMission.hook";
import IconImage from "./IconImage"


export default function HomeOurMission() {

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
          {
            listItem.map(item =>
              <div className="col-md-4 col-sm-12">
                <div className="col-inner text-center">
                  <IconImage width={item.width} height={item.height} src={item.src} alt={item.title} title={item.title} description={item.description} ></IconImage>
                </div>
              </div>
            )
          }

        </div>
      </div>
    </section>
  )
}
