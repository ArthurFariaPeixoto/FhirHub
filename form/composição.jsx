import * as React from 'react';

import { Grid,Typography  } from '@mui/material'
import { AutocompleteElement, DateTimePickerElement, TextFieldElement, TextareaAutosizeElement } from 'react-hook-form-mui';
import { blue } from '@mui/material/colors';


export default function Composição() {

    const opcoesStatus =[
        {id:1, label:"Draft"},
        {id:2, label:"Active"},
        {id:3, label:"Retired"},
        {id:4, label:"Unknown"}
    ]

    const opcoesInactive =[
        {id:1, label:"True"},
        {id:2, label:"False"},
    ]
    

    return (
        <React.Fragment>
          <Typography variant="h6"gutterBottom>
            Informações de Composição
          </Typography>

          /** /compose */  
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextFieldElement
                id="lockedData"
                name="Locked Date"
                label="Locked Date"
                fullWidth
              />
            </Grid>

            /** /compose */ 
            <Grid item xs={12} sm={6} >
                <AutocompleteElement name="inactive" label="Inactive" options={opcoesInactive} matchId />
            </Grid>

            /** /compose */ 
            <Grid item xs={12}>
              <TextFieldElement
                required
                id="include"
                name="include"
                label="include"
                fullWidth
              />
            </Grid>

            /** /compose/include */ 
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="system"
                name="system"
                label="system"
                fullWidth
                required
              />
            </Grid>

            /** /compose/include */ 
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="version"
                name="version"
                label="version"
                fullWidth
              />
            </Grid>


            /** /compose/include */ 
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="concept"
                name="concept"
                label="concept"
                fullWidth
              />
            </Grid>

            /** /compose/include/concept */ 
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="code"
                name="code"
                label="code"
                fullWidth
                required
              />
            </Grid>

            /** /compose/include/concept */ 
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="display"
                name="display"
                label="display"
                fullWidth
              />
            </Grid>

            /** /compose/include/concept */ 
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="designation"
                name="designation"
                label="designation"
                fullWidth
              />
            </Grid>

            /** /compose/include/concept/designation */ 
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="language"
                name="language"
                label="language"
                fullWidth
              />
            </Grid>

            /** /compose/include/concept/designation */ 
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="use"
                name="use"
                label="use"
                fullWidth
              />
            </Grid>

            /** /compose/include/concept/designation */ 
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="value"
                name="value"
                label="value"
                fullWidth
                required
              />
            </Grid>

            /** /compose/include */ 
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="filter"
                name="filter"
                label="filter"
                fullWidth
                required
              />
            </Grid>

            /** /compose/include/filter */ 
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="property"
                name="property"
                label="property"
                fullWidth
                required
              />
            </Grid>

            /** /compose/include/filter */
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="op"
                name="op"
                label="op"
                fullWidth
                required
              />
            </Grid>

            /** /compose/include/filter */
            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="value"
                name="value"
                label="value"
                fullWidth
                required
              />
            </Grid>
            /** /Tudo dentro filter */

            <Grid item md={6} xs={12}>
              <TextFieldElement
                id="exclude"
                name="exclude"
                label="exclude"
                fullWidth
              />
            </Grid>


            <Grid item md={6} xs={12}>
                <AutocompleteElement name="status" label="Status" options={opcoesStatus} matchId required />
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
