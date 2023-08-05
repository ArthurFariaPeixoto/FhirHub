import * as React from 'react';

import { Grid,Typography  } from '@mui/material'
import { AutocompleteElement, TextFieldElement, TextareaAutosizeElement } from 'react-hook-form-mui';


export default function Atributos() {
  const opcoesStatus =[
      {id:1, label:"Draft"},
      {id:2, label:"Active"},
      {id:3, label:"Retired"},
      {id:4, label:"Unknown"}
  ]

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações Básicas
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextFieldElement
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextFieldElement
            required
            id="id"
            name="id"
            label="Id"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldElement
            required
            id="url"
            name="url"
            label="Url"
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextFieldElement
            id="title"
            name="title"
            label="Title"
            fullWidth
            required
          />
        </Grid>
          <Grid item md={6} xs={12}>
              <AutocompleteElement name="status" label="Status" options={opcoesStatus} matchId required />
          </Grid>
          <Grid item md={6} xs={12}>
              {/*<DateTimePickerElement*/}
              {/*    label="Datetime Picker"*/}
              {/*    name="datetime"*/}
              {/* renderInput={}/>*/}campo de data ta dando erro mas vai ficar aqui
          </Grid>
          <Grid item md={6} xs={12}>
              <TextFieldElement
                  id="publisher"
                  name="publisher"
                  label="Publisher"
                  fullWidth
                  required/>
          </Grid>
          <Grid item md={6} xs={12}>
              <TextFieldElement
                  id="purpose"
                  name="purpose"
                  label="Purpose"
                  fullWidth
                  required/>
          </Grid>
          <Grid item md={6} xs={12}>
              <TextFieldElement
                  id="copyright"
                  name="copyright"
                  label="Copyright"
                  fullWidth
                  required/>
          </Grid>
          <Grid item md={12} xs={12}>
              <TextareaAutosizeElement
                  id="description"
                  name="description"
                  label="Description"
                  fullWidth
                  required
                  rows={5}
                  resizeStyle={"none"}
              />
          </Grid>

      </Grid>
    </React.Fragment>
  );
}
