import React from "react"
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { Search as SearchIcon } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

const MotionCard = motion(Card)

const products = [
  {
    id: 1,
    name: "Turmeric",
    image: "/images/turmeric.jpg",
    description: "Premium quality turmeric powder with high curcumin content.",
    price: "$2.5/kg",
    moq: "1000 kg",
  },
  {
    id: 2,
    name: "Red Chilli",
    image: "/images/red-chilli.jpg",
    description: "High-grade red chilli with intense color and heat.",
    price: "$3.0/kg",
    moq: "500 kg",
  },
  {
    id: 3,
    name: "Garlic",
    image: "/images/garlic.jpg",
    description: "Fresh and aromatic garlic bulbs.",
    price: "$1.8/kg",
    moq: "1000 kg",
  },
]

const ProductsPage = () => {
  const { t } = useLanguage()

  return (
    <Box sx={{ minHeight: "90vh", py: { xs: 4, sm: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {t("ourProducts")}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            placeholder={t("searchProducts")}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ maxWidth: { sm: "400px" } }}
          />
        </Box>

        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {t(product.name)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {t(product.description)}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" color="primary">
                      {t("price")}: {product.price}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      MOQ: {product.moq}
                    </Typography>
                  </Box>
                  <Button
                    component={RouterLink}
                    to={`/product/${product.id}`}
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    {t("viewDetails")}
                  </Button>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ProductsPage
