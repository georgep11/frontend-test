import { ThemeProvider, StyledEngineProvider } from "@mui/material"
import { theme } from "../src/styles"

export const decorators = [
  (Story) => {
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </StyledEngineProvider>
    )
  }
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
