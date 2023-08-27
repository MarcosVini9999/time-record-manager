import "@/resetStyles.css";
import background from "@/assets/images/background.png";
import { Paper, ThemeProvider } from "@mui/material";
import { Footer, Header, PlansSection, Sponsors, UpSection } from "@/containers";
import { Theme } from "./config";

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

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Paper component="main" style={styles.paperContainer}>
        <Header />
        <UpSection />
        <Sponsors />
        <PlansSection />
        <Footer />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
