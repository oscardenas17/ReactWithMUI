import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

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
