import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import DateFnsUtils from "@date-io/date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "layout";
import useThemeStore from "../stores/useThemeStore";
import authVerify from "../utils/authVerify";

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

import "styles/globals.css";
import "styles/sidebarMobile.scss";

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const theme = useThemeStore((state) => state.theme);

    React.useEffect(() => {
        authVerify();
    }, []);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta charSet="utf-8" />
                <title>FhirHub</title>
            </Head>

            <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
                <LocalizationProvider dateAdapter={DateFnsUtils}>
                    <QueryClientProvider client={queryClient}>
                        <CssBaseline />
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </QueryClientProvider>
                </LocalizationProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}
