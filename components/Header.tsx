import React from "react";
import styles from "../styles/layout/Header.module.scss";
import useHeader from "../hooks/useHeader.hook";
import LanguageSwitcher from "./LanguageSwitcher";
import {useIntl} from "react-intl";
import Link from 'next/link';
import {useRouter} from "next/router";

export default function Header() {
  const { hideHeader } = useHeader();
  const intl = useIntl();
  const router = useRouter();
  return (
    <header className={`${styles.Header} has-sticky sticky-jump`} style={{ marginTop: hideHeader ? 100 : 0 }}>
      <div className={`${styles.Header__Wrapper} header-wrapper ${hideHeader ? 'stuck' : ''}`}>
        <div className={styles.Header__Main} style={{ height: hideHeader ? 70 : 100, background: hideHeader ? 'rgba(255,255,255, 0.9)' : 'white' }}>
          <nav className={`${styles.Header__Inner} header-inner flex-row container logo-left medium-logo-center navbar navbar-expand-lg navbar-light`}>
            <Link href="/">
              <a className={`${styles.Header__Logo} flex-col navbar-brand`}>
                <img src="/images/logo-webdep.png" alt="" />
              </a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="flex-col hide-for-medium flex-right collapse navbar-collapse" id="navbarNav">
              <ul className={`nav navbar-nav reset-list-row ${styles.Header__Menu}`}>
                <li className={`nav-item ${router.pathname === '/' ? styles.active : ''}`}><Link href="/">{intl.formatMessage({id: 'home_page'})}</Link></li>
                <li className={`nav-item ${router.pathname === '/introduce' ? styles.active : ''}`}><Link href="/introduce">{intl.formatMessage({id: 'introduce'})}</Link></li>
                <li className={`nav-item ${router.pathname === '/product' ? styles.active : ''}`}><Link href="/product">{intl.formatMessage({id: "product"})}</Link></li>
                <li className={`nav-item ${router.pathname === '/blog' ? styles.active : ''}`}><Link href="/blog?s=">{intl.formatMessage({id: 'blog'})}</Link></li>
                <li className={`nav-item ${router.pathname === '/about-us' ? styles.active : ''}`}><Link href="/about-us">{intl.formatMessage({id: 'contact'})}</Link></li>
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
                                <input type="search" className="search-field mb-0" name="s" value="" placeholder={intl.formatMessage({id: 'searching'})} autoComplete="off" readOnly />
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
                                  <div className="search-name">{intl.formatMessage({id: 'no_result'})}</div>
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
