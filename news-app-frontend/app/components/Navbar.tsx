"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Container,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Kategoriler
const categories = [
  "General",
  "Science",
  "Sports",
  "Politics",
  "Technology",
  "Health",
  "Business",
  "Entertainment",
];

// Props tipi
interface NavBarProps {
  category: string; // category bir string olmalı
  setCategory: (category: string) => void; // setCategory bir string almalı ve void döndürmeli
}

const NavBar: React.FC<NavBarProps> = ({ category, setCategory }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            News App
          </Typography>
          <div className="hidden md:flex">
            {categories.map((cat) => (
              <Button
                key={cat}
                color="inherit"
                variant={category === cat ? "contained" : "outlined"}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            className="md:hidden"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        {categories.map((cat) => (
          <MenuItem
            key={cat}
            onClick={() => {
              setCategory(cat);
              handleMenuClose();
            }}
          >
            {cat}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default NavBar;
