import React, {ReactNode, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/layout/Layout.module.scss";
import useBlog from "../hooks/useBlog.hook";
import useCompany from "../hooks/useCompany.hook";
import {useIntl} from "react-intl";

type Props = {
  children?: ReactNode
  title?: string,
  recentPosts?: any,
}

const Layout = ({children, title}: Props) => {
  const {recentBlogs} = useBlog();
  const {company} = useCompany();
  const intl = useIntl();
  title = title || intl.formatMessage({id: 'head_title'});
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer blogs={recentBlogs} company={company}/>
    </div>
  )
}

export default Layout
