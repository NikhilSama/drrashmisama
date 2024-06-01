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
          width={350}
          height={350}
          layout="responsive"
        />
      </Box>
      <Box sx={{ flex: 1, paddingLeft: 2, marginTop: "50px" }}>
        <Typography variant="h2" component="h1">
          Dr Rashmi Sama
        </Typography>
        <Typography variant="h4" component="h2" sx={{ marginTop: "20px" }}>
          US Board Certified Physician & Medical Concierge
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "20px" }}>
          Dr. Rashmi Sama serves as a Medical Concierge for a select few
          patients and their families on a monthly retainer basis. This service
          provides oversight and coordination of treatment across multiple
          medical specialists.
        </Typography>
      </Box>
    </Box>
  );
}
