import * as React from "react";

import { Grid, Typography } from "@mui/material";
import { AutocompleteElement, TextFieldElement, useFormContext, DatePickerElement } from "react-hook-form-mui";

export default function Extensao() {
    const { reset, watch, resetField } = useFormContext();

    const opcoesStatus = [
        { id: 1, label: "Draft" },
        { id: 2, label: "Active" },
        { id: 3, label: "Retired" },
        { id: 4, label: "Unknown" },
    ];

    const [showParameters, setShowParameters] = React.useState(null);

    const parameterWatch = watch("parameter");

    React.useEffect(() => {
        if (parameterWatch !== undefined && parameterWatch !== "") {
            setShowParameters(1);
        } else {
            setShowParameters(null);
        }
    }, [parameterWatch]);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Extens&atilde;o
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextFieldElement required id="identifier" name="identifier" label="Identifier" fullWidth />
                </Grid>
                <Grid item md={6} xs={12}>
                    <DatePickerElement label="Datetime Picker" name="datetime" inputProps={{ fullWidth: true }} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextFieldElement fullWidth label={"Total"} name={"total"} required type={"number"} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextFieldElement fullWidth label={"Offset"} name={"offset"} required type={"number"} />
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextFieldElement required id="parameter" name="parameter" label="Parameter" fullWidth />
                </Grid>
                {showParameters && (
                    <Grid item md={12} xs={12}>
                        <TextFieldElement id="parameterName" name="parameterName" label="Parameter Name" fullWidth required />
                    </Grid>
                )}
                <Grid item md={12} xs={12}>
                    <TextFieldElement required id="contains" name="contains" label="Contains" fullWidth />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
