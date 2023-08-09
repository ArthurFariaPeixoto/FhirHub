import React from "react";

import { Grid, Typography, Stack, Box, DateTimeField, Switch, FormControlLabel, FormGroup, Checkbox, FormHelperText } from "@mui/material";
import { AutocompleteElement, TextFieldElement, TextareaAutosizeElement, useFormContext } from "react-hook-form-mui";

import Type from "../complex-type/type";

const IdentifierSection = () => {
    const [showHelperText, setShowHelperText] = React.useState(false);
    const [showIdentifier, setshowIdentifier] = React.useState(null);

    const handleSwitchChange = () => {
        setShowHelperText(!showHelperText);
    };

    const opcoesUse = [
        { id: 1, label: "Usual" },
        { id: 2, label: "Official" },
        { id: 3, label: "Temp" },
        { id: 4, label: "Secondary" },
        { id: 5, label: "Old (If known)" },
    ];

    const [showType, setshowType] = React.useState(false);

    const opcoesBoolean = [
        { id: 1, label: "False" },
        { id: 2, label: "True" },
    ];

    const handleBoxChange = () => {
        setshowType(!showType);
    };

    return (
        <Box sx={{ p: 2, border: "1px dashed gray" }} mt={2}>
            <Typography variant="h16" gutterBottom sx={{ mb: 6 }} color="primary">
                Identifier
            </Typography>
            <Grid container spacing={3}>
                <Grid item md={6} xs={6}>
                    <AutocompleteElement name="use" label="Use" options={opcoesUse} matchId />
                </Grid>
                <Grid item md={6} xs={6}>
                    <TextFieldElement id="value" name="value" label="Value" placeholder="123456" helperText={showHelperText ? "O valor que é único" : null} fullWidth />
                </Grid>

                <Grid item md={6} xs={6}>
                    <FormGroup item mt={16}>
                        <FormControlLabel control={<Checkbox onChange={handleBoxChange} />} label="Type" />
                        {showHelperText && <FormHelperText>t</FormHelperText>}
                    </FormGroup>
                </Grid>

                {showType && (
                    <>
                        <Type />
                    </>
                )}

                <Grid item md={12} xs={12}>
                    <TextFieldElement id="system" name="system" label="System" placeholder="http://example.com/identifiers/valueset" helperText={showHelperText ? "O namespace para o valor do identificador" : null} fullWidth />
                </Grid>
            </Grid>
        </Box>
    );
};

export default IdentifierSection;
