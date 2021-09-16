import { ReactNode } from "react";
import styles from "../styles/layout/CardIcon.module.scss";

type Props = {
  title: string;
  description: string;
  imgUrl: string;
}

export default function CardIcon({ imgUrl, title = '', description = '' }: Props) {
  return (
    <div className={styles.CardIcon}>
      <img src={imgUrl} alt={title} />
      <div className={styles.CardIcon__Content}>
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}
