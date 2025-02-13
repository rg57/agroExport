import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import { LanguageProvider } from "./contexts/LanguageContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import AboutUsPage from "./pages/AboutUsPage"
import ContactUsPage from "./pages/ContactUsPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32", // A deep green representing the lush forests of Uttarakhand
    },
    secondary: {
      main: "#795548", // A earthy brown color
    },
    background: {
      default: "#f1f8e9", // A light green tint for the background
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
})

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              width: "100%",
              backgroundImage: 'url("/placeholder.svg?height=200&width=200")', // Replace with a subtle pattern or texture
              backgroundRepeat: "repeat",
            }}
          >
            <Header />
            <Box component="main" sx={{ flexGrow: 1, width: "100%" }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
