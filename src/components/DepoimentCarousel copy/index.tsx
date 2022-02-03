import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { colors } from "../../assets/styles/global";
import { DescriptionDepoiment, TitleDepoiment, TitleTextYellow } from "../../assets/styles/texts";
import { SliderDiv, SliderDots } from "../AdvantagesCarousel/embla";
import { ControllerButton, PaginationButton } from "../AdvantagesCarousel/styles";

interface DepoimentCarouselProps {
  slides: DepoimentSlides[],
}

interface DepoimentSlides {
  name: string,
  title: string,
  depoiment: string,
}

export function DepoimentCarousel({ slides }:DepoimentCarouselProps) {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
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
        <ControllerButton onClick={scrollPrev} enabled={prevBtnEnabled}>
          <FiChevronLeft className="icon" color={prevBtnEnabled ? colors.primaryYellow : colors.primaryGreyDark} />
        </ControllerButton>
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <div className="embla__slide__div">
                    <img
                      src={`images/depoiments/0.jpg`}
                      alt=""
                    />
                    <div className="text-box">
                      <TitleTextYellow>{slide.name}</TitleTextYellow>
                      <TitleDepoiment>{slide.title}</TitleDepoiment>
                      <DescriptionDepoiment>{slide.depoiment}</DescriptionDepoiment>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ControllerButton onClick={scrollNext} enabled={nextBtnEnabled}>
          <FiChevronRight className="icon" color={nextBtnEnabled ? colors.primaryYellow : colors.primaryGreyDark} />
        </ControllerButton>
        <SliderDots>
          {scrollSnaps.map((_, index) => (
            <PaginationButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </SliderDots>
      </SliderDiv>
    </>
  );
}