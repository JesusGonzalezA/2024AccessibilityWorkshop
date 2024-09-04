import { useSelector } from "react-redux"
import styles from "./srAlert.module.css"
import { allAlertMessages, allPoliteMessages } from "../state/srAlertReducer"

export const SRAlert = () => {
  const alertMsgs = useSelector(allAlertMessages)
  const politeMsgs = useSelector(allPoliteMessages)

  return (
    <div className={styles.srOnly}>
      <div aria-live="polite">
        {politeMsgs.map((m) => (
          <div>{m}</div>
        ))}
      </div>
      <div aria-live="assertive">
        {alertMsgs.map((m) => (
          <div>{m}</div>
        ))}
      </div>
    </div>
  )
}
