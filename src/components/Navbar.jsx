import { Box, Button, Container, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import { StyledAppbar, StyledButtons } from './muiComponents';
import styles from "./styles/Navbar.module.css"

const pages = [{ name: "Features", to: "/" }, { name: "Pricing", to: "/" }, { name: "Resources", to: "/" },];

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };




    return (
        <StyledAppbar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{

                            display: "flex",
                            flexGrow: 1,
                            fontFamily: "poppins",
                            fontWeight: 700,

                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Shortly
                    </Typography>
                    <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" }, justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex" }}>
                            {pages.map((obj, index) => (
                                <Link
                                    data-testid={`link-${index}`}
                                    key={index}
                                    to={obj.to}
                                    className={styles.link}
                                >
                                    {obj.name}
                                </Link>
                            ))}
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <StyledButtons variant='text' style={{ color: "black", marginRight: "5px" }} >Log in</StyledButtons>
                            <StyledButtons variant='contained' >Sign Up</StyledButtons>
                        </div>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElNav)}
                            onClick={handleCloseNavMenu}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "flex", md: "none" },
                                flexDirection: "column"
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", margin: "0px 4px", textAlign: "center" }}>
                                {pages.map((obj, index) => (

                                    <Link key={index} data-testid={`link-${index}a`} className={styles.link} to={obj.to}>{obj.name}</Link>

                                ))}
                                <Divider />

                                <StyledButtons data-testid="login" variant='text'>Login</StyledButtons>
                                <StyledButtons data-testid="signUp" variant='contained'>Sign Up</StyledButtons>
                            </div>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </StyledAppbar>
    );
}
