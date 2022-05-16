import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Container, Stack } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    //<Container sx={ {backgroundColor: "red"} }>
   <Box> 
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="center">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box> 
    // </Container>
  );
}

export default App;
