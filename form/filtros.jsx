import * as React from 'react';

import { Grid,Typography  } from '@mui/material'
import { AutocompleteElement, DateTimePickerElement, TextFieldElement, TextareaAutosizeElement } from 'react-hook-form-mui';


export default function Filtros() {
    const opcoesStatus =[
        {id:1, label:"Draft"},
        {id:2, label:"Active"},
        {id:3, label:"Retired"},
        {id:4, label:"Unknown"}
    ]

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Filtros
            </Typography>
            <Grid container spacing={3}>

            </Grid>
        </React.Fragment>
    );
}
