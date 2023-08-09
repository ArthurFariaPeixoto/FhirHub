import React from 'react';

import { Grid, Typography, Stack, Box, DateTimeField, Switch, FormControlLabel, FormGroup, Checkbox, FormHelperText } from '@mui/material'
import { AutocompleteElement, TextFieldElement, TextareaAutosizeElement, useFormContext } from 'react-hook-form-mui';

import Coding from "../complex-type/coding"


const TypeSection = () => {


    const [showHelperText, setShowHelperText] = React.useState(false);
    const [showCoding, setshowCoding] = React.useState(false);


    const handleSwitchChange = () => {
        setShowHelperText(!showHelperText);
    };

    const handleBoxChange = () => {
        setshowCoding(!showCoding);
    };

    return (

        <Box sx={{ p: 2, border: '1px dashed grey', ml: 3 }} mt={3} >

            <Typography variant="h16" gutterBottom sx={{ mt: 0, ml: 0 }}color="primary">
                Type
            </Typography>

            <Grid item md={6} xs={6}>
                <FormGroup item mt={16} >
                    <FormControlLabel control={<Checkbox onChange={handleBoxChange} />} label="Coding" />
                    {showHelperText && <FormHelperText>t</FormHelperText>}
                </FormGroup>
            </Grid>
            <Grid container spacing={3}>
                {showCoding && (
                    <>
                        <Coding />
                    </>
                )}
                <Grid item md={12} xs={12}>
                    <TextFieldElement
                        id="text"
                        name="text"
                        label="Text"
                        placeholder="123456"
                        helperText={showHelperText ? "Número do prontuário médico" : null}
                        fullWidth
                    />
                </Grid>
            </Grid>

        </Box>
    );
};

export default TypeSection;
