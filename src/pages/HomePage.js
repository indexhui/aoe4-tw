import { Flex, Text } from '@chakra-ui/react';
import PageMotion from 'components/PageMotion';

import BannerSwiper from 'components/BannerSwiper';
import TutorialVideo from 'components/home/TutorialVideo';
import Activity from 'components/home/Activity';

export function HomePage() {
  return (
    <PageMotion>
      <Flex
        w="100%"
        bgColor="main.500"
        // h={{ base: '340px', lg: '520px' }}
        // bgImage={`url('${aboutBg}')`}
        direction="column"
        bgPosition="top center"
        bgSize="cover"
        justify="center"
        borderBottom={{ base: '5px solid #FFDC60', lg: '10px solid #FFDC60' }}
      >
        <BannerSwiper />
        <Activity />
        <TutorialVideo />
      </Flex>
    </PageMotion>
  );
}
