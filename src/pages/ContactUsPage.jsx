import React from "react"
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
} from "@mui/material"
import { useLanguage } from "../contexts/LanguageContext"

const ContactUsPage = () => {
  const { t } = useLanguage()

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t("contactUs")}
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t("name")} variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t("email")} variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t("message")}
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                {t("send")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default ContactUsPage
