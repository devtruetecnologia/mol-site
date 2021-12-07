import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ControllerButton, PaginationButton } from './styles';
import { SliderDiv, SliderDots } from "./embla";
import { colors } from "../../assets/styles/global";
import { DescriptionCarousel, TitleCarousel } from "../../assets/styles/texts";

interface BoxAdvantageProps {
  slides: HowWorkSlides[],
}

interface HowWorkSlides {
  title: string,
  description: string,
}

export function CarouselBox({ slides }:BoxAdvantageProps) {
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
          <FiChevronLeft className="icon" color={prevBtnEnabled ? colors.primaryBlue : colors.primaryGreyLight} />
        </ControllerButton>
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <img
                    className="embla__slide__img"
                    src={`images/how-slides/${index}.jpg`}
                    alt="Como funciona?"
                  />
                </div>
                <div className="gradient">
                  <div className="number-box">
                    <p>{index + 1}</p>
                    <img src="losang-vertical.svg" alt="" />
                  </div>
                  <div className="text-box">
                    <TitleCarousel>{slide.title}</TitleCarousel>
                    <DescriptionCarousel>{slide.description}</DescriptionCarousel>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ControllerButton onClick={scrollNext} enabled={nextBtnEnabled}>
          <FiChevronRight className="icon" color={nextBtnEnabled ? colors.primaryBlue : colors.primaryGreyLight} />
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