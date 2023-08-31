import { PontoGoButton, RegisteredTime } from "@/components";
import { IUserTimes } from "@/components/Layout/Layout";
import { Colors } from "@/config";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import clock from "@/assets/icons/clock.svg";
import { gql, useMutation } from "@apollo/client";
import moment from "moment";

interface OutletContextProps {
  userTimes: IUserTimes;
  fetchData: (token: string) => IUserTimes;
}

const CreateRegisteredTime = gql`
  mutation createRegisteredTime($id: ID!) {
    createRegisteredTime(input: { data: { user: $id } }) {
      registeredTime: registeredTime {
        id
      }
    }
  }
`;

export const TimeRecordPage = () => {
  const { userTimes, fetchData }: OutletContextProps = useOutletContext();
  const [open, setOpen] = useState(false);
  const [createRegisteredTime] = useMutation(CreateRegisteredTime);
  const [userData, setUserData] = useState<IUserTimes>();

  useEffect(() => {
    setUserData(userTimes);
  }, [userTimes]);

  const clockIN = async () => {
    await createRegisteredTime({
      context: {
        headers: {
          Authorization: `Bearer ${userTimes.token}`,
        },
      },
      variables: {
        id: userTimes.userID,
      },
    });
    fetchData(userTimes.token);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <PontoGoButton
        sx={{
          backgroundColor: `${Colors.primary} !important`,
          width: "200px !important",
          marginBottom: "30px",
        }}
        onClick={handleClickOpen}
        buttonStyle="primary"
      >
        <Typography>Registrar pontos</Typography>
      </PontoGoButton>

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

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: Colors.white,
            maxWidth: "400px",
            margin: "0px",
            "& .MuiDialogTitle-root": {
              color: "#20292E",
            },
            "& .MuiDialogContentText-root": {
              color: Colors.primary,
            },
          },
        }}
      >
        <Box
          sx={{
            paddingBlock: "60px 25px",
            paddingInline: {
              sm: "45px",
              md: "92px",
            },
          }}
        >
          <Typography fontWeight="700" fontSize="20px" lineHeight="30px" textAlign="center">
            Registrar novo ponto
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <img src={clock} alt="Imagem de relógio" style={{ marginBottom: "10px" }} />
          <DialogContentText id="alert-dialog-description">
            <Typography
              fontWeight="700"
              fontSize="30px"
              lineHeight="45px"
              color={Colors.primary}
              textAlign="center"
            >
              {moment(Date.now()).locale("pt-br").format("HH:mm")}
            </Typography>
            <Typography
              fontWeight="400"
              fontSize="16px"
              lineHeight="24px"
              color={Colors.primary}
              sx={{ opacity: "50%" }}
              textAlign="center"
            >
              {moment(Date.now()).locale("pt-br").format("DD/MM/YYYY")}
            </Typography>
          </DialogContentText>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "60px",
          }}
        >
          <PontoGoButton
            onClick={clockIN}
            buttonStyle="primary"
            sx={{
              backgroundColor: `${Colors.primary} !important`,
              marginBottom: "10px",
            }}
          >
            Bater ponto
          </PontoGoButton>
          <PontoGoButton
            onClick={handleClose}
            buttonStyle="borders"
            sx={{
              border: `1px solid ${Colors.primary} !important`,
              color: `${Colors.primary} !important`,
            }}
          >
            Cancelar
          </PontoGoButton>
        </Box>
      </Dialog>
    </Fragment>
  );
};
