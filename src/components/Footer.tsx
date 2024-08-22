import { Container, Stack, Typography } from "@mui/material"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { HTMLAttributes } from "react"

export const Footer = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <footer {...props}>
      <Container>
        <Stack spacing={2}>
          <Typography variant="h6" component={"h2"}>
            Unit4 Quality festival - Accessibility in the development cycle
          </Typography>
          <div style={{ marginLeft: "1rem" }}>
            <Stack spacing={2}>
              <Stack flexDirection={"row"} justifyContent={"flex-start"}>
                <a
                  aria-label="Jesús's linkedin, opens in a new page"
                  href="https://www.linkedin.com/in/jesusgonzalezalvarez/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
                <Typography>Developed by Jesús González. </Typography>
              </Stack>
              <Stack flexDirection={"row"} justifyContent={"flex-start"}>
                <a
                  aria-label="Michell's linkedin, opens in a new page"
                  href="https://www.linkedin.com/in/carlos-michell-sena/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
                <Typography>Tested by Michell Sena. </Typography>
              </Stack>
              <Stack flexDirection={"row"} justifyContent={"flex-start"}>
                <a
                  aria-label="Daniela's linkedin, opens in a new page"
                  href="https://www.linkedin.com/in/daniela-rubio-trujillo-17823974/?originalSubdomain=es"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
                <Typography>Tested by Daniela Rubio. </Typography>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </Container>
    </footer>
  )
}
