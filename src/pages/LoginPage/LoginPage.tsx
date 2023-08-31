import { PontoGoButton } from "@/components";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import pontGoLogo from "@/assets/icons/pontGoLogoPrimary.svg";
import loginBanner from "@/assets/images/loginBanner.png";
import { FormEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import useAuth, { ILogUser } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Colors } from "@/config";
import eye from "@/assets/icons/eye.svg";

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
  const { authenticate } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    if (!email && !password) return;

    let userData = {} as ILogUser;

    await login({
      variables: {
        password: password,
        identifier: email,
      },
    }).then(({ data }) => (userData = data?.login));

    if (!userData) return;

    authenticate(userData);

    if (userData.user.role.name === "admin") navigate("/dashboard");
    if (userData.user.role.name === "user") navigate("/meus-registros");
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
      <Box
        sx={{
          display: { sm: "none !important", lg: "flex !important" },
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "400px",
              xl: "585px",
            },
          }}
        >
          <img
            src={loginBanner}
            alt="Banner do login"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(194,166,251,1) 0%, rgba(255,255,255,1) 68%)",
              width: "inherit",
              marginBottom: "20px",
            }}
          />
        </Box>
        <Typography
          color={Colors.primary}
          fontWeight="700"
          fontSize="40px"
          lineHeight="60px"
          marginBottom="10px"
        >
          Bem vindo ao PontoGo
        </Typography>
        <Typography
          width="381px"
          fontWeight="400"
          fontSize="25px"
          lineHeight="37.5px"
          textAlign="center"
        >
          Aqui você fará toda gestão do seu sistema de pontos.
        </Typography>
      </Box>
      <Box>
        <img
          src={pontGoLogo}
          alt="Logo da PontGo"
          style={{
            marginBottom: "30px",
          }}
        />
        <Typography
          fontWeight="700"
          fontSize="40px"
          lineHeight="60px"
          color={Colors.primary}
          marginBottom="23px"
        >
          Faça login
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: {
              xs: "300px",
              md: "400px",
            },
          }}
        >
          <Typography color="#20292E" fontWeight="400" fontSize="20px" lineHeight="30px">
            Email
          </Typography>
          <TextField
            label="exemplo@email.com"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            sx={{
              marginBottom: "20px",
              "& .MuiFormLabel-root": {
                color: "#20292E",
                top: "-6px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #20292E4D",
                borderRadius: "5px",
              },
              "& .MuiInputLabel-shrink": {
                display: "none",
              },
              "& input": {
                height: "24px",
                paddingBlock: "10px 11px",
              },
            }}
          />
          <Typography color="#20292E" fontWeight="400" fontSize="20px" lineHeight="30px">
            Senha
          </Typography>
          <FormControl
            sx={{
              "& .MuiFormLabel-root": {
                color: "#20292E",
                top: "-6px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #20292E4D",
                borderRadius: "5px",
              },
              "& .MuiInputLabel-shrink": {
                display: "none",
              },
              "& input": {
                height: "24px",
                paddingBlock: "10px 11px",
              },
              marginBottom: "20px",
            }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">*************</InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <img src={eye} alt="Mostrar senha"></img>
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Link
            onClick={() => alert("Esqueci minha senha")}
            sx={{
              marginBottom: "30px",
              color: Colors.primary,
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "22.5px",
              ":hover": {
                cursor: "pointer",
              },
            }}
          >
            Esqueci minha senha
          </Link>
          <PontoGoButton
            buttonStyle="primary"
            type="submit"
            sx={{
              width: {
                xs: "300px !important",
                md: "400px !important",
              },
              backgroundColor: `${Colors.primary} !important`,
            }}
          >
            Entrar
          </PontoGoButton>
        </Box>
      </Box>
    </Paper>
  );
};
