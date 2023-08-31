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
            "& .MuiDialogTitle-root": {
              color: "#20292E",
            },
            "& .MuiDialogContentText-root": {
              color: Colors.primary,
            },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">Registrar novo ponto</DialogTitle>
        <DialogContent>
          <img src={clock} alt="Imagem de relógio" />
          <DialogContentText id="alert-dialog-description">{Date()}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <PontoGoButton onClick={clockIN} buttonStyle="primary">
            Bater ponto
          </PontoGoButton>
          <PontoGoButton onClick={handleClose} buttonStyle="secondary">
            Cancelar
          </PontoGoButton>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
