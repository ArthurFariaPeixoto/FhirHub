import Router from "next/router";

const authVerify = () => {
    const login = localStorage.getItem("fhir" + "logou");

    if (login) {
        Router.push("/");
    } else {
        Router.push("/login");
    }
};

export default authVerify;
