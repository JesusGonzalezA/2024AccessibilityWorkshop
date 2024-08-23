import { Badge, IconButton, Tooltip } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useSelector } from "react-redux"
import { shoppingCartSize } from "../state/marketplaceReducer"
import { useState } from "react"
import { ShoppingCartPopover } from "./ShoppingCartPopover"

export const ShoppingCartButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)
  const amount = useSelector(shoppingCartSize)

  const openShoppingCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCartIsOpen(true)
    setAnchorEl(event.currentTarget)
  }

  const handleOnClose = () => {
    setCartIsOpen(false)
    setAnchorEl(null)
  }

  return (
    <>
      <Tooltip title={`Cart with ${amount} products`}>
        <IconButton
          onClick={openShoppingCart}
          aria-haspopup="dialog"
          sx={{ margin: "0.5rem" }}
        >
          <Badge badgeContent={amount} color="warning">
            <ShoppingCartIcon htmlColor="white" />
          </Badge>
        </IconButton>
      </Tooltip>
      <ShoppingCartPopover
        anchorEl={anchorEl}
        open={cartIsOpen}
        onClose={handleOnClose}
      />
    </>
  )
}
