import { configureStore } from "@reduxjs/toolkit"
import marketplaceReducer from "./marketplaceReducer"
import srAlertReducer from "./srAlertReducer"

export const store = configureStore({
  reducer: {
    marketplace: marketplaceReducer,
    srAlert: srAlertReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
