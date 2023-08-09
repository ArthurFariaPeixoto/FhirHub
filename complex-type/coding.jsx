import React from 'react';

import { Grid, Typography, Stack, Box, DateTimeField, Switch, FormControlLabel, FormGroup, Checkbox, FormHelperText } from '@mui/material'
import { AutocompleteElement, TextFieldElement, TextareaAutosizeElement, useFormContext } from 'react-hook-form-mui';



const CodingSection = () => {


    const [showHelperText, setShowHelperText] = React.useState(false);
  
    const handleSwitchChange = () => {
      setShowHelperText(!showHelperText);
    };
  

    const opcoesBoolean = [{ id: 1, label: "False" }, { id: 2, label: "True" }]


  return (

          <Box sx={{ p: 2, border: '1px dashed grey', ml: 3 }} mt={5}  >
            <Typography variant="h16" gutterBottom sx={{ mt: 0 }} color="primary">
              Coding
            </Typography>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                <TextFieldElement
                  id="system"
                  name="system"
                  label="System"
                  placeholder="http://terminology.hl7.org/CodeSystem/v2-0203"
                  helperText={showHelperText ? "O valor que é único" : null}
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextFieldElement
                  id="code"
                  name="code"
                  label="Code"
                  placeholder='MR'
                  helperText={showHelperText ? "Código definido por um sistema de terminologiario médico" : null}
                  fullWidth
                />
              </Grid>

              <Grid item md={6} xs={6}>
                <TextFieldElement
                  id="display"
                  name="display"
                  label="Display"
                  placeholder="Medical Record Number"
                  helperText={showHelperText ? "Representação definida pelo sistema" : null}
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextFieldElement
                  id="c-version"
                  name="c-version"
                  label="Version"
                  placeholder="1.0.0"
                  helperText={showHelperText ? "Versão do sistema - relevante" : null}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={6} >
                <AutocompleteElement name="userSelected" label="userSelected" options={opcoesBoolean} />
                {showHelperText && <FormHelperText>Se esta codificação foi escolhida diretamente pelo usuário</FormHelperText>}
              </Grid>
            </Grid>
          </Box> 

  );
};

export default CodingSection;
