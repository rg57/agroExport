import { useParams } from "react-router-dom"
import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Chip,
  Divider,
} from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailIcon from "@mui/icons-material/Email"
import VerifiedIcon from "@mui/icons-material/Verified"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import { useLanguage } from "../contexts/LanguageContext"

const products = [
  {
    id: 1,
    name: "Red Chilli Whole",
    image: "/placeholder.svg?height=600&width=800&text=Red+Chilli+Whole",
    description: `Premium quality Indian red chilies, known for their vibrant color and perfect heat level. Our red chilies are carefully selected and processed to maintain their natural properties.

    Key Features:
    • Naturally grown and harvested
    • Consistent color and quality
    • Optimal heat level
    • Long shelf life
    • Clean and sorted manually
    
    Applications:
    • Ideal for restaurants and food processing
    • Perfect for spice blends and curry powders
    • Suitable for retail packaging
    • Used in various international cuisines`,
    price: { usd: 2.8, inr: 230 },
    moq: "1000 kg",
    origin: "Uttarakhand, India",
    certificates: ["ISO 9001:2015", "HACCP", "FSSAI"],
    specifications: {
      color: "Deep Red",
      length: "10-15cm",
      moisture: "≤ 10%",
      pungency: "30,000-35,000 SHU",
    },
    packaging: ["25kg PP Bags", "50kg PP Bags", "Custom Packaging Available"],
    shelfLife: "24 months when stored properly",
    storage: "Store in a cool, dry place away from direct sunlight",
  },
  {
    id: 2,
    name: "Red Chilli Powder",
    image: "/placeholder.svg?height=600&width=800&text=Red+Chilli+Powder",
    description: `Finely ground red chilli powder with consistent color and heat. Perfect for commercial and retail use.

    Key Features:
    • Uniform particle size
    • Vibrant red color
    • Consistent heat level
    • No artificial additives
    
    Applications:
    • Ideal for spice blends and seasonings
    • Perfect for curry powders and sauces
    • Suitable for meat rubs and marinades
    • Used in various international cuisines`,
    price: { usd: 3.2, inr: 260 },
    moq: "500 kg",
    origin: "Uttarakhand, India",
    certificates: ["ISO 9001:2015", "HACCP", "FSSAI"],
    specifications: {
      mesh: "60-80",
      moisture: "≤ 8%",
      pungency: "30,000-35,000 SHU",
      color: "Bright Red",
    },
    packaging: [
      "25kg PP Bags",
      "10kg Vacuum Packs",
      "Custom Packaging Available",
    ],
    shelfLife: "18 months when stored properly",
    storage: "Store in a cool, dry place away from direct sunlight",
  },
  {
    id: 3,
    name: "Turmeric Powder",
    image: "/placeholder.svg?height=600&width=800&text=Turmeric+Powder",
    description: `High-curcumin turmeric powder with rich golden color and authentic aroma. Premium quality for global market.

    Key Features:
    • High curcumin content
    • Vibrant golden color
    • Aromatic and flavorful
    • No artificial additives
    
    Applications:
    • Ideal for curry powders and spice blends
    • Perfect for golden milk and turmeric lattes
    • Suitable for natural food coloring
    • Used in Ayurvedic and herbal preparations`,
    price: { usd: 2.5, inr: 205 },
    moq: "500 kg",
    origin: "Uttarakhand, India",
    certificates: ["ISO 9001:2015", "HACCP", "FSSAI"],
    specifications: {
      curcumin: "≥ 3%",
      moisture: "≤ 8%",
      mesh: "60-80",
      color: "Deep Yellow",
    },
    packaging: [
      "25kg PP Bags",
      "10kg Vacuum Packs",
      "Custom Packaging Available",
    ],
    shelfLife: "24 months when stored properly",
    storage: "Store in a cool, dry place away from direct sunlight",
  },
  {
    id: 4,
    name: "Fresh Onion",
    image: "/placeholder.svg?height=600&width=800&text=Fresh+Onion",
    description: `Export quality fresh onions with long shelf life. Available in different sizes and packaging options.

    Key Features:
    • Firm and well-formed bulbs
    • Crisp texture and pungent flavor
    • Carefully sorted and graded
    • Minimal sprouting and root growth
    
    Applications:
    • Essential ingredient in various cuisines
    • Ideal for restaurants and food service industry
    • Perfect for retail packaging
    • Suitable for processing (dried, fried, etc.)`,
    price: { usd: 0.8, inr: 65 },
    moq: "5000 kg",
    origin: "Uttarakhand, India",
    certificates: ["Global GAP", "FSSAI"],
    specifications: {
      size: "45-65mm",
      type: "Red/Pink",
      moisture: "≤ 86%",
      shelf: "4-5 months",
    },
    packaging: [
      "25kg Mesh Bags",
      "50kg Jumbo Bags",
      "Custom Packaging Available",
    ],
    shelfLife: "4-5 months when stored properly",
    storage: "Store in a cool, dry, and well-ventilated place",
  },
  {
    id: 5,
    name: "Fresh Garlic",
    image: "/placeholder.svg?height=600&width=800&text=Fresh+Garlic",
    description: `Premium quality fresh garlic bulbs with strong aroma and flavor. Carefully selected for export market.

    Key Features:
    • Firm and compact bulbs
    • Strong aroma and flavor
    • Carefully sorted and graded
    • Long shelf life
    
    Applications:
    • Essential ingredient in various cuisines
    • Ideal for restaurants and food service industry
    • Perfect for retail packaging
    • Suitable for processing (dried, powdered, etc.)`,
    price: { usd: 1.8, inr: 150 },
    moq: "1000 kg",
    origin: "Uttarakhand, India",
    certificates: ["Global GAP", "FSSAI"],
    specifications: {
      size: "40-60mm",
      cloves: "8-12 per bulb",
      moisture: "≤ 65%",
      shelf: "6-8 months",
    },
    packaging: ["10kg Mesh Bags", "20kg Cartons", "Custom Packaging Available"],
    shelfLife: "6-8 months when stored properly",
    storage: "Store in a cool, dry, and well-ventilated place",
  },
  {
    id: 6,
    name: "Green Cardamom",
    image: "/placeholder.svg?height=600&width=800&text=Green+Cardamom",
    description: `Premium grade green cardamom with intense aroma and flavor. Perfect for culinary and medicinal use.

    Key Features:
    • Vibrant green color
    • Strong, sweet aroma
    • Carefully sorted and graded
    • High essential oil content
    
    Applications:
    • Used in sweet and savory dishes
    • Perfect for tea and coffee flavoring
    • Ideal for baking and desserts
    • Used in Ayurvedic and herbal preparations`,
    price: { usd: 45, inr: 3700 },
    moq: "100 kg",
    origin: "Uttarakhand, India",
    certificates: ["ISO 9001:2015", "HACCP", "FSSAI"],
    specifications: {
      size: "7-8mm",
      oil: "≥ 4%",
      moisture: "≤ 11%",
      color: "Green",
    },
    packaging: [
      "10kg Vacuum Packs",
      "25kg Cartons",
      "Custom Packaging Available",
    ],
    shelfLife: "24 months when stored properly",
    storage: "Store in a cool, dry place away from direct sunlight",
  },
]

const ProductDetailsPage = () => {
  const { id } = useParams()
  const { t } = useLanguage()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center">
          Product not found
        </Typography>
      </Container>
    )
  }

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "background.default" }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ overflow: "hidden", borderRadius: 2 }}>
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h3" component="h1" gutterBottom>
                {product.name}
              </Typography>

              <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                {product.certificates.map((cert, idx) => (
                  <Chip
                    key={idx}
                    label={cert}
                    color="primary"
                    icon={<VerifiedIcon />}
                  />
                ))}
              </Box>

              <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
                ${product.price.usd.toFixed(2)} USD / ₹
                {product.price.inr.toFixed(2)} INR per kg
              </Typography>

              <Typography variant="h6" sx={{ mb: 1 }}>
                Minimum Order Quantity: {product.moq}
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Product Specifications:
              </Typography>
              <TableContainer
                component={Paper}
                variant="outlined"
                sx={{ mb: 3 }}
              >
                <Table>
                  <TableBody>
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <TableRow key={key}>
                          <TableCell component="th" sx={{ fontWeight: 600 }}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </TableCell>
                          <TableCell>{value}</TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography variant="h6" gutterBottom>
                Packaging Options:
              </Typography>
              <Box sx={{ mb: 3 }}>
                {product.packaging.map((pack, idx) => (
                  <Typography
                    key={idx}
                    variant="body1"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <LocalShippingIcon color="primary" fontSize="small" />
                    {pack}
                  </Typography>
                ))}
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Storage Instructions:
                </Typography>
                <Typography variant="body1">{product.storage}</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Shelf Life: {product.shelfLife}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  href="https://wa.me/your_phone_number"
                  target="_blank"
                  sx={{ flex: 1 }}
                >
                  Contact via WhatsApp
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<EmailIcon />}
                  href="mailto:your_email@example.com"
                  sx={{ flex: 1 }}
                >
                  Contact via Email
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Product Description
            </Typography>
            <Paper sx={{ p: 3 }}>
              {product.description.split("\n").map((paragraph, idx) => (
                <Typography key={idx} paragraph>
                  {paragraph}
                </Typography>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ProductDetailsPage
