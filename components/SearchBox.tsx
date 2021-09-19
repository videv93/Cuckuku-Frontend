import { ReactNode } from "react";
import useSearchBox from "../hooks/useSearchBox.hook";
import styles from "../styles/layout/SearchBox.module.scss";
import { useRouter } from "next/router";

export default function SearchBox() {
  const { formik, onSearch, showSuggest, listAutocomplete, searching, onRedirect } = useSearchBox()
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
                placeholder="Tìm kiếm..."
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
                      <a href={`/blog/${suggest.slug}`} className={`${styles.SearchBox__Suggestion}`}>
                        <img src={suggest.thumbnail?.url} className={styles.SearchBox__Suggestion__Thumbnail} alt="" />
                        <span className={styles.SearchBox__Suggestion__Title}>
                          {suggest.tittle}
                        </span>
                      </a>
                    )) : (<div className={`${styles.SearchBox__Suggestion}`}>
                      <div>
                        Không có sản phẩm nào.
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
