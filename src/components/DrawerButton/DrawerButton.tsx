import { Colors } from "@/config";
import { Button, ButtonProps } from "@mui/material";
import { ReactNode, FC } from "react";

interface IDrawerButtonProps extends ButtonProps {
  children?: ReactNode;
  active?: boolean;
  version: "menu" | "variant";
}

export const DrawerButton: FC<IDrawerButtonProps> = ({
  children,
  active = false,
  version,
  ...rest
}) => {
  return (
    <Button
      sx={{
        height: version === "menu" ? "104px" : "40px",
        borderLeft: version === "menu" && active === true ? `4px solid ${Colors.primary}` : "",
        borderBlock: version === "menu" ? "1px solid #00000014" : "",
        borderRadius: "0px",
        color: Colors.primary,
      }}
      fullWidth
      {...rest}
    >
      {children}
    </Button>
  );
};
