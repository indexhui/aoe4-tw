import {
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Button,
  Link,
} from '@chakra-ui/react';
import PageMotion from 'components/PageMotion';
import Container from 'components/layouts/Container';
import ScheduleRookie from 'components/ScheduleRookie';

import intro from 'assets/images/rookie/gameIntro.jpg';

export function RookiePage() {
  return (
    <PageMotion>
      <Flex
        w="100%"
        bg="main.500"
        direction="column"
        // bgImage={`url('${aboutBg}')`}
        bgPosition="top center"
        bgSize="cover"
        justify="center"
        borderBottom={{ base: '5px solid #FFDC60', lg: '10px solid #FFDC60' }}
      >
        <Container>
          <Heading
            bgGradient="linear(to-l, #ffdf91, #cda351)"
            bgClip="text"
            pb="30px"
          >
            世紀帝國四 新秀盃 (進行中)
          </Heading>
          <Flex align="center">
            <Image src={intro} />
            <VStack align="flex-start" px="24px">
              <Text>比賽週：9/14 Am 0:00 ~ 9/17 Am 0:00</Text>
              <Text>四強、冠軍賽時間：9/18 Pm 8:00</Text>
              <Text>地圖：乾燥阿拉伯</Text>
              <Text>報名即將額滿! 資格審核中</Text>
              <VStack>
                <Link isExternal href="https://challonge.com/zh_TW/yulcf4y8">
                  <Button bgGradient="linear(to-l, #ffdf91, #cda351)">
                    賽事對戰表
                  </Button>
                </Link>
              </VStack>
            </VStack>
          </Flex>
          <Text py="20px" textAlign="center" minH="30vh">
            本次比賽的初衷是希望黃金段位以下的玩家，也能體驗一下賽場的樂趣
            <br />
            我們會幫打進四強的各位，錄製一份現場轉播，並上傳Youtube、Twitch
            <br />
            希望你們會喜歡！！
          </Text>
        </Container>
      </Flex>
    </PageMotion>
  );
}
