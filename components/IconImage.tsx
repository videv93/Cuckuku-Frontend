import styles from "../styles/layout/IconImage.module.scss";

type Props = {
  width?: number;
  height?: number;
  srcSet?: string;
  src: any;
  alt?: string;
  title?: string;
  description?: string
}

export default function IconImage({ width, height, srcSet = '', src, alt = '', title = '', description = '' }: Props) {


  return (
    <div className={`${styles.Icon}`}>
      <div className={`${styles.Icon__Box}`} style={{ width: width }}>
        <div>
          <div className={`${styles.Icon__Inner}`}>
            <img src={src} alt={alt || title} srcSet={srcSet} className={`${styles.Icon__Inner}`} width={width} height={height} />
          </div>
        </div>
      </div>
      <div className={`${styles.Icon__Text}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
