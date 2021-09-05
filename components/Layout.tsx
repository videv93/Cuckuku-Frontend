import React, {ReactNode} from 'react'
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/layout/Layout.module.scss";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({children, title = 'Thiết kế web đẹp – Hosting / Domain / SSL Cert'}: Props) => (
  <div className={styles.wrapper}>
    <Header />
      <main className={styles.main}>
        {children}
      </main>
    <Footer />
  </div>
)

export default Layout
