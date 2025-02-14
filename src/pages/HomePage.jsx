import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import heroBanner from "../assets/agro_export_banner.jpg"

const MotionBox = motion(Box)

const HomePage = () => {
  const { t } = useLanguage()

  return (
    <Box sx={{ width: "100%" }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "rgba(255,255,255,0.8)",
          py: { xs: 6, md: 12 },
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid
            container
            spacing={{ xs: 4, md: 8 }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={8} textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                    fontWeight: 700,
                    mb: 3,
                    color: "common.white",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Organic Goodness from the Himalayas
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: "common.white",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  Experience the purity of Uttarakhand's finest organic produce
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
                    boxShadow: 3,
                  }}
                >
                  Explore Our Products
                </Button>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: { xs: 4, md: 6 },
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            Our Organic Treasures
          </Typography>
          <Grid container spacing={4}>
            {["Red Chilli", "Turmeric", "Cardamom"].map((item, index) => (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 4,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={`/placeholder.svg?height=200&width=300&text=${item}`}
                      alt={item}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{ fontWeight: 600 }}
                      >
                        Organic {item}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Sourced from the pristine hills of Uttarakhand, our
                        organic {item.toLowerCase()} is known for its
                        exceptional quality and flavor.
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2 }}>
                      <Button
                        component={RouterLink}
                        to={`/products`}
                        variant="outlined"
                        color="primary"
                        fullWidth
                      >
                        Learn More
                      </Button>
                    </Box>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Uttarakhand Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h3" gutterBottom color="primary.main">
                  The Uttarakhand Advantage
                </Typography>
                <Typography variant="body1" paragraph>
                  Nestled in the lap of the Himalayas, Uttarakhand is blessed
                  with diverse agro-climatic zones, pristine environment, and
                  rich biodiversity. This unique geography allows us to
                  cultivate some of the finest organic produce in the world. Our
                  farmers use traditional, sustainable farming methods that have
                  been passed down through generations. This, combined with the
                  region's natural advantages, results in products of
                  exceptional quality and purity. From aromatic spices to
                  nutrient-rich grains, every Hilly Agro product embodies the
                  essence of Uttarakhand - pure, natural, and full of goodness.
                </Typography>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  component="img"
                  src="/placeholder.svg?height=400&width=600&text=Uttarakhand+Landscape"
                  alt="Uttarakhand Landscape"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default HomePage
