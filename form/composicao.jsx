import * as React from 'react';

import {Checkbox, FormControlLabel, Grid, Typography} from '@mui/material'
import { AutocompleteElement, TextFieldElement,  useFormContext  } from 'react-hook-form-mui';

import Filtros from "./filtros";


export default function Composicao() {
  const {reset, watch, resetField} = useFormContext();

    const opcoesInactive =[{id:1, label:"False"}, {id:2, label:"True"}]

    const [showIncludes, setShowIncludes] = React.useState(null);
    const [showConcepts, setShowConcepts] = React.useState(null);
    const [showDesignations, setShowDesignations] = React.useState(null);
    const [showFilters, setShowFilters] = React.useState(null);

    const includeWatch = watch("includes");
    const conceptWatch = watch("concept");
    const designationWatch = watch("designation");
    const filterWatch = watch("filter");

    React.useEffect(() => {
        if(includeWatch !== undefined && includeWatch !== ""){
          setShowIncludes(1);
        }else{
          setShowIncludes(null);
        }

      if(conceptWatch !== undefined && conceptWatch !== ""){
        setShowConcepts(1);
      }else{
        setShowConcepts(null);
      }

      if(designationWatch !== undefined && designationWatch !== ""){
        setShowDesignations(1);
      }else{
        setShowDesignations(null);
      }

      if(filterWatch !== undefined && filterWatch !== ""){
        setShowFilters(1);
      }else{
        setShowFilters(null);
      }


      }, [includeWatch, conceptWatch, designationWatch, filterWatch]);

  const handleBoxChange = () => {
    setShowFilters(!showFilters);
  };

    return (
        <React.Fragment>
          <Typography variant="h6"gutterBottom>
            Informações de Composição
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextFieldElement
                id="lockedData"
                name="LockedDate"
                label="Locked Date"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} >
                <AutocompleteElement name="inactive" label="Inactive" options={opcoesInactive} />
            </Grid>


            <Grid item xs={12}>
              <TextFieldElement
                required
                id="includes"
                name="includes"
                label="Include"
                fullWidth
              />
            </Grid>

            {showIncludes && (
                <>
                    <Grid item md={6} xs={12}>
                      <TextFieldElement
                        id="system"
                        name="system"
                        label="system"
                        fullWidth
                        required
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextFieldElement
                        id="version"
                        name="version"
                        label="version"
                        fullWidth
                      />
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <TextFieldElement
                        id="concept"
                        name="concept"
                        label="concept"
                        fullWidth
                      />
                    </Grid>
                        {showConcepts && (
                            <>
                                <Grid item md={12} xs={12}>
                                  <TextFieldElement
                                    id="code"
                                    name="code"
                                    label="code"
                                    fullWidth
                                    required
                                  />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                  <TextFieldElement
                                    id="display"
                                    name="display"
                                    label="display"
                                    fullWidth
                                  />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                  <TextFieldElement
                                    id="designation"
                                    name="designation"
                                    label="designation"
                                    fullWidth
                                  />
                                </Grid>

                                {showDesignations && (
                                    <>
                                        <Grid item md={12} xs={12}>
                                          <TextFieldElement
                                            id="language"
                                            name="language"
                                            label="language"
                                            fullWidth
                                          />
                                        </Grid>

                                        <Grid item md={6} xs={12}>
                                          <TextFieldElement
                                            id="use"
                                            name="use"
                                            label="use"
                                            fullWidth
                                          />
                                        </Grid>

                                        <Grid item md={6} xs={12}>
                                          <TextFieldElement
                                            id="value"
                                            name="value"
                                            label="value"
                                            fullWidth
                                            required
                                          />
                                        </Grid>
                                    </>
                                )}
                            </>
                        )}

                        <Grid item md={12} xs={12}>
                          <FormControlLabel control={<Checkbox onChange={handleBoxChange} />} label="Filter" />
                        </Grid>

                        {showFilters && (
                            <Grid item md={12} xs={12}>
                              <Filtros />
                            </Grid>
                        )}
                </>
            )}

            <Grid item md={12} xs={12}>
              <TextFieldElement
                id="exclude"
                name="exclude"
                label="exclude"
                fullWidth
              />
            </Grid>
    
          </Grid>
        </React.Fragment>
      );

}