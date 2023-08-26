import { Box } from "@mui/material";
import { PontoGoButton } from "../../components";
import Logo from "@/assets/icons/pontoGoLogo.svg";

export const Header = () => {
  return (
    <Box
      component="header"
      display="flex"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      flexWrap="wrap"
      paddingTop="48px"
      paddingLeft="120px"
      paddingRight="118px"
    >
      <img src={Logo} alt="PontoGo Logo" />
      <Box component="nav">
        <PontoGoButton>Início</PontoGoButton>
        <PontoGoButton>Planos</PontoGoButton>
        <PontoGoButton>Fazer login</PontoGoButton>
      </Box>
    </Box>
  );
};
