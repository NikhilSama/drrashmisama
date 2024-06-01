import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function About() {
  return (
    <Box sx={{ marginTop: "50px" }}>
      <Typography variant="body1" sx={{ marginTop: "20px" }}>
        Dr Rashmi Sama is currently a Pulmonologist, practicing at Sir Ganga Ram
        Hospital and Sama Hospital.
        <br />
        <br />
        Previously she worked as a Pulmonologist at the presigious Cook County
        Hospital, Chicago IL, and as a General Physician at the Thomas Jefferson
        Hospital in Philadelphia, PA., and at St Francis Hospital in San
        Francisco, CA.
        <br />
        <br />
        She is a US Board Certified Pulmonologist, General Physician, having
        completed her residency at St Lukes Hospital at Columbia University, and
        a fellowship at Thomas Jefferson and University of Illinois Chicago.
      </Typography>
    </Box>
  );
}
