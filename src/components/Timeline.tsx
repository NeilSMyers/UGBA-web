import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Timeline() {
  return (
    <Container id="timeline" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: "100%" }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
          textAlign="center"
        >
          Timeline
        </Typography>
      </Box>
    </Container>
  );
}
