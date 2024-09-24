import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: "8px 12px",
}));

const linkToForm = "https://forms.gle/HcJWpNe8WtLzkaFC7";

const shortcuts = [
  { title: "Timeline", href: "#timeline" },
  { title: "Our Team", href: "#ourteam" },
  { title: "Ambassador Program", href: "#ambassador" },
  { title: "Donations", href: "#donations" },
  { title: "FAQ", href: "#faq" },
  { title: "Team", href: "#ourteam" },
];

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 3,
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 0,
            }}
          >
            <Box sx={{ display: { sm: "flex", md: "none" } }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>
                  <Divider sx={{ my: 3 }} />
                  {shortcuts.map((s) => (
                    <Link color="textPrimary" underline="none" href={s.href}>
                      <MenuItem>{s.title}</MenuItem>
                    </Link>
                  ))}
                </Box>
              </Drawer>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex", gap: 25 } }}>
              {shortcuts.map((s) => (
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  href={s.href}
                  sx={{ minWidth: 0 }}
                >
                  {s.title}
                </Button>
              ))}
            </Box>
            <Button
              color="success"
              variant="contained"
              size="small"
              sx={{
                minWidth: 150,
              }}
            >
              Donate
            </Button>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
