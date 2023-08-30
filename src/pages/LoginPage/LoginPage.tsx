import { PontoGoButton } from "@/components";
import { Box, Link, Paper, TextField, Typography } from "@mui/material";
import pontGoLogo from "@/assets/icons/pontGoLogoPrimary.svg";
import loginBanner from "@/assets/images/loginBanner.png";
import { FormEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import useAuth from "@/context/AuthContext";

const LOGIN = gql`
  mutation ($password: String!, $identifier: String!) {
    login(input: { password: $password, identifier: $identifier }) {
      jwt
      user: user {
        id
        username
        email
        role: role {
          id
          name
        }
      }
    }
  }
`;

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useMutation(LOGIN);
  const { authenticate, user } = useAuth();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    if (!email && !password) return;

    let userData = {} as any;

    await login({
      variables: {
        password: password,
        identifier: email,
      },
    }).then(({ data }) => (userData = data?.login));

    if (!userData) return;

    authenticate(userData);
    console.log(user);
  };

  return (
    <Paper
      component="main"
      style={{
        margin: "0px",
        borderRadius: "0px",
        minHeight: "calc(100vh)",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "150px",
      }}
    >
      <Box>
        <img
          src={loginBanner}
          alt="Banner do login"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(194,166,251,1) 0%, rgba(255,255,255,1) 68%)",
          }}
        />
        <Typography>Bem vindo ao PontoGo</Typography>
        <Typography>Aqui você fará toda gestão do seu sistema de pontos.</Typography>
      </Box>
      <Box>
        <img src={pontGoLogo} alt="Logo da PontGo" />
        <Typography>Faça login</Typography>
        <form onSubmit={handleLogin}>
          <Typography>Email</Typography>
          <TextField
            label="exemplo@email.com"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></TextField>
          <Typography>Senha</Typography>
          <TextField
            label="*************"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            autoComplete="current-password"
          ></TextField>
          <Link onClick={() => alert("Esqueci minha senha")}>Esqueci minha senha</Link>
          <PontoGoButton buttonStyle="primary" type="submit">
            Entrar
          </PontoGoButton>
        </form>
      </Box>
    </Paper>
  );
};
