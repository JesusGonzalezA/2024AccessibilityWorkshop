import { Product } from "../domain/Product"

export type CartProduct = Product & { amount: number }
