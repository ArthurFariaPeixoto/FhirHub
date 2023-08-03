import * as React from 'react';

import { TextField, Checkbox,FormControlLabel,MenuItem, Select, Grid,Typography  } from '@mui/material'
import { AutocompleteElement, SelectElement, FormContainer } from 'react-hook-form-mui';


export default function Atributos() {
  const opcoes =[{id:1, label:"campo 1"},{id:2, label:"campo 2"},{id:3, label:"campo 3"}]

  return (
    <React.Fragment>
      <FormContainer>
      <Typography variant="h6" gutterBottom>
        Informações Básicas
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="id"
            name="id"
            label="Id"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="url"
            name="url"
            label="Url"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="title"
            name="title"
            label="Title"
            fullWidth
            variant="standard"
          />
          <Grid item md={6} xs={12} sx={{ mt: 3 }}>
            <Select label="status" size="large">
            <MenuItem value={1}> ola</MenuItem>
            </Select>
            <AutocompleteElement name="teste" options={opcoes} matchId />
            
                            </Grid>
        </Grid>
      </Grid>
      </FormContainer>
    </React.Fragment>
  );
}
