import React from "react"
import { Container, Typography, Box, Button, Grid } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const HomePage = () => {
  const { t } = useLanguage()

  return (
    <Box sx={{ width: "100%" }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f8f9fa",
          py: { xs: 4, md: 8 },
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 4, md: 8 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                    fontWeight: 700,
                    mb: 3,
                    color: "text.primary",
                  }}
                >
                  Welcome to Agro Export India
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: "text.secondary",
                    lineHeight: 1.5,
                  }}
                >
                  Quality Agro Products for Global Market
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to="/products"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: "1.1rem",
                  }}
                >
                  Explore Our Products
                </Button>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={5}>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  component="img"
                  src="/placeholder.svg"
                  alt="Agro products"
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: 500,
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, width: "100%" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: { xs: 4, md: 6 },
              fontWeight: 600,
            }}
          >
            Featured Products
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  sx={{
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: 2,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/placeholder.svg"
                    alt={`Product ${item}`}
                    sx={{
                      width: "100%",
                      height: 240,
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      Product {item}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      Description for product {item}
                    </Typography>
                    <Button
                      component={RouterLink}
                      to={`/product/${item}`}
                      variant="outlined"
                      color="primary"
                      fullWidth
                    >
                      Learn More
                    </Button>
                  </Box>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default HomePage
