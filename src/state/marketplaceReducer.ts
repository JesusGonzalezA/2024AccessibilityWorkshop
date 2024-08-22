import { createSlice } from "@reduxjs/toolkit"
import { products } from "../data/products"
import { CartProduct } from "../domain/CartProduct"

export const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState: {
    products: products,
    shoppingCart: [] as CartProduct[],
  },
  reducers: {
    addToCart: (state, action) => {
      const toAddProduct = action.payload as CartProduct
      const alreadyInCart = state.shoppingCart.find(
        (product) => product.id === toAddProduct.id,
      )

      state.shoppingCart = alreadyInCart
        ? state.shoppingCart.map((product) => {
            if (product.id === toAddProduct.id)
              return {
                ...product,
                amount: product.amount + toAddProduct.amount,
              }
            else return product
          })
        : [...state.shoppingCart, toAddProduct]
    },
    editAmount: (state, action) => {
      state.shoppingCart = state.shoppingCart.map((p) => {
        if (p.id === action.payload.id) {
          return {
            ...p,
            amount: action.payload.amount,
          }
        } else return p
      })
    },
    removeFromCart: (state, action) => {
      state.shoppingCart = state.shoppingCart.filter(
        (p) => p.id !== action.payload.id,
      )
    },
  },
  selectors: {
    allProducts: (state) => state.products,
    shoppingCartSize: (state) => state.shoppingCart.length,
    shoppingCartProucts: (state) => state.shoppingCart,
  },
})

export const { addToCart, editAmount, removeFromCart } =
  marketplaceSlice.actions
export const { allProducts, shoppingCartSize, shoppingCartProucts } =
  marketplaceSlice.selectors
export default marketplaceSlice.reducer
