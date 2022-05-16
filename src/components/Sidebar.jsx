import { Box } from "@mui/material"


const Sidebar = () => {
  return (
    <Box 
      bgcolor="skyblue" 
      flex={1} 
      p={2}
      //Breakpoints
      sx={ {display: {xs:"none", sm: "block"} }}
    >
      Sidebar
    </Box>
  )
}

export default Sidebar