import { Colors } from "@/config";
import { Drawer, DrawerProps } from "@mui/material";
import { FC, ReactNode } from "react";

interface IPontoGoDrawerProps extends DrawerProps {
  children?: ReactNode;
  backgroundColor?: string;
  width?: string | number;
  variant?: "permanent" | "persistent" | "temporary";
  open?: boolean;
}

export const PontoGoDrawer: FC<IPontoGoDrawerProps> = ({
  children,
  backgroundColor = Colors.white,
  width = 180,
  variant = "permanent",
  open = true,
  ...rest
}) => {
  return (
    <>
      <Drawer
        variant={variant}
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: width,
            backgroundColor: backgroundColor,
          },
        }}
        open={open}
        {...rest}
      >
        {children}
      </Drawer>
    </>
  );
};
