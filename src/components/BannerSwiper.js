import {
  Flex,
  Box,
  VStack,
  Image,
  AspectRatio,
  Text,
  Button,
  Link,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { polyfill, scrollIntoView } from 'seamless-scroll-polyfill';

import rookie from 'assets/images/rookie/rookieBanner.jpg';
import join from 'assets/images/joinUs.jpg';
import tutorialBg from 'assets/images/tutorialBg.jpg';
import sloganLeftTop from 'assets/images/rookie/sloganLeftTop.png';
import sloganRightBottom from 'assets/images/rookie/sloganRightBottom.png';

import { Autoplay } from 'swiper';

const handleScroll = id => {
  const element = document.getElementById(id);
  polyfill();
  scrollIntoView(element, {
    behavior: 'smooth',
    // block: 'center',
    inline: 'center',
  });
};

const Swiper01 = () => {
  return (
    <Flex
      w="100%"
      h={{ base: '200px', lg: '480px' }}
      rounded="lg"
      bgImage={`url(${rookie})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="center"
      position="relative"
      align="flex-end"
      justify="flex-start"
      p={{ base: '20px', lg: '100px' }}
    >
      <Image
        src={sloganLeftTop}
        position="absolute"
        top="20px"
        left="80px"
        w={{ base: '100px', lg: '280px' }}
      />
      <Image
        src={sloganRightBottom}
        position="absolute"
        bottom="40px"
        right="80px"
        w={{ base: '200px', lg: '600px' }}
      />
      <RouterLink to="game">
        <Button
          variant="main"
          w="160px"
          onClick={() => handleScroll('showGame')}
        >
          了解詳情
        </Button>
      </RouterLink>
    </Flex>
  );
};

const Swiper02 = () => {
  return (
    <Flex
      w="100%"
      h={{ base: '200px', lg: '480px' }}
      rounded="lg"
      bgImage={`url(${join})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="center"
      position="relative"
      align="flex-end"
      justify="flex-start"
      p={{ base: '20px', lg: '100px' }}
    >
      <VStack align="flex-start" spacing={{ base: '12px', lg: '20px' }}>
        <Text variant="goldText" fontSize={{ base: '18px', lg: '24px' }}>
          隊友在靠杯 第一屆團戰比賽
        </Text>
        <RouterLink to="game">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScvE-1XeLYaTwZnE-VdxkRHoad-a1BTUkDFd2B_3JyoefU2OQ/viewform?pli=1">
            <Button variant="main" w="160px">
              立刻報名
            </Button>
          </Link>
        </RouterLink>
      </VStack>
    </Flex>
  );
};

const Swiper03 = () => {
  return (
    <Flex
      w="100%"
      h={{ base: '200px', lg: '480px' }}
      rounded="lg"
      bgImage={`url(${tutorialBg})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="center"
      position="relative"
      align="flex-end"
      justify="flex-start"
      p={{ base: '20px', lg: '100px' }}
    >
      <VStack align="flex-start" spacing={{ base: '12px', lg: '20px' }}>
        <Text variant="goldText" fontSize={{ base: '18px', lg: '24px' }}>
          免費教學資源
        </Text>
        <Link href="https://discord.gg/XUZfGgDgjn">
          <Button variant="main" w="160px">
            加入 Discord
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
};

const BannerSwiper = () => {
  const golfGradient =
    'linear-gradient(90deg,rgba(184,134,45,0),#b8862d,#ffdf91,#b8862d,rgba(184,134,45,0))';

  return (
    <Flex w="100%">
      <Swiper
        spaceBetween={50}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <Swiper02 />
        </SwiperSlide>
        <SwiperSlide>
          <Swiper01 />
        </SwiperSlide>
        <SwiperSlide>
          <Swiper03 />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default BannerSwiper;
