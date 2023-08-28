import "@/resetStyles.css";
import { ThemeProvider } from "@mui/material";
import { Theme } from "@/config";
import { Router } from "@/components";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
