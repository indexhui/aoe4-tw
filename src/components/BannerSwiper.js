import { Flex, Box, Image, AspectRatio, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { polyfill, scrollIntoView } from 'seamless-scroll-polyfill';

import rookie from 'assets/images/rookie/rookieBanner.jpg';
import sloganLeftTop from 'assets/images/rookie/sloganLeftTop.png';
import sloganRightBottom from 'assets/images/rookie/sloganRightBottom.png';

const BannerSwiper = () => {
  const handleScroll = id => {
    const element = document.getElementById(id);
    polyfill();
    scrollIntoView(element, {
      behavior: 'smooth',
      // block: 'center',
      inline: 'center',
    });
  };

  const golfGradient =
    'linear-gradient(90deg,rgba(184,134,45,0),#b8862d,#ffdf91,#b8862d,rgba(184,134,45,0))';

  return (
    <Flex w="100%">
      <Swiper
        spaceBetween={50}
        slidesPerView={1.2}
        centeredSlides={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="480px"
            bgImage={`url(${rookie})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="center"
            position="relative"
            align="flex-end"
            justify="flex-start"
            p="100px"
          >
            <Image
              src={sloganLeftTop}
              position="absolute"
              top="20px"
              left="80px"
              w="280px"
            />
            <Image
              src={sloganRightBottom}
              position="absolute"
              bottom="40px"
              right="80px"
              w="600px"
            />
            <RouterLink to="game">
              <Button
                border="2px solid #244"
                bg="black"
                w="160px"
                onClick={() => handleScroll('showGame')}
              >
                了解詳情
              </Button>
            </RouterLink>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default BannerSwiper;
