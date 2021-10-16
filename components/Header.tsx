import React from "react";
import styles from "../styles/layout/Header.module.scss";
import useHeader from "../hooks/useHeader.hook";
import LanguageSwitcher from "./LanguageSwitcher";
import {useIntl} from "react-intl";

export default function Header() {
  const { hideHeader } = useHeader();
  const intl = useIntl();
  return (
    <header className={`${styles.Header} has-sticky sticky-jump`} style={{ marginTop: hideHeader ? 100 : 0 }}>
      <div className={`${styles.Header__Wrapper} header-wrapper ${hideHeader ? 'stuck' : ''}`}>
        <div className={styles.Header__Main} style={{ height: hideHeader ? 70 : 100, background: hideHeader ? 'rgba(255,255,255, 0.9)' : 'white' }}>
          <nav className={`${styles.Header__Inner} header-inner flex-row container logo-left medium-logo-center navbar navbar-expand-lg navbar-light`}>
            <a className={`${styles.Header__Logo} flex-col navbar-brand`} href="/">
              <img src="/images/logo-webdep.png" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="flex-col hide-for-medium flex-right collapse navbar-collapse" id="navbarNav">
              <ul className={`nav navbar-nav reset-list-row ${styles.Header__Menu}`}>
                <li className="nav-item"><a className="nav-link" href="/">{intl.formatMessage({id: 'home_page'})}</a></li>
                <li className="nav-item"><a className="nav-link" href="/introduce">{intl.formatMessage({id: 'introduce'})}</a></li>
                <li className="nav-item"><a className="nav-link" href="/product">{intl.formatMessage({id: "product"})}</a></li>
                <li className="nav-item"><a className="nav-link" href="/blog?s=">{intl.formatMessage({id: 'blog'})}</a></li>
                <li className="nav-item"><a className="nav-link" href="/about-us">{intl.formatMessage({id: 'contact'})}</a></li>
                <LanguageSwitcher />
                <li className="has-dropdown">
                  <a><i className="bi bi-search" /></a>
                  <ul className="nav-dropdown nav-dropdown-simple" >
                    <li className="header-search-form search-form html relative has-icon">
                      <div className="header-search-form-wrapper">
                        <div className="searchform-wrapper ux-search-box relative form- is-normal">
                          <form role="search" method="get" className="searchform" action="http://mauweb.monamedia.net/webdep/">
                            <div className="flex-row relative">
                              <div className="flex-col flex-grow">
                                <input type="search" className="search-field mb-0" name="s" value="" placeholder="Tìm kiếm…" autoComplete="off" readOnly />
                                <input type="hidden" name="post_type" value="product" readOnly />
                              </div>
                              <div className="flex-col">
                                <button type="submit" className="ux-search-submit submit-button secondary button icon mb-0">
                                  <i className="icon-search" />
                                </button>
                              </div>
                            </div>
                            <div className="live-search-results text-left z-top">
                              <div className="autocomplete-suggestions">
                                <div className="autocomplete-suggestion" data-index="0">
                                  <div className="search-name">Không có sản phẩm nào.</div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
