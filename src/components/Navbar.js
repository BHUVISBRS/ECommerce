import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import { useSelector } from "react-redux";
import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LoginButton from "./materialui/LoginButton";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
            <div
              style={{
                marginLeft: 400,
              }}
            >
              <img
                style={{
                  width: 140,
                  height: 55,
                  marginTop: 2,
                }}
                src="logo.png"
                alt="logo"
              ></img>
            </div>
          </Link>
          {/*    <Container sx={{ width: 100, height: 0.9 }}>
            <TextField
              id="search"
              type="search"
              label="Search"
              value={searchTerm}
              onChange={handleChange}
              sx={{ width: 350 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            </Container> */}
          {/*  <LoginButton></LoginButton> */}

          <Box sx={{ marginLeft: 50 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex", marginRight: 80, width: 20 },
            }}
          >
            {/************ AddShoppingCartIcon *****************/}
            <Link to="/addcart">
              <Badge
                badgeContent={carts.length}
                color="error"
                sx={{ height: 20 }}
              >
                <AddShoppingCartIcon />
              </Badge>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
