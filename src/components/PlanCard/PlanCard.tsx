import { Box } from "@mui/material";
import { FC } from "react";
import { PontoGoButton } from "..";

interface BenefitProps {
  isLocked: number;
  benefit: string;
}

interface PlanCardProps {
  planTitle: string;
  value: number;
  information: string;
  permissions: Array<BenefitProps>;
  className?: string;
  onClick?: () => void;
}

export const PlanCard: FC<PlanCardProps> = ({
  planTitle,
  value,
  information,
  permissions,
  className,
  onClick,
}) => {
  return (
    <Box component="article" className={className}>
      <h1>{planTitle}</h1>
      <h1>{value}</h1>
      <h1>{information}</h1>
      {permissions.map((element) => (
        <p>{element.benefit}</p>
      ))}
      <PontoGoButton onClick={onClick} buttonStyle="primary">
        Assinar agora
      </PontoGoButton>
    </Box>
  );
};
