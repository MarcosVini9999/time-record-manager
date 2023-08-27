import { FC, Fragment, useRef, useEffect } from "react";
import { StackedCarousel, ResponsiveContainer } from "react-stacked-center-carousel";
import { Box } from "@mui/material";
import { PlanCard } from "@/components";
import rightArrow from "@/assets/icons/rightArrow.svg";
import leftArrow from "@/assets/icons/leftArrow.svg";

interface CarouselProps {
  data: {
    title: string;
    value: number;
    information: string;
    hasAccess: { isLocked: number; benefit: string }[];
  }[];
}

export const Carousel: FC<CarouselProps> = ({ data }) => {
  const ref = useRef<any>();

  useEffect(() => {
    setInterval(() => ref.current?.goNext(), 4000);
  }, []);

  return (
    <Box maxWidth="1261.75px" position="relative" marginLeft="auto" marginRight="auto">
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 3;
          if (parentWidth <= 960) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={PlanCard}
              slideWidth={333}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={3}
              useGrabCursor
            />
          );
        }}
      />
      <Fragment>
        <img
          style={{ position: "absolute", top: "40%", left: 10, zIndex: 10, cursor: "pointer" }}
          src={leftArrow}
          alt="Seta para a direita do carousel"
          onClick={() => {
            ref.current?.goBack();
          }}
        />

        <img
          style={{ position: "absolute", top: "40%", right: 10, zIndex: 10, cursor: "pointer" }}
          src={rightArrow}
          alt="Seta para a esquerda do carousel"
          onClick={() => {
            ref.current?.goNext(6);
          }}
        />
      </Fragment>
    </Box>
  );
};
