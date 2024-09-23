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
    title: "Baseballs",
    price: "5",
    description:
      "Can't play without 'em! Keep us on the field and making plays by supplying us with a high quality, game ready ball.",
    buttonText: "Donate",
    buttonVariant: "text",
    buttonColor: "primary",
  },
  {
    title: "Cleats",
    price: "50",
    description:
      "Leg, knee and ankle injuries are among the most common in baseball. Keep us up and running, with supportive shoes.",
    buttonText: "Donate",
    buttonVariant: "outlined",
    buttonColor: "secondary",
  },
  {
    title: "Gloves",
    price: "100",
    description:
      "The baseball player's shield! Keep our hands protected, this could be the first baseball glove someone ever has.",
    buttonText: "Donate",
    buttonVariant: "contained",
    buttonColor: "primary",
  },
  {
    title: "Bats",
    price: "200",
    description:
      "Bat rules change at almost every age group! Keep us swinging for the fences with a poppy, eye catching bat.",
    buttonText: "Donate",
    buttonVariant: "contained",
    buttonColor: "success",
  },
];

export default function Donations() {
  return (
    <Container
      id="donations"
      sx={{
        py: { xs: 4, sm: 12 },
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
          Every bit helps us empower girls all over Utah! We find the best deals
          on high quality equipment so we can make good use of your donations.
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
