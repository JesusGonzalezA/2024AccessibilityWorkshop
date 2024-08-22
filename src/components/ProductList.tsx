import { Grid } from "@mui/material"
import { ProductView } from "./ProductView"
import { useSelector } from "react-redux"
import { allProducts } from "../state/marketplaceReducer"

export const ProductList = () => {
  const products = useSelector(allProducts)
  return (
    <Grid role="list" container spacing={2} rowGap={2}>
      {products.map((product) => (
        <Grid
          role="listitem"
          aria-label={product.title}
          key={product.id}
          item
          xs={6}
          md={4}
        >
          <ProductView {...product} />
        </Grid>
      ))}
    </Grid>
  )
}
