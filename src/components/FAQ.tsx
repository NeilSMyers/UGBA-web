import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id="faq"
      sx={{
        py: { xs: 2, sm: 6 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: "text.primary",
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        Frequently asked questions
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle1">
              How are donations used?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              You can see for yourself! All expenditures will be publically
              available.
              <br />
              <br />
              All donations go directly to operating costs. Player equipment,
              training time at batting cages and other facilities, field
              reservations, ambassador activities.
              <br />
              <br />
              Our Director of Operations is a deal finding fiend and will always
              make sure we're getting the best value on every purchase.
              <br />
              <br />
              All work is done by volunteers. No one takes a salary, allowance,
              living expense, or money of any kind!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle1">
              Can I donate my old equipment?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Absolutely! Email us at <Link> utahgirlsbaseball@gmail.com </Link>{" "}
              and we'll set up a time for dropoff! <br />
              <br /> We'll use what we can and refurbish what we need.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle1">
              How do I Volunteer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Make sure you're a member first! Then send an email to{" "}
              <Link> utahgirlsbaseball@gmail.com </Link> with the subject line
              "Volunteer" and the following information:
              <List>
                {[
                  "Membership Card",
                  "What you want to help with",
                  "Special Skills",
                  "Resume or LinkedIn Profile",
                  "Anything else you think would be helpful in placing you",
                ].map((c) => (
                  <ListItem>
                    <ListItemIcon>
                      <ArrowRight />
                    </ListItemIcon>
                    <ListItemText primary={c} />
                  </ListItem>
                ))}
              </List>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle1">
              How can I participate as an adult?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              We only plan on offering playing opportunities for 18U. <br />
              <br /> However, we will always need women to be coaches and
              umpires. Your example will be very important to younger girls!
              <br />
              <br />
              Stay tuned for future plans around these ideas.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
