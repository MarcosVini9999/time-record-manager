import { RegisteredTime } from "@/components";
import { IUserTimes } from "@/components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

interface OutletContextProps {
  userTimes: IUserTimes;
  fetchData: (token: string) => IUserTimes;
}

export const DashboardPage = () => {
  const { userTimes }: OutletContextProps = useOutletContext();
  const [userData, setUserData] = useState<IUserTimes>();

  useEffect(() => {
    setUserData(userTimes);
  }, [userTimes]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography fontWeight="600" fontSize="22px" lineHeight="33px" marginRight="164px">
          Colaborador
        </Typography>
        <Typography
          fontWeight="600"
          fontSize="22px"
          lineHeight="33px"
          width="147px"
          marginRight="110px"
        >
          Data
        </Typography>
        <Typography fontWeight="600" fontSize="22px" lineHeight="33px">
          Hora
        </Typography>
      </Box>
      {userData?.registeredTime
        ?.slice(0)
        .reverse()
        .map((time, index) => (
          <RegisteredTime key={index} time={time} marginBottom="15px" />
        ))}
    </Box>
  );
};
