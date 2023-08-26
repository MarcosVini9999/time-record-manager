import { Box, Typography } from "@mui/material";
import { ladingPageData } from "@/data/ladingPage";
import { PontoGoButton } from "@/components";
import banner from "@/assets/images/banner.png";

export const UpSection = () => {
  const styles = {
    upSectionContainer: {
      maxWidth: "1261.75px",
      marginInline: "auto",
    },
    banner: {
      maxWidth: "703.75px",
      maxHeight: "507px",
    },
  };

  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      flexDirection="row"
      style={styles.upSectionContainer}
    >
      <Box maxWidth="520px" maxHeight="343px">
        <Typography variant="h5">{ladingPageData.upSection.upTitle}</Typography>
        <Typography variant="h4">{ladingPageData.upSection.title}</Typography>
        <Typography variant="body1">{ladingPageData.upSection.description}</Typography>
        <PontoGoButton>Assinar agora</PontoGoButton>
        <PontoGoButton>Ver planos</PontoGoButton>
      </Box>
      <img src={banner} alt="Homem no cyber espaço" style={styles.banner} />
    </Box>
  );
};
