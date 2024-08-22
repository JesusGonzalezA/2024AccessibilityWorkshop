import { useSelector } from "react-redux"
import styles from "./srAlert.module.css"
import { lastAlertMessage, lastPoliteMessage } from "../state/srAlertReducer"

export const SRAlert = () => {
  const politeMsg = useSelector(lastPoliteMessage)
  const alertMsg = useSelector(lastAlertMessage)

  return (
    <div className={styles.srOnly}>
      <div aria-live="polite">{politeMsg}</div>
      <div aria-live="assertive">{alertMsg}</div>
    </div>
  )
}
