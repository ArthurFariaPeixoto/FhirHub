import * as React from 'react';

import { Grid,Typography, Box  } from '@mui/material'
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
            <Box sx={{ p: 2, border: "1px dashed grey" }}>
            <Typography variant="h16" gutterBottom color="primary">
                Filtros
            </Typography>

            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <TextFieldElement
                        required
                        id="property"
                        name="property"
                        label="Property"
                        fullWidth
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <AutocompleteElement name="filterOperator" label="Filter Operator" options={opcoesFilter} matchId />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextFieldElement
                        required
                        id="value"
                        name="value"
                        label="Value"
                        fullWidth
                    />
                </Grid>
            </Grid>
            </Box>
        </React.Fragment>
    );
}