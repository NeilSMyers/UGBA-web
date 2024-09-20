import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

const tiers = [
  {
    title: "Baseball",
    price: "5",
    description:
      "Brand New! Premium Quality! Our girls can dig in deep and feel the stitches every time they throw",
    buttonText: "Donate",
    buttonVariant: "text",
    buttonColor: "primary",
  },
  {
    title: "Cleats",
    price: "50",
    description:
      "Leg, knee and ankle injuries are among the most common in baseball. This will help our baserunners sprint without fear",
    buttonText: "Donate",
    buttonVariant: "outlined",
    buttonColor: "secondary",
  },
  {
    title: "Glove",
    price: "100",
    description:
      "The baseball player's shield. This will give someone a great glove that'll help them perform and enjoy the game for years!",
    buttonText: "Donate",
    buttonVariant: "contained",
    buttonColor: "primary",
  },
  {
    title: "Bat",
    price: "200",
    description:
      "Bat rules change at almost every age group! This will give us high quality bats that will generations of girls will hit",
    buttonText: "Donate",
    buttonVariant: "contained",
    buttonColor: "success",
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Donations
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Every bit of money helps us empower girls all over Utah! All donations
          go directly to operating costs, including: player equipment, training
          time, field reservations. All work is done by volunteers. No one takes
          a salary of any kind! We take the responsibility of spending donations
          very seriously and always find the best deals to stretch that dollar
          as far as we can, but we always want high quality equipment so it
          lasts and performs well.
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: "center", justifyContent: "center", width: "100%" }}
      >
        {tiers.map((tier) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={tier.title}>
            <Card
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <CardContent>
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                    },
                  ]}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                  }}
                >
                  <Typography component="h3" variant="h2">
                    ${tier.price}
                  </Typography>
                </Box>

                <Divider sx={{ my: 2, opacity: 0.8, borderColor: "divider" }} />

                <Typography variant="subtitle2" component={"span"}>
                  {tier.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant as "outlined" | "contained"}
                  color={tier.buttonColor as "primary" | "secondary"}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
