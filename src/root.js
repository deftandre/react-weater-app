import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { createTheme, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import App from "./app";

/** custom properties in material ui theme to using in style */
const theme = createTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        common: {
            white: "#f4f4f4",
            black: "#212121",
        },
        secondary: {
            main: "#ff1744",
        },
    },
});

const Root = () => (
    <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <BrowserRouter>
                <Route component={App} />
            </BrowserRouter>
        </ThemeProvider>
    </MuiThemeProvider>
);

/** custom custom globalstyle configs in all app */
const GlobalStyle = createGlobalStyle`
    #root{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
`;

export default hot(module)(Root);
