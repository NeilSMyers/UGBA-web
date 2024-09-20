import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppAppBar from "../components/AppAppBar";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Pricing from "../components/Pricing";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  const defaultTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div style={{ backgroundColor: defaultTheme.palette.background.default }}>
        <Features />
        <Testimonials />
        <Highlights />
        <Pricing />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>UGB</title>;
