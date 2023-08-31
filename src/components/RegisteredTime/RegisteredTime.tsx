import { Box, Divider, Typography, BoxProps } from "@mui/material";
import { ITimes } from "../Layout/Layout";
import { FC } from "react";
import { Colors } from "@/config";
import moment from "moment";

interface IRegisteredTimeProps extends BoxProps {
  time: ITimes;
}

export const RegisteredTime: FC<IRegisteredTimeProps> = ({ time, ...rest }) => {
  return (
    <Box
      component="article"
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "15px",
        border: "1px solid #20292E4D",
      }}
      {...rest}
    >
      <Divider
        sx={{
          width: "5px",
          height: "45px",
          backgroundColor: Colors.primary,
          borderRadius: "30px",
        }}
      />
      <Box
        sx={{
          marginInline: "40px 110px",
        }}
      >
        <Typography
          fontWeight="700"
          fontSize="22px"
          lineHeight="33px"
          letterSpacing="2%"
          color="#20292E"
        >
          {time.user.name}
        </Typography>
        <Typography
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
          letterSpacing="2%"
          color="#20292E"
          sx={{ opacity: "50%" }}
        >
          {time.user.id.toString().padStart(3, "0")}
        </Typography>
      </Box>
      <Typography
        fontWeight="400"
        fontSize="22px"
        lineHeight="33px"
        letterSpacing="2%"
        color="#20292E"
        sx={{ opacity: "60%" }}
        marginRight="167px"
      >
        {moment(time.created_at).locale("pt-br").format("DD/MM/YYYY")}
      </Typography>
      <Typography
        fontWeight="400"
        fontSize="22px"
        lineHeight="33px"
        letterSpacing="2%"
        color="#20292E"
        sx={{ opacity: "60%" }}
      >
        {moment(time.created_at).locale("pt-br").format("HH:mm")}h
      </Typography>
    </Box>
  );
};
