import { Box, Link } from "@mui/material";
import { PontoGoButton } from "@/components";
import Logo from "@/assets/icons/pontoGoLogo.svg";
import { Colors } from "@/config";

const styles = {
  link: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0em",
  },
};

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
      maxWidth="1261.75px"
      marginLeft="auto"
      marginRight="auto"
      sx={{
        width: {
          sm: "350px",
          md: "860px",
          lg: "1261.75px",
        },
      }}
    >
      <img src={Logo} alt="PontoGo Logo" />
      <Box component="nav">
        <Link
          href="#inicio"
          color={Colors.white}
          style={styles.link}
          underline="hover"
          display="none"
          sx={{
            display: {
              md: "inline",
            },
          }}
        >
          Início
        </Link>
        <Link
          href="#planos"
          color={Colors.white}
          margin="0px 40px 0px 50px"
          style={styles.link}
          underline="hover"
          display="none"
          sx={{
            display: {
              md: "inline",
            },
          }}
        >
          Planos
        </Link>
        <PontoGoButton buttonStyle="secondary">Fazer login</PontoGoButton>
      </Box>
    </Box>
  );
};
