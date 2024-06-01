import { Container, Box, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import Hero from "../app/components/hero";
import About from "../app/components/about";
import Reviews from "../app/components/reviews";
import Author from "../app/components/author";
import Concierge from "../app/components/concierge";
import Head from "next/head";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title:
//     "Medical Concierge | Dr Rashmi Sama | Pulmonologist, General Physician, Medical Consierge",
//   description:
//     "An exclusive monthly retainer based medical concierge service for oversight and co-ordination of treatment across multiple medical specialists.",
// };

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Medical Concierge | Dr Rashmi Sama | Pulmonologist, General Physician,
          Medical Concierge
        </title>
        <meta
          name="description"
          content="An exclusive monthly retainer based medical concierge service for oversight and co-ordination of treatment across multiple medical specialists."
        />
      </Head>

      <Container
        sx={{
          maxWidth: "800px",
          margin: "auto",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Concierge />
        <Reviews />
      </Container>
    </>
  );
}
