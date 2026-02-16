import React from "react";

// Dichiarazione locale (senza declare global se siamo in un modulo)
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          navigation?: string | boolean;
          pagination?: string | boolean;
          "slides-per-view"?: string | number;
          "space-between"?: string | number;
        },
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default function BentoSlider() {
  return (
    <swiper-container
      navigation="true"
      pagination="true"
      slides-per-view="1"
      space-between="20"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  );
}
