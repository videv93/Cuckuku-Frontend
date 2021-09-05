import React from "react";
import styles from "../styles/layout/Header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={styles.topNav}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">
              <img className={styles.logo} src="images/logo-webdep.png" alt="" />
            </div>
            <div className="col-6 align-middle">
              <ul className={`reset-list-row ${styles.menu}`}>
                <li>Trang chủ</li>
                <li>Giới thiệu</li>
                <li>Domain</li>
                <li>Hosting</li>
                <li>SSL condition</li>
                <li>Thiêt kế logo</li>
                <li>Liên hệ</li>
              </ul>
            </div>
            <div className="col-2">
              <div className={styles.search}>
                <i className="bi bi-search"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
