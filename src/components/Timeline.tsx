import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Container, Link } from "@mui/material";
import {
  BatteryCharging80,
  Bolt,
  Celebration,
  School,
  SportsBaseball,
} from "@mui/icons-material";

const nodes = [
  {
    date: "Fall 2024",
    event: "Recruit & Gather",
    description:
      "Marketing, recruiting, organizing, forming an identity, and paperwork",
    icon: <BatteryCharging80 />,
  },
  {
    date: "December 2024",
    event: "First Team",
    description:
      "We're currently gathering players for a 12U team to play in winter tournaments in St. George. Let us know if you're interested!",
    icon: <Celebration />,
  },
  {
    date: "Winter '24 / '25",
    event: "School Clinics",
    description:
      "Instruction / practices at local schools for face-to-face training and in-person recruiting (contact us if you want an event at your school)",
    icon: <School />,
  },
  {
    date: "Spring 2025",
    event: "First League?",
    description:
      "Depending on our recruiting success, we'll be able to run our first league! At the very least we'll be sponsoring a team of girls in a local rec or travel league",
    icon: <Bolt />,
  },
  {
    date: "Summer 2025",
    event: "Baseball For All Nationals",
    description:
      "BFA is holding nationals in Sparks, NV. We have the perfect opportunity for our first National team",
    icon: <SportsBaseball />,
    href: "https://baseballforall.com/nationals/",
  },
];

export default function CustomTimeline() {
  return (
    <Container id="timeline" sx={{ py: 0.01 }}>
      <Timeline position="alternate-reverse">
        {nodes.map((n, i) => (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body1"
              color="text.secondary"
            >
              {n.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                sx={{ bgcolor: i ? "secondary" : "transparent" }}
              />
              <TimelineDot color="success">{n.icon}</TimelineDot>
              <TimelineConnector
                sx={{
                  bgcolor: i === nodes.length - 1 ? "transparent" : "secondary",
                }}
              />
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
              {n.href ? (
                <Link href={n.href} target="_blank">
                  <Typography variant="h6" component="span" color="primary">
                    {n.event}
                  </Typography>
                </Link>
              ) : (
                <Typography variant="h6" component="span" color="primary">
                  {n.event}
                </Typography>
              )}
              <Typography color="secondary">{n.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}
