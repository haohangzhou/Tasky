import React from "react";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import { ProvideAuth } from "./AuthContext";
import { Container, CssBaseline, styled, Theme } from "@mui/material";
import { SxProps } from "@mui/system";
import ThemeModeProvider from "./ThemeModeContext";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "../views/ErrorFallbackView";

const AppbarOffset = styled("div")(({ theme }) => theme.mixins.toolbar);

const containerStyle: SxProps<Theme> = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: {
    xs: 2,
    md: 3
  }
};

function App() {
  return (
    <ProvideAuth>
      <ThemeModeProvider>
        <CssBaseline />
        <BrowserRouter>
          <AppHeader />
          <Container maxWidth="md" disableGutters sx={containerStyle}>
            <AppbarOffset />
            <ErrorBoundary FallbackComponent={ErrorFallbackView}>
              <AppContent />
            </ErrorBoundary>
          </Container>
        </BrowserRouter>
      </ThemeModeProvider>
    </ProvideAuth>
  );
}

export default App;
