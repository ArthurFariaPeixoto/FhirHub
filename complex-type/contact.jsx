import React from 'react';

import { Grid, Typography, Stack, Box, DateTimeField, Switch, FormControlLabel, FormGroup, Checkbox, FormHelperText } from '@mui/material'
import { AutocompleteElement, TextFieldElement, TextareaAutosizeElement, useFormContext } from 'react-hook-form-mui';


import Telecom from "../complex-type/telecom"


const ContactSection = () => {

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
        Contact
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={12} xs={12}>
          <TextFieldElement
            id="name"
            name="name"
            label="name"
            helperText={showHelperText ? "Nome de uma pessoa para contato" : null}
            fullWidth
          />



        </Grid>


        <Grid item md={6} xs={6}>
          <FormGroup item mt={16} >
            <FormControlLabel control={<Checkbox onChange={handleBoxChange} />} label="Telecom" />
            {showHelperText && <FormHelperText>Detalhes de contato para indivíduo ou organização</FormHelperText>}
          </FormGroup>
        </Grid>



        {showTelecom && (
          <>
            <Telecom />
          </>
        )}

      </Grid>
    </Box>

  );
};

export default ContactSection;
