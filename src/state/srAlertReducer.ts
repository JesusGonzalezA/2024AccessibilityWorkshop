import { createSlice } from "@reduxjs/toolkit"

const srAlertSlice = createSlice({
  name: "srAlert",
  initialState: {
    polite: [] as string[],
    alerts: [] as string[],
  },
  reducers: {
    queueMessage: (state, action) => {
      if (action.payload.queue === "polite") {
        state.polite = [...state.polite, action.payload.message]
      } else if (action.payload.queue === "alerts") {
        state.alerts = [...state.alerts, action.payload.message]
      }
    },
    unqueueMessage: (state, action) => {
      if (action.payload.queue === "polite") {
        state.polite = state.polite.slice(1, -1)
      } else if (action.payload.queue === "alerts") {
        state.alerts = state.alerts.slice(1, -1)
      }
    },
  },
  selectors: {
    lastPoliteMessage: (state) => state.polite.at(-1),
    lastAlertMessage: (state) => state.alerts.at(-1),
  },
})

export const { lastPoliteMessage, lastAlertMessage } = srAlertSlice.selectors
export const { queueMessage, unqueueMessage } = srAlertSlice.actions
export default srAlertSlice.reducer
