import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material"
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "common.white",
        py: 6,
        borderTop: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Hilly Agro
            </Typography>
            <Typography variant="body2">
              Bringing the organic goodness of Uttarakhand to the world. Pure,
              natural, and sustainably sourced.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box component="nav">
              {["Home", "Products", "About Us", "Contact Us"].map((item) => (
                <Link
                  key={item}
                  component={RouterLink}
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "")}`
                  }
                  sx={{
                    display: "block",
                    color: "inherit",
                    textDecoration: "none",
                    mb: 1,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact
            </Typography>
            <Typography variant="body2" paragraph>
              123 Mountain View Road
              <br />
              Dehradun, Uttarakhand
              <br />
              India
            </Typography>
            <Typography variant="body2">
              Email: info@hillyagro.com
              <br />
              Tel: +91 135 2345 6789
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: "common.white",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4, opacity: 0.7 }}>
          © {new Date().getFullYear()} Hilly Agro. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
