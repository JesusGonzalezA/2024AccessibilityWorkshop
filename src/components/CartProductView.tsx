import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material"
import { CartProduct } from "../domain/CartProduct"
import { InputNumber } from "./InputNumber"
import { editAmount, removeFromCart } from "../state/marketplaceReducer"
import { useDispatch } from "react-redux"
import { forwardRef } from "react"

type Prop = CartProduct & {
  onRemove: () => void
}

export const CartProductView = forwardRef(
  ({ onRemove, amount, ...product }: Prop, removeBtnRef) => {
    const dispatch = useDispatch()
    const { src, title } = product

    return (
      <Card
        sx={{
          display: "flex",
          width: "100%",
          height: "10rem",
          justifyContent: "space-between",
        }}
        role="listitem"
        aria-labelledby={`title_${product.id}`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography
              id={`title_${product.id}`}
              gutterBottom
              variant="body1"
              component="h3"
              marginBottom={"1rem"}
            >
              {title}
            </Typography>
            <InputNumber
              inputId={`${product.id}_input`}
              productTitle={product.title}
              inputLabel="Amount"
              inputSRLabel={`Amount for ${product.title}`}
              value={amount}
              ref={removeBtnRef}
              onRemove={() => {
                dispatch(removeFromCart({ id: product.id }))
                onRemove()
              }}
              onEdit={(amount) => {
                dispatch(editAmount({ id: product.id, amount }))
              }}
            />
          </CardContent>
        </Box>
        <CardMedia component="img" alt={""} image={src} sx={{ width: 151 }} />
      </Card>
    )
  },
)
