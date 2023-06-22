import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import SwitchThemeButton from "../../Buttons/SwitchThemeButton";

export default function Header() {
    const isLargeScreen = useMediaQuery("(min-width: 1280px)");
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid container item md={3} xs={1}>
                <h1 style={{ fontSize: isLargeScreen ? 48 : 32, fontFamily: "poppins" }}>FHIRHUB</h1>
            </Grid>

            <Grid container item md={9} xs={11} justifyContent="flex-end" alignItems="center" spacing={5}>
                <Grid item>
                    <SwitchThemeButton />
                </Grid>
            </Grid>
        </Grid>
    );
}
