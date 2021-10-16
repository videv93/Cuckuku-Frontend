import styles from "../styles/components/Product.module.scss";
import Link from "next/link";
import {useIntl} from "react-intl";

export default function Product({product}) {
  const intl = useIntl();
  return (
    <div className={`animate__animated animate__zoomIn ${styles.container}`}>
      <div className={styles.background} style={{background: `url(${product.thumbnails[0]?.url})`}} />
      <h4 className={styles.title}>{product.title}</h4>
      <div className={styles.description}>{product.shortDescription}</div>
      <Link href={`/product/${product.slug}`}><a className={styles.viewMore}>{intl.formatMessage({id: 'view_more_product'})}</a></Link>
    </div>
  )
}