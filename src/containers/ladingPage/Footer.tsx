import { Box, Typography } from "@mui/material";
import instagram from "@/assets/icons/instagram.png";
import facebook from "@/assets/icons/facebook.png";
import linkedin from "@/assets/icons/linkedin.png";

export const Footer = () => {
  return (
    <footer>
      <Box>
        <Typography>@pontogo</Typography>
        <Typography>Se conecta com a gente</Typography>
        <Box>
          <img src={instagram} alt="Logo do Instagram" />
          <img src={facebook} alt="Logo do Facebook" />
          <img src={linkedin} alt="Logo do Linkedin" />
        </Box>
      </Box>
      <Typography>PontoGo - Todos direitos reservados</Typography>
    </footer>
  );
};
