import { Box, Typography } from "@mui/material";
import { ladingPageData } from "@/data/ladingPage";
import { PontoGoButton } from "@/components";
import banner from "@/assets/images/banner.png";

const styles = {
  upSectionContainer: {
    maxWidth: "1261.75px",
    marginInline: "auto",
    marginTop: "55.85px",
  },
  banner: {
    maxWidth: "703.75px",
    maxHeight: "507px",
  },
  upTtile: {
    marginBottom: "11px",
  },
  title: {
    marginBottom: "15px",
  },
  description: {
    marginBottom: "30px",
  },
};

export const UpSection = () => {
  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      flexDirection="row"
      justifyContent="center"
      alignContent="center"
      gap="38px"
      style={styles.upSectionContainer}
    >
      <Box maxWidth="520px" maxHeight="343px">
        <Typography
          variant="h5"
          color="white"
          textAlign="left"
          letterSpacing="0.165em"
          lineHeight="36px"
          fontWeight="300"
          style={styles.upTtile}
        >
          {ladingPageData.upSection.upTitle}
        </Typography>
        <Typography
          variant="h4"
          color="white"
          fontWeight="800"
          fontSize="40px"
          lineHeight="60px"
          style={styles.title}
        >
          {ladingPageData.upSection.title}{" "}
          <Typography
            variant="caption"
            color="secondary"
            fontWeight="800"
            fontSize="40px"
            lineHeight="60px"
          >
            {ladingPageData.upSection.titleSpan}
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          color="white"
          fontWeight="500"
          fontSize="18px"
          lineHeight="27px"
          style={styles.description}
        >
          {ladingPageData.upSection.description}
        </Typography>
        <PontoGoButton buttonStyle="primary">Assinar agora</PontoGoButton>
        <PontoGoButton buttonStyle="borders">Ver planos</PontoGoButton>
      </Box>
      <img src={banner} alt="Homem no cyber espaço" style={styles.banner} />
    </Box>
  );
};