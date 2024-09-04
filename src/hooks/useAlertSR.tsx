import { useDispatch } from "react-redux"
import { addMessage, removeMessage } from "../state/srAlertReducer"

type Props = {
  message: string
  type: "polite" | "alert"
}
export const useAlertSR = () => {
  const dispatch = useDispatch()

  const alert = ({ message, type }: Props) => {
    dispatch(addMessage({ message, queue: type }))
    setTimeout(() => {
      dispatch(removeMessage({ message, queue: type }))
    }, 1000)
  }

  return [alert]
}
