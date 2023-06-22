import { Box, styled } from "@mui/material";

const HeaderWrapper = styled(Box)(({ theme }) => ({
    height: "8%",
    // color: theme.header.textColor,
    //padding: theme.spacing(0, 2),
    top: 0,
    right: 0,
    backgroundColor: theme.palette.background.default,
    zIndex: 999,
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // left: "0.9rem",
    boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
}));

const BoxWrapper = styled(Box)(({ themme }) => ({
    display: "flex",
    alignItems: "center",
    paddingLeft: "1%",
    paddingRight: "2.7rem",
}));

export { HeaderWrapper, BoxWrapper };
