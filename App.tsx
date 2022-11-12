import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "./src/global/styles/theme";
import Welcome from "./src/pages/Welcome";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Welcome />
      </ThemeProvider>
    </Provider>
  );
}

