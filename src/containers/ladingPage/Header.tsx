import { Box, Link } from "@mui/material";
import { PontoGoButton } from "../../components";
import Logo from "@/assets/icons/pontoGoLogo.svg";
import { Colors } from "@/config";

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
        <Link color={Colors.white}>Início</Link>
        <Link color={Colors.white}>Planos</Link>
        <PontoGoButton buttonStyle="secondary">Fazer login</PontoGoButton>
      </Box>
    </Box>
  );
};
