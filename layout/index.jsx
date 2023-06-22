import React from "react";
import Header from "./Desktop/Header";
import { useRouter } from "next/router";

import { Box, useTheme, useMediaQuery } from "@mui/material";

const Layout = ({ children }) => {
    const theme = useTheme();
    const router = useRouter();
    const matches = useMediaQuery("(min-width:600px)");

    // React.useEffect(() => {
    //
    // }, [matches]);

    if (router.pathname === "/login") {
        return <>{children}</>;
    } else {
        return (
            <>
                {matches && <Header />}
                <Box
                    sx={{
                        minHeight: `calc(100vh - 7rem)`,
                        // marginLeft: "230px",
                        marginLeft: "2%",
                        marginRight: "2%",
                        marginTop: "7rem",
                        paddingBottom: "5rem",
                        //background: "#fd3d1b",
                    }}
                >
                    {children}
                </Box>
            </>
        );
    }
};

export default Layout;
