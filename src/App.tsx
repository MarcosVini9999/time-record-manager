import "@/resetStyles.css";
import { ThemeProvider } from "@mui/material";
import { Theme } from "@/config";
import { Router } from "@/components";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
