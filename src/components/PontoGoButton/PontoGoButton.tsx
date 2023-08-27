import { Button, ButtonProps } from "@mui/material";
import { FC, ReactNode } from "react";
import { Colors } from "@/config";

interface PontoGoButtonProps extends ButtonProps {
  children?: ReactNode;
  buttonStyle: "primary" | "secondary" | "borders";
}

const styles = {
  primary: {
    color: Colors.white,
    width: "160px",
    height: "50px",
    borderRadius: "5px",
    background: Colors.secondary,
    fontSize: "16px",
    fontweight: "400",
    lineHeight: "24px",
    letterSpacing: "0em",
  },
  secondary: {
    color: Colors.primary,
    width: "160px",
    height: "50px",
    borderRadius: "5px",
    background: Colors.white,
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0em",
  },
  borders: {
    color: Colors.white,
    width: "160px",
    height: "50px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    border: `1px solid ${Colors.white}`,
  },
};

export const PontoGoButton: FC<PontoGoButtonProps> = ({ children, buttonStyle, ...rest }) => {
  return (
    <Button
      style={
        buttonStyle === "primary"
          ? styles.primary
          : buttonStyle === "secondary"
          ? styles.secondary
          : styles.borders
      }
      {...rest}
    >
      {children}
    </Button>
  );
};
