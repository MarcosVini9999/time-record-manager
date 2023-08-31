import { Fragment, FC } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { DrawerButton } from "@/components";
import useAuth, { UserTypes } from "@/context/AuthContext";
import pontGoLogo from "@/assets/icons/pontGoLogoPrimary.svg";
import note from "@/assets/icons/note.svg";
import logoutImg from "@/assets/icons/logout.svg";
import dashboard from "@/assets/icons/dashboard.svg";

interface ISystemDrawerProps {
  userType: UserTypes;
}

export const SystemDrawer: FC<ISystemDrawerProps> = ({ userType }) => {
  const { logout } = useAuth();

  const data =
    userType == "user" ? (
      <Typography
        fontWeight="400"
        fontSize="14px"
        lineHeight="21px"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img src={note} alt="Meus registros" />
        Meus registros
      </Typography>
    ) : (
      <Typography
        fontWeight="400"
        fontSize="14px"
        lineHeight="21px"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img src={dashboard} alt="dashboard" />
        Dashboard
      </Typography>
    );

  return (
    <Fragment>
      <List
        disablePadding
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img
            src={pontGoLogo}
            alt="Logo da PontoGO"
            width="134px"
            height="31.17px"
            style={{
              padding: "40px 22px 31px 23px",
            }}
          />
          <ListItem disablePadding>
            <DrawerButton version="menu" active>
              {data}
            </DrawerButton>
          </ListItem>
        </Box>
        <ListItem disablePadding>
          <DrawerButton
            onClick={logout}
            version="variant"
            sx={{
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <img src={logoutImg} alt="Fazer logout" />
              Sair
            </Typography>
          </DrawerButton>
        </ListItem>
      </List>
    </Fragment>
  );
};