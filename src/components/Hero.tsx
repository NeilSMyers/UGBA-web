import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "Background",
        backgroundImage:
          "radial-gradient(ellipse 80% 100% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 100% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 6, sm: 8 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
              color: "secondary.main",
            }}
          >
            <Typography
              component="span"
              variant="h1"
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                fontSize: "clamp(3rem, 10vw, 3.5rem)",
                color: "primary.light",
              }}
            >
              Utah
            </Typography>
            &nbsp;Girls&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                fontSize: "clamp(3rem, 10vw, 3.5rem)",
                color: "primary.light",
              }}
            >
              Baseball&nbsp;
            </Typography>
            <Typography
              component="span"
              variant="h1"
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                fontSize: "clamp(3rem, 10vw, 3.5rem)",
                color: "primary.light",
              }}
            >
              Association
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Non-profit organization focused on getting girls all over Utah
            involved in baseball.
            <br />
            Show 'em what it really means to play ball like a girl!
          </Typography>

          <Button
            id="timeline"
            href="https://forms.gle/HcJWpNe8WtLzkaFC7"
            target="_blank"
            variant="contained"
            size="large"
            color="secondary"
          >
            Become a Member
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
