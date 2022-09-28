import { createTheme } from "@mui/material"

export const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          "&.MuiCard-root": {
            "border-width": 1,
            "border-color": "#EFEFEF",
            "border-radius": 10,
            "background-color": "#FFFFFF",
            color: "#1B1B1B"
          },
          "&.MuiPaper-elevation": {
            "box-shadow": "0px 0px 0px 2px #65E9D9"
          },
          "&.MuiPaper-outlined": {
            "border-color": "#EFEFEF"
          },
          "&:hover": {
            "box-shadow": "0px 0px 0px 2px #65E9D9"
          },
          "&.active": {
            "border-color": "#3D8479",
            "box-shadow": "0px 0px 0px 2px #65E9D9"
          }
        }
      }
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          "&.MuiCardActionArea-root:hover": {
            "background-color": "#fff",
            ".MuiCardActionArea-focusHighlight": {
              opacity: 0
            }
          }
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&.MuiCardContent-root": {
            padding: 8
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.MuiCheckbox-root": { padding: 10.25 },
          "&.Mui-checked": { color: "#21B6A8" }
        }
      }
    }
  }
})
