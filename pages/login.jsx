import React from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormContainer, PasswordElement, TextFieldElement } from "react-hook-form-mui";
import login from "../services/auth/login";
import { useRouter } from "next/router";
import { useAlertModal } from "../hooks/useSweetAlert";
import Link from "components/Link";
// import { Preferences } from "@capacitor/preferences";

const Login = () => {
    const router = useRouter();
    const { createModal } = useAlertModal();

    const schema = yup.object().shape({
        login: yup.string().required("Login é obrigatório"),
        senha: yup.string().required("Senha é obrigatória"),
    });


    const handleSubmit = (FormData) => {
        const input = login(FormData);
        if(input === true){
            localStorage.setItem("fhir" + "logou", true);
            localStorage.setItem("fhir" + "cadastro", true);
            router.push("/");
        }else{
            createModal("error", { showConfirmButton: false, timer: 1700, html: "Ocorreu um erro ao realizar o login, verifique seus dados" });
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
                <Container maxWidth="xs" sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                    <FormContainer resolver={yupResolver(schema)} onSuccess={(FormData) => handleSubmit(FormData)} defaultValues={{"login":"Ana", "senha":"senha"}}>
                        <Grid container justifyContent="center" alignItems="center" sx={{ py: 2, pb: 3, borderRadius: "8px", backgroundColor: "rgba(250, 250, 250, 0.88)" }}>
                            <Grid item xs={12} sx={{ textAlign: "center", color: "black" }}>
                                <h2>Login</h2>
                            </Grid>
                            <Grid item xs={9} sx={{ mt: 3 }}>
                                <TextFieldElement fullWidth label="Login" name="login" placeholder="Ana"/>
                            </Grid>
                            <Grid item xs={9} sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                                <PasswordElement fullWidth label="Senha" name="senha" placeholder="senha"/>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                <Button type="submit" variant="contained">
                                    Entrar
                                </Button>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                                <Link href="/cadastro" style={{ fontSize:"15px" }}>N&atilde;o possui cadastro?</Link>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                                <Link href="/cadastro" style={{ fontSize:"15px" }}>Esqueci minha senha</Link>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                                <Button  size="medium" variant="contained">
                                    Entrar com Facebook
                                </Button>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                                <Button variant="contained" size="medium" color="error" >
                                    Entrar com Google
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
