import { PontoGoButton } from "@/components";
import { IUserTimes } from "@/components/Layout/Layout";
import { Colors } from "@/config";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
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
    <>
      <button onClick={handleClickOpen}>Registrar ponto</button>
      {userTimes?.registeredTime
        ?.slice(0)
        .reverse()
        .map((time, index) => (
          <div key={index} style={{ border: "1px solid black" }}>
            <p>{index}</p>
            <h1>{time.id}</h1>
            <h1>{time.user.name}</h1>
            <h1>{time.created_at}</h1>
          </div>
        ))}

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
    </>
  );
};
