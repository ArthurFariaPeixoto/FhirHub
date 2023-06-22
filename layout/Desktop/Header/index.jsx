import React from "react";

import { Logo } from "components/Logo";

import { HeaderWrapper, BoxWrapper } from "./styles";
import SwitchThemeButton from "components/Buttons/SwitchThemeButton";
import LogoutButton from "../../../components/Buttons/Logout";

const Header = () => {
    return (
        <HeaderWrapper>
            <BoxWrapper>
                <Logo />
            </BoxWrapper>
            <BoxWrapper>
                <SwitchThemeButton />
                &nbsp;&nbsp;
                <LogoutButton />
            </BoxWrapper>
        </HeaderWrapper>
    );
};

export default Header;
