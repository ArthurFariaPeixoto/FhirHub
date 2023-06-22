import { Container } from "@mui/material";
import React from "react";
import Header from "./Header/Header";

const Layout = ({ children }) => {
    return (
        <>
            <Container maxWidth="xl">
                <Header />
                {children}
            </Container>
        </>
    );
};

export default Layout;
