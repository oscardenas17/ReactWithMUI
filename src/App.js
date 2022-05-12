import { Button, styled } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


//boton personalizado
const BlueButton = styled(Button)(({theme})=>({
  backgroundColor: theme.palette.otherColor.main,
  color: "#888",
  margin:5,
  "&:hover":{
    backgroundColor: "ligthblue",
  },
  "&:disabled":{
    backgroundColor: "gray",
    color: "white",
  },
}))


function App() {
  return (
    <div>
     <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
    </div>
  );
}

export default App;
