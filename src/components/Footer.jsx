import React from "react"
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material"
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"

const Footer = () => {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: <Facebook />, url: "#", name: "Facebook" },
    { icon: <Twitter />, url: "#", name: "Twitter" },
    { icon: <Instagram />, url: "#", name: "Instagram" },
    { icon: <LinkedIn />, url: "#", name: "LinkedIn" },
  ]

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        py: { xs: 6, md: 8 },
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Agro Export India
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t("footerAboutText")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t("quickLinks")}
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
              {["home", "products", "aboutUs", "contactUs"].map((item) => (
                <Box component="li" key={item} sx={{ pb: 1 }}>
                  <Link
                    component={RouterLink}
                    to={item === "home" ? "/" : `/${item.toLowerCase()}`}
                    color="text.secondary"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {t(item)}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t("contact")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Export Street
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mumbai, India
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@agroexport.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tel: +91 123 456 7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t("followUs")}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 6, mb: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Agro Export India.{" "}
          {t("allRightsReserved")}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
