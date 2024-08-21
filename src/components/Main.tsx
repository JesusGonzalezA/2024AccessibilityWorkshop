import { Container } from "@mui/material"
import { PropsWithChildren } from "react"

export const Main = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>
}
