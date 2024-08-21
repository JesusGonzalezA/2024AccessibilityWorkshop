import { Provider } from "react-redux"
import { store } from "./state/store"
import { TopBar } from "./components/TopBar"
import { Main } from "./components/Main"
import { ProductList } from "./components/ProductList"
import { Footer } from "./components/Footer"
import { products } from "./data/products"
import { Divider, Typography } from "@mui/material"

const App = () => {
  return (
    <Provider store={store}>
      <TopBar />
      <Main>
        <Typography variant="h5" component={"h2"} margin={"2rem 0rem"}>
          Discover the essentials for your home
        </Typography>
        <ProductList />
      </Main>
      <Divider sx={{ margin: "2rem 0rem" }} />
      <Footer style={{ marginBottom: "2rem" }} />
    </Provider>
  )
}

export default App
