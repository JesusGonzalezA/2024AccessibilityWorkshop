import { Button, Container, Popover, Stack, Typography } from "@mui/material"
import AppleIcon from "@mui/icons-material/Apple"
import { useSelector } from "react-redux"
import {
  shoppingCartProucts,
  shoppingCartSize,
} from "../state/marketplaceReducer"
import { CartProductView } from "./CartProductView"
import { useRef } from "react"
import { useAlertSR } from "../hooks/useAlertSR"

type Props = {
  anchorEl: Element | null
  open: boolean
  onClose: () => void
}

export const ShoppingCartPopover = ({ anchorEl, open, onClose }: Props) => {
  const removeButtonRefs = useRef<HTMLButtonElement[]>([])
  const emptyCartRef = useRef<HTMLElement>(null)
  const shoppingCartProducts = useSelector(shoppingCartProucts)
  const isShoppingCartEmpty = useSelector(shoppingCartSize) === 0
  const [alert] = useAlertSR()

  const sendAlertOnRemove = (productTitle: string) => {
    alert({ type: "polite", message: `${productTitle} was removed from cart` })
  }

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
            <Typography ref={emptyCartRef}>The cart is empty</Typography>
          ) : (
            <Stack flexDirection={"column"} spacing={2} role="list">
              {shoppingCartProducts.map((product, index) => (
                <CartProductView
                  aria-label={product.title}
                  key={product.id}
                  {...product}
                  onRemove={() => {
                    if (index === 0 && !isShoppingCartEmpty)
                      removeButtonRefs.current[1].focus()
                    else removeButtonRefs.current[index - 1].focus()

                    sendAlertOnRemove(product.title)
                  }}
                  ref={(ref) =>
                    (removeButtonRefs.current[index] = ref as HTMLButtonElement)
                  }
                />
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
