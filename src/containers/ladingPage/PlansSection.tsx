import { Carousel } from "@/components";
import { ladingPageData } from "@/data/ladingPage";
import { Box, Typography } from "@mui/material";

const styles = {
  description: {
    opacity: 0.7,
  },
};

export const PlansSection = () => {
  return (
    <Box id="planos" component="section" marginBottom="100px">
      <Box
        maxWidth="641px"
        marginLeft="auto"
        marginRight="auto"
        textAlign="center"
        marginBottom="70px"
      >
        <Typography
          variant="h4"
          fontWeight="800"
          fontSize="40px"
          lineHeight="60px"
          color="white"
          marginBottom="10px"
        >
          {ladingPageData.middleSection.title}
        </Typography>
        <Typography
          variant="body1"
          fontWeight="400"
          fontSize="20px"
          lineHeight="30px"
          color="white"
          style={styles.description}
        >
          {ladingPageData.middleSection.description}
        </Typography>
      </Box>
      <Carousel data={ladingPageData.plans} />
    </Box>
  );
};
