import { Button, ButtonProps } from "@mui/material";
import { FC, ReactNode } from "react";

interface PontoGoButtonProps extends ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const PontoGoButton: FC<PontoGoButtonProps> = ({
  children,
  className,
  onClick,
  ...rest
}) => {
  return (
    <Button className={className} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};
