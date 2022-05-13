import { Button, styled } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


//boton personalizado
// const BlueButton = styled(Button)(({theme})=>({
  const BlueButton = styled(Button)(()=>({
  backgroundColor: "skyblue",
  // backgroundColor: theme.palette.otherColor.main,  llamado al theme
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
