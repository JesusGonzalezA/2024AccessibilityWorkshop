import { Button, Container, Popover, Stack, Typography } from "@mui/material"
import AppleIcon from "@mui/icons-material/Apple"
import { useSelector } from "react-redux"
import {
  shoppingCartProucts,
  shoppingCartSize,
} from "../state/marketplaceReducer"
import { CartProductView } from "./CartProductView"

type Props = {
  anchorEl: Element | null
  open: boolean
  onClose: () => void
}

export const ShoppingCartPopover = ({ anchorEl, open, onClose }: Props) => {
  const shoppingCartProducts = useSelector(shoppingCartProucts)
  const isShoppingCartEmpty = useSelector(shoppingCartSize) === 0

  return (
    <Popover
      role="dialog"
      aria-labelledby="shopping-cart-title"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={onClose}
    >
      <Container
        sx={{
          margin: "1rem 0rem",
          minWidth: "400px",
          maxWidth: "600px",
          width: "50%",
        }}
      >
        <Typography component={"h2"} variant="h6" id="shopping-cart-title">
          Shopping cart
        </Typography>
        <div style={{ margin: "1rem 0rem" }}>
          {isShoppingCartEmpty ? (
            <Typography>The cart is empty</Typography>
          ) : (
            <Stack flexDirection={"column"} spacing={2}>
              {shoppingCartProducts.map((product) => (
                <CartProductView key={product.id} {...product} />
              ))}
            </Stack>
          )}
        </div>
        <Button
          size={"small"}
          disabled={isShoppingCartEmpty}
          variant="contained"
          fullWidth
        >
          <AppleIcon />
          Pay
        </Button>
      </Container>
    </Popover>
  )
}
