import React from 'react'
import useThemeStore from '../../stores/useThemeStore';
import { IconButton } from '@mui/material';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function SwitchThemeButton() {
    const { theme, setTheme } = useThemeStore();

    const handleThemeChange = () => {
        let newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };
    return (
        <IconButton onClick={handleThemeChange}>{theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>
    )
}

export default SwitchThemeButton
