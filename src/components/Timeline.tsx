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
import { Bolt, Celebration, SportsBaseball } from "@mui/icons-material";

const nodes: any[] = [
  // {
  //   date: "Spring 2025",
  //   event: "Sandlot",
  //   description:
  //     "We have plans to play 'pick up' baseball games, if only to give people some time to play!",
  //   icon: <Celebration />,
  // },
  // {
  //   date: "Summer 2025",
  //   event: "Baseball For All Nationals",
  //   description:
  //     "BFA is holding nationals in Sparks, NV. Get your tickets if you want to go watch! One day we'll get a team there.",
  //   icon: <SportsBaseball />,
  //   href: "https://baseballforall.com/nationals/",
  // },
  // {
  //   date: "Fall 2025",
  //   event: "Fall Ball Team",
  //   description:
  //     "If we can drum up enough noise, we'll put together a team for fall ball.",
  //   icon: <Bolt />,
  // },
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
