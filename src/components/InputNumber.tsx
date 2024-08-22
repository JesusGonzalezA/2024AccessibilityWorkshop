import { IconButton, Stack, Tooltip } from "@mui/material"
import { AllHTMLAttributes, forwardRef, Ref } from "react"
import styles from "./inputNumber.module.css"
import DeleteIcon from "@mui/icons-material/Delete"

type Props = AllHTMLAttributes<HTMLInputElement> & {
  productTitle: string
  inputLabel: string
  inputSRLabel: string
  inputId: string
  onRemove: () => void
  onEdit: (arg: number) => void
}
export const InputNumber = forwardRef(
  (
    {
      step = 1,
      max = 10,
      min = 1,
      value,
      productTitle,
      inputId,
      inputLabel,
      inputSRLabel,
      onRemove,
      onEdit,
    }: Props,
    removeBtnRef,
  ) => {
    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
      event,
    ) => {
      onEdit(Number(event.target.value))
    }

    const handleOnRemove = () => {
      onRemove()
    }

    return (
      <Stack
        direction={"row"}
        alignContent={"center"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        spacing={2}
        className={styles.container}
      >
        <label
          htmlFor={inputId}
          aria-label={inputSRLabel}
          className={styles.label}
        >
          {inputLabel}
        </label>
        <input
          id={inputId}
          value={value}
          onChange={handleOnChange}
          type="number"
          step={step}
          max={max}
          min={min}
          className={styles.input}
        />
        <Tooltip title={`Remove ${productTitle} from cart`}>
          <IconButton
            onClick={handleOnRemove}
            className={styles.icon}
            ref={removeBtnRef}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    )
  },
)
