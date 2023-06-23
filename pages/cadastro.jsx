import React from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormContainer, PasswordElement, TextFieldElement, DatePickerElement } from "react-hook-form-mui";
import login from "../services/auth/login";
import { useRouter } from "next/router";
import { useAlertModal } from "../hooks/useSweetAlert";
import Link from "components/Link";
// import { Preferences } from "@capacitor/preferences";

const Cadastro = () => {
    const router = useRouter();
    const { createModal } = useAlertModal();

    const schema = yup.object().shape({
        nome: yup.string().required("Nome é obrigatório"),
        data_nasc: yup.string().required("Data de nascimento é obrigatório"),
        email: yup.string().required("E-mail é obrigatório"),
        cpf: yup.string().required("CPF é obrigatório"),
        telefone: yup.string().required("Telefone é obrigatório"),
        senha: yup.string().required("Senha é obrigatória"),
        senhaConfirma: yup.string()
            .oneOf([yup.ref('senha'), null], 'As senhas devem ser iguais').required("Senha é obrigatória")
    });


    const handleSubmit = (FormData) => {
        const input = login(FormData);
        if(input === true){
            localStorage.setItem("fhir" + "cadastro", true);
            localStorage.setItem("fhir" + "login", true);
            router.push("/");
        }else{
            createModal("error", { showConfirmButton: false, timer: 1700, html: "Ocorreu um erro ao realizar o cadastro, verifique seus dados" });
        }
    };

    return (
        <>
            <Box
                sx={{ flexGrow: 1 }}
                style={{
                    // backgroundImage: `url()`,
                    backgroundColor: "lightgray",
                    top: "0",
                    left: "0",
                    width: "100%",
                    minHeight: "100vh",
                    height: "100%",

                    position: "fixed",
                    zIndex: "-1",

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                    <FormContainer resolver={yupResolver(schema)} onSuccess={(FormData) => handleSubmit(FormData)}
                                   defaultValues={{
                                       "login":"Ana", "senha":"senha"
                                    }}
                    >
                        <Grid container justifyContent="center" alignItems="center" sx={{ py: 2, pb: 3, borderRadius: "8px", backgroundColor: "rgba(250, 250, 250, 0.88)", pr:2 }} spacing={2}>
                            <Grid item xs={12} sx={{ textAlign: "center", color: "black" }}>
                                <h2>Login</h2>
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ mt: 3 }}>
                                <TextFieldElement fullWidth label="Nome Completo" name="nome" />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ mt: 3 }}>
                                <TextFieldElement fullWidth label="E-mail" name="email" />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ mt: 3 }}>
                                <TextFieldElement fullWidth label="CPF" name="cpf" />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ mt: 3 }}>
                                <PasswordElement fullWidth label="Senha" name="senha" />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ mt: 3 }}>
                                <TextFieldElement fullWidth label="Telefone" name="telefone" />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ mt: 3 }}>
                                <PasswordElement fullWidth label="Confirme sua senha" name="senhaConfirma" />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ mt: 3 }}>
                                <DatePickerElement fullWidth label="Data de Nascimento" name="data_nasc" />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ display: "flex", justifyContent: "right", mt: 2, pr:5 }}>
                                <Button type="submit" size="large" variant="contained">
                                    Concluir cadastro
                                </Button>
                            </Grid>

                        </Grid>
                    </FormContainer>
                </Container>
            </Box>
        </>
    );
};

export default Cadastro;
