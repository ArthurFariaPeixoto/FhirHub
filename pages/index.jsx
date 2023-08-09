import React from "react";
import Link from "components/Link";

import {Button, Typography, Container, Stack, Box } from '@mui/material'


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function ValueSet() {


    return (
        <>




            <main>
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="primary"
                            gutterBottom
                        >
                            ValueSet
                        </Typography>
                        <Typography variant="h10" align="center" color="text.secondary" paragraph>
                            Um ValueSet é uma estrutura no padrão FHIR (Fast Healthcare Interoperability Resources) que representa um conjunto de códigos extraídos de um ou mais sistemas de códigos. Ele é usado para definir um conjunto específico de códigos que podem ser usados em um contexto particular, o que facilita a padronização e interoperabilidade de sistemas de saúde.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            {/* <Button variant="contained"  href="form">Criar uma instância
                            </Button> */}
                            <Link variant="contained" href="/form">Criar uma instância</Link>

                            <Button variant="outlined" href="https://www.hl7.org/fhir/r4/valueset.html">Documentação </Button>
                        </Stack>
                    </Container>
                </Box>
            </main>

            <Box sx={{ p: 6 }} component="footer">
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    ADF desenvolvido para a disciplina de Experiência do Usuário de Software
                </Typography>
                <Copyright />
            </Box>
        </>
    );
}