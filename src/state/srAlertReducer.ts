import { createSlice } from "@reduxjs/toolkit"

const srAlertSlice = createSlice({
  name: "srAlert",
  initialState: {
    polite: [] as string[],
    alert: [] as string[],
  },
  reducers: {
    addMessage: (state, action) => {
      if (action.payload.queue === "polite") {
        state.polite = [...state.polite, action.payload.message]
      } else if (action.payload.queue === "alerts") {
        state.alert = [...state.alert, action.payload.message]
      }
    },
    removeMessage: (state, action) => {
      if (action.payload.queue === "polite") {
        state.polite = state.polite.filter((m) => m !== action.payload.message)
      } else if (action.payload.queue === "alerts") {
        state.alert = state.alert.filter((m) => m !== action.payload.message)
      }
    },
  },
  selectors: {
    allAlertMessages: (state) => state.alert,
    allPoliteMessages: (state) => state.polite,
  },
})

export const { allAlertMessages, allPoliteMessages } = srAlertSlice.selectors
export const { addMessage, removeMessage } = srAlertSlice.actions
export default srAlertSlice.reducer
