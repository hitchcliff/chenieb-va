import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { Arrow, SlideItem } from './styled.components';
import { MerchSliderDataTypes } from './types';

const Container = styled(motion.div)``;

interface MerchSliderProps {
  data: MerchSliderDataTypes[];
}

export default function MerchSlider({ data }: MerchSliderProps) {
  const renderArrowPrev = (onClickHandler: any, hasPrev: boolean, label: string) => (
    <Arrow type="button" onClick={onClickHandler} left="20%" title={label} className="from-left">
      <FontAwesomeIcon icon={faAngleLeft} />
    </Arrow>
  );

  const renderArrowNext = (onClickHandler: any, hasNext: boolean, label: string) => (
    <Arrow type="button" onClick={onClickHandler} right="20%" title={label} className="from-right">
      <FontAwesomeIcon icon={faAngleRight} />
    </Arrow>
  );

  const items = data.map((item, idx) => {
    return (
      <SlideItem
        key={idx}
        className="flex justify-center items-center flex-col text-white overflow-visible"
      >
        <img src={item.img} alt={item.title} className="h-auto" style={{ width: 'auto' }} />
        <span className="text-lg mt-2 text-white ">
          <h2 className="font-bold italic text-sm md:text-xl lg:text-2xl">{item.title}</h2>
        </span>
        <span className="uppercase text-sm md:text-xl">{item.price}</span>
      </SlideItem>
    );
  });

  return (
    <Container className="flex flex-col justify-center items-center overflow-visible overscroll-none">
      <Carousel
        infiniteLoop
        swipeable
        emulateTouch
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        renderArrowNext={renderArrowNext}
        renderArrowPrev={renderArrowPrev}
      >
        {items}
      </Carousel>
    </Container>
  );
}
