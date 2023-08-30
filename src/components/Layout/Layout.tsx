import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Colors } from "@/config";
import pontGoLogo from "@/assets/icons/pontGoLogoPrimary.svg";
import { ApolloClient, InMemoryCache, createHttpLink, gql } from "@apollo/client";
import useAuth from "@/context/AuthContext";
import { Outlet } from "react-router-dom";

const drawerWidth = 180;

export interface ITimes {
  id: string;
  created_at: string;
  user: {
    name: string;
    id: string;
  };
}

interface ILayoutProps {
  window?: () => Window;
}

const createClient = (token: string) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: "http://test.frontend.api.brainny.cc/graphql",
      headers: {
        cookie: token,
      },
    }),
    cache: new InMemoryCache(),
  });

  return client;
};

export function Layout(props: ILayoutProps) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [myID, setMyID] = useState<any>();
  const [registeredTimes, setRegisteredTimes] = useState<ITimes[]>();
  const { user } = useAuth();

  useEffect(() => {
    if (registeredTimes !== undefined) return;

    const token = user?.jwt;

    if (!token) return;

    const client = createClient(token);

    const fetchData = async () => {
      let myID;
      let times;
      try {
        const { data } = await client.query({
          query: gql`
            query GetMe {
              me {
                id
              }
            }
          `,
          context: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        });

        myID = data.me.id;
      } catch (error) {
        console.log(error);
      }

      try {
        const { data } = await client.query({
          query: gql`
            query GetMyRegisteredTimes($id: String!) {
              registeredTimes(where: { user: { id: $id } }) {
                user: user {
                  name
                  id
                }
                created_at
                id
              }
            }
          `,
          context: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          variables: {
            id: myID,
          },
        });

        times = data?.registeredTimes;
      } catch (error) {
        console.log(error);
      }

      setRegisteredTimes(await times);

      return times;
    };

    fetchData();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Fragment>
      <List>
        <img src={pontGoLogo} alt="Logo da PontoGO" width="134px" height="31.17px" />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Sair"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Fragment>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box display="flex">
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          MENU
        </IconButton>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/*Drawer for mobile version*/}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: Colors.white,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/*Drawer for desktop version*/}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: Colors.white,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Outlet context={registeredTimes} />
      </Box>
    </Box>
  );
}
