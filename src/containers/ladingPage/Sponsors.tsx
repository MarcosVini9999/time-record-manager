import { Box } from "@mui/material";
import sponsorBrainny from "@/assets/icons/sponsorBrainny.svg";
import sponsorAmoPet from "@/assets/icons/sponsorAmoPet.svg";
import sponsorBus from "@/assets/icons/sponsorBus.svg";
import sponsorGoStudy from "@/assets/icons/sponsorGoStudy.svg";

export const Sponsors = () => {
  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      gap="70px"
      marginBottom="90px"
    >
      <img src={sponsorBrainny} alt="Brainny Logo" />
      <img src={sponsorAmoPet} alt="Brainny Logo" />
      <img src={sponsorBus} alt="Brainny Logo" />
      <img src={sponsorGoStudy} alt="Brainny Logo" />
    </Box>
  );
};
