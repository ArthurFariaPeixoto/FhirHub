import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import {Box, Container, Paper, Stepper, Step, StepLabel, Button, Typography } from "@mui/material"
import { FormContainer} from 'react-hook-form-mui';

import Atributos from "../form/atributos";
import Filtros from '../form/filtros';
import Extensao from '../form/extensao';
import Composicao from '../form/composicao';


const steps = ['Atributos Básicos', 'Composição', 'Extensão'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Atributos />;
    case 1:
      return <Composicao />;
    case 2:
      return <Extensao />;

    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <React.Fragment>
      <CssBaseline />
   
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <FormContainer defaultValues={{inactive: {id:1, label:"False"}}}>
          <Typography component="h1" variant="h4" align="center">
            ValueSet
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Finalizado.
              </Typography>
              <Typography variant="subtitle1">
               ValueSet criado com sucesso.
              </Typography>
              <Button variant="contained" type="button" href="/fhirHub/">Voltar para a Home
                            </Button>
            </React.Fragment>
            </div>
          ) : (
            <React.Fragment>
              
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'finalizar' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
          </FormContainer>
        </Paper>

      </Container>
    </React.Fragment>
  );
}