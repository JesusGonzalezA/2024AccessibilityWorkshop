import { useDispatch } from "react-redux"
import { queueMessage, unqueueMessage } from "../state/srAlertReducer"

type Props = {
  message: string
  type: "polite" | "alert"
}
export const useAlertSR = () => {
  const dispatch = useDispatch()

  const alert = ({ message, type }: Props) => {
    dispatch(queueMessage({ message, queue: type }))
    setTimeout(() => {
      dispatch(unqueueMessage({ queue: type }))
    }, 1000)
  }

  return [alert]
}
