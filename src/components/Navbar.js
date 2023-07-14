import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import { useSelector } from "react-redux";
import { Search } from "@mui/icons-material";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const { carts } = useSelector((state) => state.cart);
  console.log("cart data", carts);

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar sx={{ height: 60 }}>
          <Button
            sx={{ color: "black" }}
            onClick={() => {
              navigate("/menscloth");
            }}
          >
            MEN
          </Button>
          <Button
            sx={{ color: "black" }}
            onClick={() => {
              navigate("/productlisting");
            }}
          >
            WOMEN
          </Button>
          {/* <Button sx={{ color: "black" }}>KIDS</Button>

          <Button sx={{ color: "black" }}>SALE</Button> */}

          <Link to="/">
            <div>
              <img
                style={{
                  width: 140,
                  height: 55,
                  marginLeft: 270,
                  marginTop: 2,
                }}
                src="logo.png"
                alt="logo"
              ></img>
            </div>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 0.8 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/************ AddShoppingCartIcon *****************/}
            <Link to="/addcart">
              <Badge badgeContent={carts.length} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
