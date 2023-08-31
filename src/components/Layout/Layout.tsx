import { Box, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Colors } from "@/config";
import { ApolloClient, InMemoryCache, createHttpLink, gql } from "@apollo/client";
import { Outlet } from "react-router-dom";
import { PontoGoDrawer } from "@/components";
import { SystemDrawer } from "@/containers";
import useAuth from "@/context/AuthContext";
import menu from "@/assets/icons/menu.svg";

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

export interface IUserTimes {
  registeredTime: ITimes[];
  token: string;
  userID: string;
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
  const drawerWidth = 180;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userTimes, setUserTimes] = useState<IUserTimes>();
  const { user } = useAuth();

  const fetchData = async (token: string) => {
    const client = createClient(token);
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

    const registeredTime: ITimes[] = await times;
    const userID: string = await myID;

    setUserTimes({ registeredTime, token, userID });

    return { registeredTime, token, userID };
  };

  useEffect(() => {
    if (userTimes !== undefined) return;

    const token = user?.jwt;

    if (!token) return;

    fetchData(token);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box display="flex">
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/*Drawer for mobile version*/}
        <PontoGoDrawer
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
          <SystemDrawer userType={user?.user?.role?.name} />
        </PontoGoDrawer>

        {/*Drawer for desktop version*/}
        <PontoGoDrawer
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
          <SystemDrawer userType={user?.user?.role?.name} />
        </PontoGoDrawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <img src={menu} alt="menu" />
        </IconButton>
        <Outlet context={{ userTimes, fetchData }} />
      </Box>
    </Box>
  );
}
