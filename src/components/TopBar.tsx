import {
  AppBar,
  Avatar,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material"
import { ShoppingCartButton } from "./ShoppingCartButton"

export const TopBar = () => {
  return (
    <AppBar position="static">
      <Stack maxWidth="xl" justifyContent={"space-between"}>
        <Toolbar>
          <Typography component={"h1"}>A11Y Marketplace</Typography>

          <Stack direction={"row"} marginLeft={"auto"}>
            <ShoppingCartButton />

            <Tooltip title="Settings">
              <IconButton sx={{ margin: "0.5rem" }}>
                <Avatar alt="User" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </Stack>
    </AppBar>
  )
}
