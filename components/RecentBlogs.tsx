import styles from '../styles/components/RecentBlog.module.scss';
import {Blog} from "../interfaces";
import {useIntl} from "react-intl";

interface RecentBlogsProps {
  blogs: Blog[]
}

export default function RecentBlogs(props: RecentBlogsProps) {
  const {blogs} = props;
  const intl = useIntl();
  return (
    <div className={styles.container}>
      <div>{intl.formatMessage({id: 'new_posts'})}</div>
      <div className={styles.wrapper}>
        {(blogs || []).map(blog => (
          <a href={`/blog/${blog.slug}`} className={styles.item}>
            <img className={styles.thumbnail} src={blog.thumbnail?.url} alt=""/>
            <span className={styles.title}>{blog.tittle}</span>
          </a>
        ))}
      </div>
    </div>
  )
}