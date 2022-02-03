import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { SliderDiv } from "./embla";
import { BoxRegister } from "./styles";
import { Description, Title } from "../../sections/Register/styles";

interface BoxAdvantageProps {
  slides: RegisterSlides[],
}

interface RegisterSlides {
  title: string,
  goTo(): void,
}

export function CarouselRegister({ slides }:BoxAdvantageProps) {
  const [viewportRef, embla] = useEmblaCarousel({ dragFree: true, skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return(
    <>
      <SliderDiv>
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <BoxRegister onClick={() => {slide.goTo()}} index={index}>
                  <Title>{slide.title}</Title>
                  <Description>Cadastre-se</Description>
                </BoxRegister>
              </div>
            ))}
          </div>
        </div>
      </SliderDiv>
    </>
  );
}