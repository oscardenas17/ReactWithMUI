import {  CalendarMonth, Group, Home, ModeNight, Person, Settings, Storefront } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"


const Sidebar = () => {
  return (
    <Box 
     // bgcolor="skyblue" 
      flex={1} 
      p={2}
      //Breakpoints
      sx={ {display: {xs:"none", sm: "block"} }}
    >
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Grupos" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#Tienda">
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Tienda" />
            </ListItemButton>
          </ListItem>

          
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Usuarios" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <CalendarMonth/>
              </ListItemIcon>
              <ListItemText primary="Calendario" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Configuracion" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
             <Switch></Switch>
            </ListItemButton>
          </ListItem>

      </List>   
    </Box>
  )
}

export default Sidebar