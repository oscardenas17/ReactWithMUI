import { Mail, Notifications, TempleBuddhist } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));   
    
const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));

const navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Logo
        </Typography>
        <TempleBuddhist sx={{ display: { xs: "block", sm: "none" } }} />

        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail></Mail>
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications></Notifications>
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://avatars.githubusercontent.com/u/53705171?v=4"
          ></Avatar>
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://avatars.githubusercontent.com/u/53705171?v=4"
          ></Avatar>
          <Typography variant="span"> User</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default navbar;
