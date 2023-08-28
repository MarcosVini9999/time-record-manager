import background from "@/assets/images/background.png";
import { Paper } from "@mui/material";
import { Footer, Header, PlansSection, Sponsors, UpSection } from "@/containers";

const styles = {
  paperContainer: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0px",
    borderRadius: "0px",
    minHeight: "calc(100vh)",
  },
};

export const LandingPage = () => {
  return (
    <Paper component="main" style={styles.paperContainer}>
      <Header />
      <UpSection />
      <Sponsors />
      <PlansSection />
      <Footer />
    </Paper>
  );
};
