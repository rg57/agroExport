"use client"

import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useLanguage } from "../contexts/LanguageContext"

const Header = () => {
  const { language, setLanguage, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Products", path: "/products" },
    { text: "About Us", path: "/about" },
    { text: "Contact Us", path: "/contact" },
  ]

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "primary.main",
        boxShadow: 3,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/placeholder.svg?height=50&width=50"
              alt="Hilly Agro Logo"
              style={{ marginRight: "10px", height: "50px" }}
            />
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 700,
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Hilly Agro
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                sx={{
                  color: "inherit",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.5)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.7)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,1)",
                  },
                }}
                size="small"
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="hi">हिंदी</MenuItem>
              </Select>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            bgcolor: "background.paper",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Menu
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                component={RouterLink}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 2 }}>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              fullWidth
              size="small"
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="hi">हिंदी</MenuItem>
            </Select>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Header
