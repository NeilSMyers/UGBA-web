import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { instagram } from "../constants";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "Background",
        backgroundImage:
          "radial-gradient(ellipse 80% 100% at 50% -20%, hsl(210, 100%, 16%), transparent)",
      }}
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
              width: "100%",
            }}
          >
            Non-profit organization creating opportunities for girls all over
            Utah to play baseball.
            <br />
            In partnership with{" "}
            <Link href="https://baseballforall.com/">
              <Typography
                sx={{
                  display: "inline",
                  color: "text.secondary",
                }}
              >
                Baseball For All
              </Typography>
            </Link>
          </Typography>

          <Button
            id="timeline"
            href={instagram}
            target="_blank"
            variant="contained"
            size="large"
            color="inherit"
            style={{
              background:
                "radial-gradient(circle farthest-side at 0% 0%, #833ab4 15%, #fd1d1d 80%, #fcb045)",
            }}
          >
            Follow us on Instagram
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
