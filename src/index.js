import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {theme} from "./theme"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* con const BlueButton = styled(Button)(({theme}), no se ncesaita el provider  */}
    {/* <ThemeProvider theme={theme}> */}
      <App />
    {/* </ThemeProvider> */}
    
  </React.StrictMode>
);

