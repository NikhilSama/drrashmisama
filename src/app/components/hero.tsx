import { Container, Box, Typography, Button, Link } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/drrashmisama.jpg"
          alt="Dr Rashmi Sama"
          width={300}
          height={300}
          layout="responsive"
        />
      </Box>
      <Box sx={{ flex: 1, paddingLeft: 2, marginTop: "50px" }}>
        <Typography variant="h2" component="h1">
          Dr Rashmi Sama
        </Typography>
        <Typography variant="h4" component="h2" sx={{ marginTop: "20px" }}>
          US Board Certified Pulmonologist, General Physician & Medical
          Concierge
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://sgrh.com/doctor-details/chest-medicine/rashmi-sama"
          sx={{ marginTop: "20px", marginRight: "20px" }}
          size="large"
        >
          Schedule a Consultation
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="/concierge"
          sx={{ marginTop: "20px", marginRight: "20px" }}
          size="large"
        >
          Concierge
        </Button>
      </Box>
    </Box>
  );
}
