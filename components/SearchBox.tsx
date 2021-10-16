import useSearchBox from "../hooks/useSearchBox.hook";
import styles from "../styles/layout/SearchBox.module.scss";
import {useIntl} from "react-intl";
import Link from "next/link";

export default function SearchBox() {
  const { formik, onSearch, showSuggest, listAutocomplete, searching, onRedirect } = useSearchBox();
  const intl = useIntl();
  return (
    <aside>
      <div className={`${styles.SearchBox}`}>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex-row relative align-items-start">
            <div className="flex-col flex-grow">
              <input
                id="search"
                name="search"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue('search', e.target.value);
                  onSearch(e.target.value)
                }}
                onBlur={formik.handleBlur}
                value={formik.values.search}
                placeholder={intl.formatMessage({id: 'searching'})}
                autoComplete="off"
              />
              {formik.touched.search && formik.errors.search ? (
                <div className="error-message">{formik.errors.search}</div>
              ) : null}
            </div>
            <div className="flex-col">
              <button type="submit">
                <i className={`${searching ? 'rotate ' : ' '} bi bi-${searching ? 'arrow-clockwise' : 'search'}`} /></button>
            </div>
          </div>
          {
            showSuggest ? (
              <div className={`${styles.SearchBox__Results}`}>
                <div className={`${styles.SearchBox__Suggestions}`}>
                  {listAutocomplete.length ?
                    listAutocomplete.map(suggest => (
                      <Link href={`/blog/${suggest.slug}`}>
                        <a className={`${styles.SearchBox__Suggestion}`}>
                          <img src={suggest.thumbnail?.url} className={styles.SearchBox__Suggestion__Thumbnail} alt="" />
                          <span className={styles.SearchBox__Suggestion__Title}>
                            {suggest.tittle}
                          </span>
                        </a>
                      </Link>
                    )) : (<div className={`${styles.SearchBox__Suggestion}`}>
                      <div>
                        {intl.formatMessage({id: 'no_result'})}
                      </div>
                    </div>)
                  }
                </div>
              </div>
            ) : <></>
          }
        </form>
      </div>
    </aside >
  )
}
