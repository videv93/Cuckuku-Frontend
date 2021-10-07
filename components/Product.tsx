import parse from "html-react-parser";
import styles from "../styles/components/Product.module.scss";

export default function Product({product}) {
  return (
    <div className={`animate__animated animate__zoomIn ${styles.container}`}>
      <div className={styles.background} style={{background: `url(${product.thumbnails[0]?.url})`}} />
      <h4 className={styles.title}>{product.title}</h4>
      <div className={styles.description}>{product.shortDescription}</div>
      <a href={`/product/${product.slug}`} className={styles.viewMore}>Tìm hiểu thêm</a>
    </div>
  )
}