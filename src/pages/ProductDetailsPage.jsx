import React from "react"
import { useParams } from "react-router-dom"
import { Container, Typography, Grid, Paper, Button } from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailIcon from "@mui/icons-material/Email"
import { useLanguage } from "../contexts/LanguageContext"

const products = [
  {
    id: 1,
    name: "Turmeric",
    description: "High-quality turmeric powder with rich color and aroma.",
    price: "$2.5 per kg",
    moq: "1000 kg",
    origin: "India",
    certificates: ["ISO 9001", "HACCP"],
  },
  // Add more products here
]

const ProductDetailsPage = () => {
  const { id } = useParams()
  const { t } = useLanguage()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return <Typography>Product not found</Typography>
  }

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={`/images/${product.name.toLowerCase()}.jpg`}
            alt={product.name}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              {t(product.name)}
            </Typography>
            <Typography variant="body1" paragraph>
              {t(product.description)}
            </Typography>
            <Typography variant="h6">
              {t("price")}: {product.price}
            </Typography>
            <Typography variant="h6">
              {t("moq")}: {product.moq}
            </Typography>
            <Typography variant="h6">
              {t("originCountry")}: {product.origin}
            </Typography>
            <Typography variant="h6">{t("certificates")}:</Typography>
            <ul>
              {product.certificates.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
            <Button
              variant="contained"
              color="primary"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/your_phone_number"
              target="_blank"
              sx={{ mt: 2, mr: 2 }}
            >
              {t("contactViaWhatsApp")}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<EmailIcon />}
              href="mailto:your_email@example.com"
              sx={{ mt: 2 }}
            >
              {t("contactViaEmail")}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductDetailsPage
