import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Product } from "../domain/Product"
import { useDispatch } from "react-redux"
import { addToCart } from "../state/marketplaceReducer"
import { useAlertSR } from "../hooks/useAlertSR"

export const ProductView = (product: Product) => {
  const { src, title, content } = product
  const [alert] = useAlertSR()
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, amount: 1 }))
    alert({ type: "polite", message: `${product.title} added to cart` })
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="275"
        sx={{ objectFit: "fit" }}
        image={src}
        alt={""}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          aria-label={`Add ${title} to cart`}
          onClick={handleAddToCart}
          size="small"
          variant="contained"
        >
          <ShoppingCartIcon />
          Add to cart
        </Button>
        <Button size="small" aria-label={`Share ${title}`}>
          Share
        </Button>
      </CardActions>
    </Card>
  )
}
