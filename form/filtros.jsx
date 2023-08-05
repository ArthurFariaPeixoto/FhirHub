import * as React from 'react';

import { Grid,Typography  } from '@mui/material'
import { AutocompleteElement, TextFieldElement } from 'react-hook-form-mui';


export default function Filtros() {
    const opcoesFilter =[
        {id:1, label:"Is-a"},
        {id:2, label:"Descendant-of"},
        {id:3, label:"is-not-a"},
        {id:4, label:"regex"},
        {id:5, label:"in"},
        {id:6, label:"not-in"},
        {id:7, label:"generalizes"},
        {id:4, label:"exists"},
    ]

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Filtros
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextFieldElement
                        required
                        id="property"
                        name="property"
                        label="Property"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <AutocompleteElement name="filterOperator" label="Filter Operator" options={opcoesFilter} matchId />
                </Grid>
                <Grid item xs={12}>
                    <TextFieldElement
                        required
                        id="value"
                        name="value"
                        label="Value"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextFieldElement
                        required
                        id="exclude"
                        name="exclude"
                        label="Exclude"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
