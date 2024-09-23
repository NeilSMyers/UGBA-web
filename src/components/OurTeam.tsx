import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { Card, CardContent, Divider, Grid2 as Grid } from "@mui/material";

// @ts-expect-error
import neil from "../images/neil.jpg";
// @ts-expect-error
import haihan from "../images/haihan.png";
// @ts-expect-error
import derek from "../images/derek.png";
// @ts-expect-error
import alysha from "../images/alysha.png";

const itemData = [
  {
    img: neil,
    name: "Neil Myers",
    title: "Executive Director",
    description:
      "A deep love of baseball and a strong desire to give girls a safe and accepting path into baseball. Neil's vision keeps us all pointed in the same direction.",
  },
  {
    img: haihan,
    name: "Dr Haihan Lin",
    title: "Director of Logistics",
    description:
      "A PhD in Computer Science, and an amazing logistical, creative mind. Haihan keeps our costs down, our plans straight forward, and our iteneraries followed.",
  },
  {
    img: derek,
    name: "Derek Sorensen",
    title: "Director of Sports Psychology",
    description:
      "A BS in Psychology, MS in Sport Psychology, and a passion for athlete wellbeing. Derek uses the most modern practices to make sure we keep baseball fun.",
  },
  {
    img: alysha,
    name: "Alysha Clarke",
    title: "Director of Marketing",
    description:
      "An artist's mind, and a moving example of female empowerment. Alysha gets us in front of more people, and keeps our members informed.",
  },
];

export default function OurTeam() {
  return (
    <Container
      id="ourteam"
      sx={{ pb: { xs: 4, sm: 12 }, pt: { xs: 2, sm: 8 } }}
    >
      <Box sx={{ width: { sm: "100%", md: "60%" } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Our Team
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {itemData.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.name}>
            <Card sx={{ p: 1, maw: 250 }}>
              <CardContent>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    borderRadius: 4,
                  }}
                />

                <Typography variant="h5" sx={{ color: "text.primary" }}>
                  {item.name}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {item.title}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
