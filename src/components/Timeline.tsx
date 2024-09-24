import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
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
    event: "First Activity",
    description:
      "Initial gathering at a local batting cage so we can meet, answer questions, make sure everyone has the equipment they need, and have some fun",
    icon: <Celebration />,
  },
  {
    date: "Winter '24 / '25",
    event: "School Clinics",
    description:
      "Instruction / practices at local schools for face-to-face training (contact us if you want an event at your school)",
    icon: <School />,
  },
  {
    date: "Spring 2025",
    event: "First League",
    description:
      "Depending on our recruiting success, we'll be able to run our first league! We're focusing on high school and coach pitch age groups. We'll do our best to not interfere with existing leagues, including softball. If we aren't able to form enough teams to play, we'll also offer sponsorship to play in you local leagues",
    icon: <Bolt />,
  },
  {
    date: "Summer 2025",
    event: "Ambassador Success",
    description:
      "Building Relationships with our ambassadors so they can attend summer camps or get the training they want. We'll also continue other activities and trainings based on player sentiment",
    icon: <SportsBaseball />,
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
                sx={{ bgcolor: i ? "white" : "transparent" }}
              />
              <TimelineDot color="success">{n.icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" color="primary">
                {n.event}
              </Typography>
              <Typography color="secondary">{n.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}