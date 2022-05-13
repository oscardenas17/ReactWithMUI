import { AppBar, styled, Toolbar } from "@mui/material"

const StyledToolbar = styled()({
  display: "flex",
  justifyContent: "space-between"
})

const navbar = () => {
  return (
    <AppBar position="sticky">
    <StyledToolbar>navbar</StyledToolbar>
    </AppBar>
  )
}

export default navbar