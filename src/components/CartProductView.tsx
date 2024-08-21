import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material"
import { CartProduct } from "../domain/CartProduct"
import { InputNumber } from "./InputNumber"
import { editAmount, removeFromCart } from "../state/marketplaceReducer"
import { useDispatch } from "react-redux"

export const CartProductView = (product: CartProduct) => {
  const dispatch = useDispatch()
  const { alt, src, title } = product

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        height: "10rem",
        justifyContent: "space-between",
      }}
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
            inputSRLabel={`Amount of ${product.title}`}
            value={product.amount}
            onRemove={() => {
              dispatch(removeFromCart({ id: product.id }))
            }}
            onEdit={(amount) => {
              dispatch(editAmount({ id: product.id, amount }))
            }}
          />
        </CardContent>
      </Box>
      <CardMedia component="img" alt={alt} image={src} sx={{ width: 151 }} />
    </Card>
  )
}
