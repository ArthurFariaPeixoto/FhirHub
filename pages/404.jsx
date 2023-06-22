import Link from "next/link";
import { useTheme } from "@emotion/react";

const ErrorPage = () => {
    const theme = useTheme();

    return (
        <div>
            <span style={{ color: theme.palette.text.main }}>
                <h1>Ops! Algo deu errado.</h1>
                <p>A p&aacute;gina que voc&ecirc; est&aacute; tentando acessar n&atilde;o existe ou n&atilde;o pode ser acessada no momento.</p>
                <br />
            </span>
        </div>
    );
};

export default ErrorPage;
