import React from 'react';

import { Grid, Typography, Stack, Box, DateTimeField, Switch, FormControlLabel, FormGroup, Checkbox, FormHelperText } from '@mui/material'
import { AutocompleteElement, TextFieldElement, TextareaAutosizeElement, useFormContext } from 'react-hook-form-mui';


import Telecom from "../complex-type/telecom"


const ContextSection = () => {

  const [showHelperText, setShowHelperText] = React.useState(false);

  const handleSwitchChange = () => {
    setShowHelperText(!showHelperText);
  };

  const [showTelecom, setshowTelecom] = React.useState(false);


  const handleBoxChange = () => {
    setshowTelecom(!showTelecom);
  };

  return (

    <Box sx={{ p: 2, border: '1px dashed grey', ml: 3 }} mt={5}  >
      <Typography variant="h16" gutterBottom sx={{ mt: 0 }} color="primary">
      useContext
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={12} xs={6}>
          <TextFieldElement
            id="code"
            name="code"
            label="Code"
            helperText={showHelperText ? "Tipo de contexto que está sendo especificado" : null}
            fullWidth
            required
          />
        </Grid>

        <Grid item md={12} xs={6}>
          <TextFieldElement
            id="valuex"
            name="valuex"
            label="Value[x]"
            fullWidth
            required
          />
        </Grid>




       
      </Grid>
    </Box>

  );
};

export default ContextSection;
