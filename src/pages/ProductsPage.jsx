"use client"

import { useState } from "react"
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
  Chip,
} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { Search as SearchIcon } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

const MotionCard = motion(Card)

const products = [
  {
    id: 1,
    name: "Red Chilli Whole",
    image: "/placeholder.svg?height=300&width=400&text=Red+Chilli+Whole",
    description:
      "Premium quality Indian red chilies, known for their vibrant color and perfect heat level. Ideal for various cuisines.",
    price: { usd: 2.8, inr: 230 },
    moq: "1000 kg",
    origin: "Uttarakhand, India",
    certificates: ["ISO 9001:2015", "HACCP", "FSSAI"],
  },
  {
    id: 2,
    name: "Red Chilli Powder",
    image: "/placeholder.svg?height=300&width=400&text=Red+Chilli+Powder",
    description:
      "Finely ground red chilli powder with consistent color and heat. Perfect for commercial and retail use.",
    price: { usd: 3.2, inr: 260 },
    moq: "500 kg",
    origin: "Uttarakhand, India",
    certificates: ["ISO 9001:2015", "HACCP", "FSSAI"],
  },
  {
    id: 3,
    name: "Turmeric Powder",
    image: "/placeholder.svg?height=300&width=400&text=Turmeric+Powder",
    description:
      "High-curcumin turmeric powder with rich golden color and authentic aroma. Premium quality for global market.",
    price: { usd: 2.5, inr: 205 },
    moq: "500 kg",
    origin: "Uttarakhand, India",
    certificates: ["ISO 9001:2015", "HACCP", "FSSAI"],
  },
  {
    id: 4,
    name: "Fresh Onion",
    image: "/placeholder.svg?height=300&width=400&text=Fresh+Onion",
    description:
      "Export quality fresh onions with long shelf life. Available in different sizes and packaging options.",
    price: { usd: 0.8, inr: 65 },
    moq: "5000 kg",
    origin: "Uttarakhand, India",
    certificates: ["Global GAP", "FSSAI"],
  },
  {
    id: 5,
    name: "Fresh Garlic",
    image: "/placeholder.svg?height=300&width=400&text=Fresh+Garlic",
    description:
      "Premium quality fresh garlic bulbs with strong aroma and flavor. Carefully selected for export market.",
    price: { usd: 1.8, inr: 150 },
    moq: "1000 kg",
    origin: "Uttarakhand, India",
    certificates: ["Global GAP", "FSSAI"],
  },
  {
    id: 6,
    name: "Green Cardamom",
    image: "/placeholder.svg?height=300&width=400&text=Green+Cardamom",
    description:
      "Premium grade green cardamom with intense aroma and flavor. Perfect for culinary and medicinal use.",
    price: { usd: 45, inr: 3700 },
    moq: "100 kg",
    origin: "Uttarakhand, India",
    certificates: ["ISO 9001:2015", "HACCP", "FSSAI"],
  },
]

const ProductsPage = () => {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Box
      sx={{
        minHeight: "90vh",
        py: { xs: 4, sm: 6, md: 8 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            textAlign: { xs: "center", sm: "left" },
            mb: 4,
          }}
        >
          Our Products
        </Typography>

        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
          {filteredProducts.map((product, index) => (
            <Grid item key={product.id} xs={12} sm={6} lg={4}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: 600 }}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    >
                      Price: ${product.price.usd.toFixed(2)} USD / ₹
                      {product.price.inr.toFixed(2)} INR per kg
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      MOQ: {product.moq}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 2, mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      Certificates:
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {product.certificates.map((cert, idx) => (
                        <Chip
                          key={idx}
                          label={cert}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Box>

                  <Button
                    component={RouterLink}
                    to={`/product/${product.id}`}
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      mt: "auto",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    View Details
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
