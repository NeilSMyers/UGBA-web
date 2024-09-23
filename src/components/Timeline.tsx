import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import {
  BatteryChargingFullSharp,
  Bolt,
  School,
  SportsBaseball,
} from "@mui/icons-material";

const nodes = [
  {
    date: "Sept 2024",
    event: "Founded",
    description: "it beginsss",
    icon: <BatteryChargingFullSharp />,
  },
  {
    date: "November 2024",
    event: "First Event",
    description: "Batting cages",
    icon: <Bolt />,
  },
  {
    date: "Winter 2024",
    event: "Clinics",
    description: "After school training",
    icon: <School />,
  },
  {
    date: "Spring 2025",
    event: "Opening Day",
    description: "Possibly something will happen",
    icon: <SportsBaseball />,
  },
];

export default function CustomTimeline() {
  return (
    <Container id="timeline" sx={{ py: 0.01 }}>
      <Timeline position="alternate">
        {nodes.map((n) => (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              {n.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
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
