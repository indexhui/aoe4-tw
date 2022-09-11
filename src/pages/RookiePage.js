import {
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Button,
  Link,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import PageMotion from 'components/PageMotion';
import Container from 'components/layouts/Container';
import ScheduleRookie from 'components/ScheduleRookie';
import GameReview from 'components/rookie/GameReview';

import intro from 'assets/images/rookie/gameIntro.jpg';

const RuleModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant="main" onClick={onOpen}>
        賽事規章
      </Button>

      <Modal
        scrollBehavior="inside"
        size="md"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(20deg)"
        />
        <ModalContent bg="main.500">
          <ModalHeader color="gold.600">賽事規則</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="20px">
            <VStack>
              <Text variant="goldText" fontWeight="bold">
                9/7~ 9/17 期間皆可進行私下對戰
              </Text>
              <Text>
                因為報名人員已全部都在DC群內，請加對手好友 & 進行比賽
                並在比賽完成後，打開對戰紀錄並告知青銅貓、喵式、ImReady 或鯨魚
                我們將會記錄下兩人的勝敗場紀錄
              </Text>
              <Text>
                私下對戰打到四強即可
                <br />
                四強賽將於 9/ 18 pm 8:00 正式於Twitch實況上開打
              </Text>
              <Text>對戰地圖限定：乾燥阿拉伯 (預設、禁MOD)</Text>
              <Text>
                本活動其他詳情將於DC群另行公告
                <br />
                (因為我還有很多沒想到，應該會陸續補充吧) <br />
                備註：進入四強賽的選手，會有賽後訪問唷，可以提早準備獲勝感言
                <br />
              </Text>
              <Text>
                220906 特殊情況更新：
                <br />
                選手畢竟都是認識的，你們要對練可以，但請不要打乾燥阿拉伯，很容易後續起爭議
                <br />
                阿如果你們後續起了爭議，一方說這場是對練、一方說正式，那一律已9/7以後找到的雙方的第一場乾燥阿拉伯為主，不過這場比賽也沒獎金，我覺得應該是我瞎操心啦
              </Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export function RookiePage() {
  return (
    <PageMotion>
      <Flex
        w="100%"
        justify="center"
        align="center"
        bg="main.500"
        direction="column"
        borderLeft="1px solid #cda35144"
        borderRight="1px solid #cda35144"
      >
        <Flex
          py={{ base: '20px', lg: '32px' }}
          direction="column"
          justify="center"
          align="center"
          px="24px"
          w={{ base: '100%', lg: '75%', xl: '72%' }}
          borderLeft="1px solid #cda35144"
          borderRight="1px solid #cda35144"
        >
          <Heading
            bgGradient="linear(to-l, #ffdf91, #cda351)"
            bgClip="text"
            pb="30px"
          >
            新秀黃金盃 ( 進行中 )
          </Heading>
          <Flex wrap="wrap" align="center" justify="space-around">
            <Image w={{ base: '100%', lg: '40%' }} maxW="300px" src={intro} />
            <VStack w={{ base: '100%', lg: '58%' }} align="flex-start" p="24px">
              <Text>比賽週：9/14 Am 0:00 ~ 9/17 Am 0:00</Text>
              <Text>四強、冠軍賽時間：9/18 Pm 8:00</Text>
              <Text>地圖：乾燥阿拉伯</Text>
              <Text>報名額滿! 賽事進行中</Text>
              <HStack>
                <Link isExternal href="https://challonge.com/zh_TW/yulcf4y8">
                  <Button variant="main">賽事對戰表</Button>
                </Link>
                <RuleModal />
              </HStack>
            </VStack>
          </Flex>
          <Text py="20px" textAlign="center">
            本次比賽的初衷是希望黃金段位以下的玩家，也能體驗一下賽場的樂趣
            <br />
            我們會幫打進四強的各位，錄製一份現場轉播，並上傳Youtube、Twitch
            <br />
            希望你們會喜歡！！
          </Text>
          <Flex w="100%">
            <AspectRatio w="100%" ratio={13 / 6}>
              <iframe
                title="game"
                src="https://challonge.com/zh_TW/yulcf4y8/module"
                // width="100%"
                // height="500"
                frameBorder="0"
                scrolling="auto"
              ></iframe>
            </AspectRatio>
          </Flex>
          <GameReview />
        </Flex>
      </Flex>
    </PageMotion>
  );
}
