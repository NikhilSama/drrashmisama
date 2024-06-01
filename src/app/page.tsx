import { Container, Box, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Reviews from "./components/reviews";
import Author from "./components/author";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Dr Rashmi Sama | Pulmonologist, General Physician, Medical Consierge",
//   description:
//     "Dr Rashmi Sama is a US Board Certified Pulmonologist, General Physician, Medical Consierge.",
// };

export default function Home() {
  return (
    <Container
      sx={{
        maxWidth: "800px",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Hero />
      <About />
      {/* <Reviews />
      <Author /> */}
    </Container>
  );
}
