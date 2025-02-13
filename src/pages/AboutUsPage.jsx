import React from "react"
import { Container, Typography, Paper } from "@mui/material"
import { useLanguage } from "../contexts/LanguageContext"

const AboutUsPage = () => {
  const { t } = useLanguage()

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t("aboutUs")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("aboutUsContent")}
        </Typography>
      </Paper>
    </Container>
  )
}

export default AboutUsPage
