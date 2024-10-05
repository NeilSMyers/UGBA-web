import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppAppBar from "../components/AppAppBar";
import Hero from "../components/Hero";
import Ambassador from "../components/Ambassador";
import Donations from "../components/Donations";
import OurTeam from "../components/OurTeam";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Timeline from "../components/Timeline";

import { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  const defaultTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <div style={{ backgroundColor: "hsl(210, 100%, 16%)" }}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline enableColorScheme />

        <AppAppBar />
        <Hero />
        <div
          style={{ backgroundColor: defaultTheme.palette.background.default }}
        >
          <Timeline />
          <OurTeam />
          <Ambassador />
          <Testimonials />
          <Donations />
          <FAQ />
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>UGBA</title>;
