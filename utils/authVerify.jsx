import Router from "next/router";

const authVerify = () => {
    const login = localStorage.getItem("fhir" + "logou");
    const cadastrado = localStorage.getItem("fhir" + "cadastro");


    if (login && cadastrado) {
        Router.push("/");
    } else {
        Router.push("/login");
    }
};

export default authVerify;
