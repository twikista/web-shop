import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { sliderData } from "../../data/slideData";

import {
  Container,
  Image,
  SlidesWrapper,
  Slide,
  Left,
  Right,
  Title,
  Description,
  ArrowWrapper,
  Indicator,
  SliderIndicator,
  HeroTextRight,
  HeroTextLeft,
} from "./Home.styles";
import { Button } from "../../components/ActionButton/ActionButton.styles";

export const Home = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const slideHandler = (direction: string): void => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : sliderData.length - 1);
    } else {
      setSliderIndex(sliderIndex < sliderData.length - 1 ? sliderIndex + 1 : 0);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((sliderIndex) =>
        sliderIndex < sliderData.length - 1 ? sliderIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderIndex]);

  return (
    <Container>
      <ArrowWrapper direction="left" onClick={() => slideHandler("left")}>
        <FaArrowLeft />
      </ArrowWrapper>
      <SlidesWrapper sliderIndex={sliderIndex}>
        {sliderData.map((item) => (
          <Slide key={item.id}>
            <Left bgUrl={item.image}>
              <Image src={item.image} alt={item.alt} />
              <HeroTextLeft>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button as={Link} to={"/products/all"}>
                  Shop Now
                </Button>
              </HeroTextLeft>
            </Left>
            <Right>
              <HeroTextRight>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button as={Link} to={"/products/all"}>
                  Shop Now
                </Button>
              </HeroTextRight>
            </Right>
          </Slide>
        ))}
      </SlidesWrapper>
      <ArrowWrapper direction="right" onClick={() => slideHandler("right")}>
        <FaArrowRight />
      </ArrowWrapper>
      <Indicator>
        {sliderData.map((item, index) => (
          <SliderIndicator
            key={item.id}
            isActive={index === sliderIndex}
            onClick={() => setSliderIndex(index)}
          />
        ))}
      </Indicator>
    </Container>
  );
};
