import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Face3, SportsBaseball, Store } from "@mui/icons-material";
import { Button } from "@mui/material";

const items = [
  {
    icon: <Face3 />,
    title: "You agree to...",
    description:
      "Represent UGBA on the field, wear our patches on your jersey, do at least 83% of your best, but most importantly, have FUN playing baseball.",
  },
  {
    icon: <Store />,
    title: "We provide you...",
    description:
      "Funding, transportation, equipment, camps, private coaching, clinics, anything you need to play more baseball!",
  },
  {
    icon: <SportsBaseball />,
    title: "Play Ball!",
    description:
      "We tear down any barrier we can to give you every opportunity you want! We deal with the logistics so you can focus on playing ball!",
  },
];

const ambassadorAppLink = "https://forms.gle/jZH35iXn28PY5u4o9";

export default function Ambassador() {
  return (
    <Box
      id="ambassador"
      sx={{
        py: { xs: 4, sm: 12 },
        color: "white",
        bgcolor: "grey.900",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Ambassador Program
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Explore how we can help you further your baseball journey
            <br />
            through our unique sponsorship program.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  height: "100%",
                  borderColor: "hsla(220, 25%, 25%, 0.3)",
                  backgroundColor: "grey.800",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: "medium" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" href={ambassadorAppLink} target="_blank">
          Become a UGBA Ambassador
        </Button>
      </Container>
    </Box>
  );
}
