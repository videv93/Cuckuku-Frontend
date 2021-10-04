import React, {ReactNode, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/layout/Layout.module.scss";
import useBlog from "../hooks/useBlog.hook";

type Props = {
  children?: ReactNode
  title?: string,
  recentPosts?: any
}

const Layout = ({children, title = 'Thiết kế web đẹp – Hosting / Domain / SSL Cert'}: Props) => {
  const {recentBlogs} = useBlog();
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer blogs={recentBlogs}/>
    </div>
  )
}

export default Layout
