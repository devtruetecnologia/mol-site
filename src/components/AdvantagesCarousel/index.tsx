import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PaginationButton } from './styles';
import { SliderDiv, SliderDots } from "./embla";
import { colors } from "../../assets/styles/global";
import { DescriptionDepoiment, TitleDepoiment, TitleTextYellow } from "../../assets/styles/texts";
import { BoxAdvantage } from "../BoxAdvantage";

interface AdvantagesCarouselProps {
  slides: AdvantagesSlides[],
}

interface AdvantagesSlides {
  title: string,
  description: string,
  image: string,
  mockup: boolean,
  direction: 'right' | 'left',
}

export function AdvantagesCarousel({ slides }:AdvantagesCarouselProps) {
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
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <BoxAdvantage boxProps={slide} />
                </div>
              </div>
            ))}
          </div>
        </div>
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