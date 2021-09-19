import moment from "moment";
import styles from "../styles/components/Badge.module.scss";
import {useMemo} from "react";

export default function Badge(props) {
  const {date} = props;

  const dayOfMonth = useMemo(() => {
    const d = moment(date);
    return d.date();
  }, [date]);

  const dayOfWeek = useMemo(() => {
    const d = moment(date);
    return ["Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Cn"][d.day()]
  }, [date]);

  return (
    <div className={styles.container}>
      <span className={styles.date}>{dayOfMonth}</span>
      <span className={styles.day}>{dayOfWeek}</span>
    </div>
  )
}