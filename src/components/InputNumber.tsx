import { IconButton, Stack, Tooltip } from "@mui/material"
import { AllHTMLAttributes, forwardRef } from "react"
import styles from "./inputNumber.module.css"
import DeleteIcon from "@mui/icons-material/Delete"

type Props = AllHTMLAttributes<HTMLInputElement> & {
  productTitle: string
  inputLabel: string
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
        <p className={styles.label}>{inputLabel}</p>
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
            ref={removeBtnRef as React.ForwardedRef<HTMLButtonElement>}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    )
  },
)
