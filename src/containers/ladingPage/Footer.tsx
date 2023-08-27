import { Box, Typography, Divider } from "@mui/material";
import instagram from "@/assets/icons/instagram.png";
import facebook from "@/assets/icons/facebook.png";
import linkedin from "@/assets/icons/linkedin.png";
import { Colors } from "@/config";

export const Footer = () => {
  return (
    <Box component="footer">
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        padding="20px 0px 20px 0px"
        gap="60px"
        flexWrap="wrap"
        borderBottom={`1px solid ${Colors.secondary}`}
        borderTop={`1px solid ${Colors.secondary}`}
      >
        <Box>
          <Typography
            variant="caption"
            color={Colors.white}
            fontWeight="700"
            fontSize="20px"
            lineHeight="30px"
          >
            @pontogo
          </Typography>
          <Typography
            variant="body1"
            color={Colors.white}
            fontWeight="24px"
            fontSize="16px"
            lineHeight="24px"
          >
            Se conecta com a gente
          </Typography>
        </Box>
        <Box display="flex" gap="40px">
          <img src={instagram} alt="Logo do Instagram" />
          <img src={facebook} alt="Logo do Facebook" />
          <img src={linkedin} alt="Logo do Linkedin" />
        </Box>
      </Box>

      <Divider
        sx={{
          "&::before": {
            borderTop: `1px solid rgba(138, 83, 255, 0.4)`,
          },
          "&::after": {
            borderTop: `1px solid rgba(138, 83, 255, 0.4)`,
          },
          "& span": {
            paddingLeft: "30px",
            paddingRight: "30px",
          },
          paddingBlock: "60px",
        }}
      >
        <Typography
          variant="body1"
          maxWidth="292px"
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
          color={Colors.white}
        >
          PontoGo - Todos direitos reservados
        </Typography>
      </Divider>
    </Box>
  );
};
