import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Atributos from "../form/atributos";
import Filtros from '../form/filtros';
import Extensão from '../form/extensão';
import Composição from '../form/composição';

import { FormContainer} from 'react-hook-form-mui';


const steps = ['Atributos Básicos', 'Filtros', 'Composição', 'Extensão'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Atributos />;
    case 1:
      return <Filtros />;
    case 2:
      return <Composição />;
      case 3:
        return <Extensão />;
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
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Finalizado.
              </Typography>
              <Typography variant="subtitle1">
               ValueSet criado com sucesso.
              </Typography>
            </React.Fragment>
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
