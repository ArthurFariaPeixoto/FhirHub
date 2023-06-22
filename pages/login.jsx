import React from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormContainer, PasswordElement, TextFieldElement } from "react-hook-form-mui";
import { useMutation } from "@tanstack/react-query";
import login from "../services/auth/login";
import { useRouter } from "next/router";
import { useAlertModal } from "../hooks/useSweetAlert";
import { Turnstile } from "@marsidev/react-turnstile";
import { Random } from "random-js";
// import { Preferences } from "@capacitor/preferences";

const Login = () => {
    const router = useRouter();
    const { createModal } = useAlertModal();

    const schema = yup.object().shape({
        login: yup.string().required("Login é obrigatório"),
        senha: yup.string().required("Senha é obrigatória"),
    });

    const { mutate, isLoading, error, data, isSuccess } = useMutation((FormData) => login(FormData), {
        onSuccess: (data) => {
            localStorage.setItem("fhir" + "logou", true);
            router.push("/");
        },
        onError: (error) => {
            createModal("error", { showConfirmButton: false, timer: 1700, html: "Ocorreu um erro ao realizar o login, verifique seus dados" });
        },
    });

    const handleSubmit = (FormData) => {
        mutate(FormData);
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
                <Container maxWidth="xs" sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                    <FormContainer resolver={yupResolver(schema)} onSuccess={(FormData) => handleSubmit(FormData)}>
                        <Grid container justifyContent="center" alignItems="center" sx={{ py: 2, pb: 3, borderRadius: "8px", backgroundColor: "rgba(250, 250, 250, 0.88)" }}>
                            <Grid item xs={12} sx={{ textAlign: "center", color: "black" }}>
                                <h2>Login</h2>
                            </Grid>
                            <Grid item xs={9} sx={{ mt: 3 }}>
                                <TextFieldElement fullWidth label="Login" name="login" />
                            </Grid>
                            <Grid item xs={9} sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                                <PasswordElement fullWidth label="Senha" name="senha" />
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                <Button type="submit" variant="contained">
                                    Entrar
                                </Button>
                            </Grid>
                        </Grid>
                    </FormContainer>
                </Container>
            </Box>
        </>
    );
};

export default Login;
