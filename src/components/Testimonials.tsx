import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

const userTestimonials = [
  {
    avatar: <Avatar alt="Leslie" src="/static/images/avatar/1.jpg" />,
    name: "Leslie",
    occupation: "Lehi",
    testimonial:
      "I played baseball when I was younger until they made us move to softball. I still prefer baseball in a lot of ways. I've been looking for coaching to improve my game.",
  },
  {
    avatar: <Avatar alt="Adrienne" src="/static/images/avatar/2.jpg" />,
    name: "Adrienne",
    occupation: "Sandy",
    testimonial:
      "Early stages I guess, but with two older brothers playing baseball we are fired up our daughter will have the chance too! ",
  },
  {
    avatar: <Avatar alt="Kristina" src="/static/images/avatar/3.jpg" />,
    name: "Kristina",
    occupation: "Salt Lake City",
    testimonial:
      "Good Luck with this!  I hope you are able to create a team at least!  That will be amazing!  I would love to watch!",
  },
];

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
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
          People are excited!
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          We've been met with a lot of confusion as to why there aren't girls
          baseball leagues already. Slowly building a fan and player base the
          more people we meet.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}
            sx={{ display: "flex" }}
          >
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: "text.secondary" }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
