import "@/resetStyles.css";
import { ThemeProvider } from "@mui/material";
import { Theme } from "@/config";
import { Router } from "@/components";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import { AuthProvider } from "@/context/AuthContext";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeProvider theme={Theme}>
          <Router />
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
