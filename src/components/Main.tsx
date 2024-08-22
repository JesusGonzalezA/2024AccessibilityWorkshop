import { Container } from "@mui/material"
import { PropsWithChildren } from "react"

export const Main = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  )
}
