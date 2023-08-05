import * as React from 'react';

import { Grid, Typography, DateTimeField, Switch, FormControlLabel, FormGroup, Checkbox, FormHelperText } from '@mui/material'
import { AutocompleteElement, TextFieldElement, TextareaAutosizeElement, useFormContext } from 'react-hook-form-mui';


export default function Atributos() {

  const opcoesBoolean = [{ id: 1, label: "False" }, { id: 2, label: "True" }]

  const { reset, watch, resetField } = useFormContext();

  const [showHelperText, setShowHelperText] = React.useState(false);
  const [showIdentifier, setshowIdentifier] = React.useState(null);

  const handleSwitchChange = () => {
    setShowHelperText(!showHelperText);
  };

  const identifierWatch = watch("identifier");

  React.useEffect(() => {
    if (identifierWatch !== undefined && identifierWatch !== "") {
      setshowIdentifier(1);
    } else {
      setshowIdentifier(null);
    }
  }, [identifierWatch]);

  const opcoesStatus = [
    { id: 1, label: "Draft" },
    { id: 2, label: "Active" },
    { id: 3, label: "Retired" },
    { id: 4, label: "Unknown" }
  ]

  const opcoesUse = [
    { id: 1, label: "Usual" },
    { id: 2, label: "Official" },
    { id: 3, label: "Temp" },
    { id: 4, label: "Secondary" },
    { id: 5, label: "Old (If known)" }
  ]

  return (
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
        Informações Básicas
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
          <TextFieldElement
            id="name"
            name="name"
            label="Name"
            placeholder="ExampleValueSet"
            helperText={showHelperText ? "Nome para este ValueSet (compatível com computador)" : null}
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextFieldElement
            id="identifier"
            name="identifier"
            label="Identifier"
            placeholder="example-valueset"
            helperText={showHelperText ? "Identificador adicional para o ValueSet" : null}
            fullWidth
          />
        </Grid>
          {showIdentifier && (
            <>
              <Grid item md={6} xs={6}>
                <AutocompleteElement name="use" label="Use" options={opcoesUse} matchId
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextFieldElement
                  id="value"
                  name="value"
                  label="Value"
                  placeholder="123456"
                  helperText={showHelperText ? "O valor que é único" : null}
                  fullWidth
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextFieldElement
                  id="system"
                  name="system"
                  label="System"
                  placeholder="http://example.com/identifiers/valueset"
                  helperText={showHelperText ? "O namespace para o valor do identificador" : null}
                  fullWidth
                />
              </Grid>
            </>
          )}
        <Grid item xs={12}>
          <TextFieldElement
            id="url"
            name="url"
            label="Url"
            placeholder="http://example.com/fhir/ValueSet/example-valueset"
            helperText={showHelperText ? "Identificador canônico para este ValueSet, representado como um URI" : null}
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextFieldElement
            id="title"
            name="title"
            label="Title"
            placeholder="Example ValueSet"
            helperText={showHelperText ? "Nome para este ValueSet (amigável para humanos)" : null}
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <AutocompleteElement name="status" label="Status" options={opcoesStatus} matchId required
          />
        </Grid>
        <Grid item xs={12}>
          {/*<DateTimePickerElement*/}
          {/*    label="Datetime Picker"*/}
          {/*    name="datetime"*/}
          {/* renderInput={}/>*/} Data aqui!
        </Grid>
        <Grid item md={6} xs={12}>
          <TextFieldElement
            id="version"
            name="version"
            label="Version"
            placeholder="1.0.0"
            helperText={showHelperText ? "Versão comercial do ValueSet" : null}
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextFieldElement
            id="publisher"
            name="publisher"
            label="Publisher"
            placeholder="Example Healthcare Organization"
            helperText={showHelperText ? "Nome do editor (organização ou indivíduo)" : null}
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} >
          <AutocompleteElement name="experimental" label="Experimental" options={opcoesBoolean} />
          {showHelperText && <FormHelperText>Para fins de teste, não uso real</FormHelperText>}
        </Grid>
        <Grid item xs={12} sm={6} >
          <AutocompleteElement name="immutable" label="Immutable" options={opcoesBoolean} />
          {showHelperText && <FormHelperText>Indica se pode ou não ocorrer qualquer alteração na definição lógica do conteúdo</FormHelperText>}
        </Grid>
        <Grid item md={12} xs={12}>
          <TextFieldElement
            id="purpose"
            name="purpose"
            label="Purpose"
            placeholder="This ValueSet is created for demonstrating FHIR capabilities."
            helperText={showHelperText ? "Por que esse ValueSet é definido" : null}
            fullWidth />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextFieldElement
            id="copyright"
            name="copyright"
            label="Copyright"
            placeholder="© 2023 Example Healthcare Organization. All rights reserved."
            helperText={showHelperText ? "Restrições de uso e/ou publicação" : null}
            fullWidth />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextareaAutosizeElement
            id="description"
            name="description"
            label="Description"
            placeholder="This is an example ValueSet for demonstration purposes."
            helperText={showHelperText ? "Descrição em linguagem natural do ValueSet" : null}
            fullWidth
            rows={5}
            resizeStyle={"none"}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControlLabel
            control={<Switch color="primary" onChange={handleSwitchChange} />}
            label="Descrições dos campos acima"
          />
        </Grid>

      </Grid>
      
    </React.Fragment>
  );

}
