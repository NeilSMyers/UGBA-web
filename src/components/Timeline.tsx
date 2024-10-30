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
    date: "Winter 2024",
    event: "Recruit & Gather",
    description: "Marketing, recruiting, organizing, and forming an identity.",
    icon: <BatteryCharging80 />,
  },
  {
    date: "Spring 2025",
    event: "First Team",
    description:
      "All girls rec league team in the Saratoga Springs / Eagle Mountain area. Let us know if you're interested in playing!",
    icon: <Celebration />,
  },
  {
    date: "Summer 2025",
    event: "Baseball For All Nationals",
    description:
      "BFA is holding nationals in Sparks, NV. Though taking our own team seems unlikely this year, it's always good to look forward.",
    icon: <SportsBaseball />,
    href: "https://baseballforall.com/nationals/",
  },
  {
    date: "Fall 2025",
    event: "Fall Ball Team",
    description:
      "Start gathering more competitive teams with our eyes on BFA tournaments going forward.",
    icon: <Bolt />,
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
