import React from "react";
import usePageHeader from "../hooks/usePageHeader.hook";
import styles from "../styles/layout/PageHeader.module.scss";
import Link from "next/link";

type Props = {
  breadcrumbs: {
    title: string,
    url?: string
  }
  title: string;

}

export default function PageHeader({ breadcrumbs = {
  title: "",
  url: "/"
}, title = '' }: Props) {

  const { onRedirect } = usePageHeader()
  return (
    <div className={styles.PageHeader}>
      <div className={styles.PageHeader__Bg}>
        <div className={styles.PageHeader__Bg__Image}>
        </div>
        <div className={styles.PageHeader__Bg__Fill}>
        </div>
      </div>
      <div className={`${styles.PageHeader__Inner} container text-center d-flex flex-column justify-content-center`}>
        <div className={`${styles.PageHeader__Inner__Title}  uppercase flex-col`}>
          <h1> {title} </h1>
        </div>
        <div className={`uppercase flex-col`}>
          <div className={`${styles.PageHeader__Inner__Breadcrumbs}`}>
            <nav>
              <Link href={breadcrumbs.url}>{breadcrumbs.title}</Link>
              <span>/</span>
              {title}
            </nav>
          </div>
        </div>
      </div>
    </div >
  )
}
