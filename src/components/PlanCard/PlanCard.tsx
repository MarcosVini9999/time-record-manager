import { Box, Typography } from "@mui/material";
import { memo } from "react";
import { PontoGoButton } from "..";
import { Colors } from "@/config";
import check from "@/assets/icons/check.svg";
import unCheck from "@/assets/icons/unCheck.svg";

interface PlanCardProps {
  data: {
    title: string;
    value: number;
    information: string;
    hasAccess: { isLocked: number; benefit: string }[];
  }[];
  dataIndex: number;
  isCenterSlide: boolean;
}

export const PlanCard = memo(({ data, dataIndex, isCenterSlide }: PlanCardProps) => {
  const { title, value, information, hasAccess } = data[dataIndex];

  return (
    <Box
      component="article"
      width="252px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="40px 38px 40px 44px"
      bgcolor={isCenterSlide ? "rgba(255, 255, 255, 0.08)" : "transparent"}
      border={`1px solid ${Colors.secondary}`}
      borderRadius="10px"
      style={
        isCenterSlide
          ? { opacity: "1", userSelect: "none", marginInline: "auto" }
          : { opacity: "0.5", userSelect: "none", marginInline: "auto" }
      }
    >
      <Typography
        variant="h6"
        color={Colors.white}
        fontWeight="400"
        fontSize="20px"
        lineHeight="30px"
        textAlign="center"
        marginBottom="4px"
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={Colors.white}
        fontWeight="800"
        fontSize="50px"
        lineHeight="75px"
        textAlign="center"
      >
        R$ {value}
      </Typography>
      <Typography
        variant="h6"
        color={Colors.secondary}
        fontWeight="24px"
        fontSize="16px"
        lineHeight="24px"
        textAlign="center"
        marginBottom="20px"
      >
        {information}
      </Typography>
      <Box gap="15px" marginBottom={isCenterSlide ? "15px" : "0px"}>
        {hasAccess.map((element, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="10px"
            marginBottom="15px"
          >
            {element.isLocked ? (
              <img src={unCheck} alt="" style={{ display: "inline-block" }} />
            ) : (
              <img src={check} alt="" style={{ display: "inline-block" }} />
            )}
            <Typography
              variant="body1"
              color={Colors.white}
              display="inline-block"
              whiteSpace="nowrap"
            >
              {element.benefit}
            </Typography>
          </Box>
        ))}
      </Box>
      {isCenterSlide ? (
        <PontoGoButton
          buttonStyle="primary"
          onClick={() => alert(`Parabéns você assinou o ${title}`)}
        >
          Assinar agora
        </PontoGoButton>
      ) : null}
    </Box>
  );
});
