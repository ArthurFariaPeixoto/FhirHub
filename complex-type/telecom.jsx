import React from 'react';

import { Grid, Typography, Stack, Box, DateTimeField, Switch, FormControlLabel, FormGroup, Checkbox, FormHelperText } from '@mui/material'
import { AutocompleteElement, TextFieldElement, TextareaAutosizeElement, useFormContext } from 'react-hook-form-mui';

const TelecomSection = () => {

    const [showHelperText, setShowHelperText] = React.useState(false);
  
    const handleSwitchChange = () => {
      setShowHelperText(!showHelperText);
    };

    const opcoesSystem = [
        { id: 1, label: "Phone" },
        { id: 2, label: "Fax" },
        { id: 3, label: "Email" },
        { id: 4, label: "Pager" },
        { id: 5, label: "Url" },
        { id: 6, label: "Sms" },
        { id: 7, label: "Other" }
    ]
  
  return (

          <Box sx={{ p: 2, border: '1px dashed grey', ml: 3 }} mt={5}  >
            <Typography variant="h16" gutterBottom sx={{ mt: 0 }} color="primary">
              Telecom
            </Typography>
            <Grid container spacing={3}>
            <Grid item md={12} xs={6}>
                    <AutocompleteElement name="system" label="System" options={opcoesSystem} matchId
                    />
                </Grid>
                <Grid item md={12} xs={6}>
                    <TextFieldElement
                        id="t-value"
                        name="t-value"
                        label="Value"
                        helperText={showHelperText ? "O valor que é único" : null}
                        fullWidth
                    />
                </Grid>
            
            </Grid>
          </Box> 

  );
};

export default TelecomSection;
