import { ReactNode } from "react";
import styles from "../styles/layout/TitleLine.module.scss";
import parse from "html-react-parser";

type Props = {
  children?: ReactNode;
  title: string;
  description: string;
  category: string;
}

export default function TitleLine({ title = '', description, category = '' }: Props) {
  return (
    <div>
      <div className={`${styles.TitleLine__Title}`}>
        <h3>
          {category}
        </h3>
        <h2>{title}</h2>
      </div>
      {parse(description)}
    </div>
  )
}
