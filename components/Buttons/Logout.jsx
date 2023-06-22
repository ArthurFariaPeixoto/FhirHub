import React from "react";
import { IconButton } from "@mui/material";
import Router from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";

function LogoutButton() {
    const handleLogout = () => {
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const chave = localStorage.key(i);
            if (chave.startsWith("fhir")) {
                localStorage.removeItem(chave);
            }
        }

        Router.push("/login");
    };
    return (
        <IconButton onClick={handleLogout}>
            <LogoutIcon />
        </IconButton>
    );
}

export default LogoutButton;
