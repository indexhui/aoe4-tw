import {
  Flex,
  Text,
  Image,
  HStack,
  Icon,
  Button,
  Link,
} from '@chakra-ui/react';
import {
  FaRegCalendar,
  FaUserAstronaut,
  FaCrown,
  FaHorseHead,
  FaYoutube,
} from 'react-icons/fa';

import Container from 'components/layouts/Container';
import active01 from 'assets/images/active01.jpg';

const playerList = [
  {
    name: 'Whale',
    rank: '征服者二',
    civilization: '全文明精通',
  },
  {
    name: 'zZOMyGoDZz ',
    rank: '征服者一',
    civilization: '全文明精通',
  },
  {
    name: 'Hopecat',
    rank: '白金二',
    civilization: '神聖羅馬帝國',
  },
  {
    name: '小屁屁亨利',
    rank: '征服者一',
    civilization: '蒙古',
  },
  {
    name: '小祤',
    rank: '白金一',
    civilization: '全文明精通',
  },
  {
    name: 'TC',
    rank: '鑽石二',
    civilization: '神聖羅馬帝國',
  },
  {
    name: 'CongYang',
    rank: '征服者一',
    civilization: '英格蘭',
  },
  {
    name: '觸手',
    rank: '白金二',
    civilization: '阿巴斯',
  },
];

const Performance = () => {
  return (
    <Container>
      <Flex wrap="wrap" w="100%" align="center">
        <Flex w={{ base: '100%', lg: '50%' }} direction="column">
          <Text
            fontSize="22px"
            pb="10px"
            bgGradient="linear(to-l, #ffdf91, #cda351)"
            bgClip="text"
          >
            世紀帝國四 - 台灣最大交流群 - 八強表演賽
          </Text>
          <Text>高手過招，各顯神通</Text>
          <Text>群雄爭霸，風起雲湧</Text>
          <Text>快攻？！塔攻？！直城？！直帝？！</Text>
          <Text>來看世紀帝國四高手如何出招，而對手又是如何反制</Text>
          <HStack pt="12px" fontSize="18px">
            <Icon as={FaRegCalendar} />
            <Text>週六 8月27日 20:00</Text>
          </HStack>
          <HStack pt="5px" fontSize="18px">
            <Icon as={FaUserAstronaut} />
            <Text>主播賽評:</Text>
            <Link
              href="https://www.youtube.com/channel/UCa-PX2Re1YFqhkelRckugdQ"
              isExternal
            >
              <HStack px="2px" color="#ffdf91">
                <Icon as={FaYoutube} />
                <Text bgGradient="linear(to-l, #ffdf91, #cda351)" bgClip="text">
                  青銅貓
                </Text>
              </HStack>
            </Link>
            <Text>、</Text>
            <Link
              href="https://www.youtube.com/channel/UCxcrPHiG88EKV_01b_K8dYg"
              isExternal
            >
              <HStack px="2px" color="#ffdf91">
                <Icon as={FaYoutube} />
                <Text bgGradient="linear(to-l, #ffdf91, #cda351)" bgClip="text">
                  喵式
                </Text>
              </HStack>
            </Link>
          </HStack>
          <HStack py="20px">
            <Link href="https://www.twitch.tv/asiatwaoe4" isExternal>
              <Button
                _hover={{
                  color: 'black',
                  bg: 'linear-gradient(90deg,#cda351,#cda351)',
                }}
                py="8px"
                borderRadius="2px"
                h="unset"
                bg="linear-gradient(90deg,#ffdf91,#cda351)"
                color="black"
                colorScheme="blackAlpha"
                transition=".5s all"
              >
                觀看直播
              </Button>
            </Link>
          </HStack>
        </Flex>
        <Flex w={{ base: '100%', lg: '50%' }}>
          <Image src={active01} />
        </Flex>
      </Flex>
      <Flex pt="32px" pb="20px">
        參賽選手
      </Flex>
      <Flex wrap="wrap" justify="space-between" maxW="980px">
        {playerList.map((item, index) => (
          <Flex
            key={item.name}
            w={{ base: '100%', md: '50%', lg: '25%' }}
            pb="20px"
            px="10px"
          >
            <Flex
              w="100%"
              border="1px solid #ffffff90"
              bg="#ffffff10"
              p="14px"
              rounded="md"
              direction="column"
            >
              <Text
                fontSize="20px"
                pb="8px"
                bgGradient="linear(to-l, #ffdf91, #cda351)"
                bgClip="text"
              >
                {item.name}
              </Text>
              <Flex justify="space-between">
                <HStack spacing="4px">
                  <Icon as={FaCrown} />
                  <Text>{item.rank}</Text>
                </HStack>
                <HStack spacing="4px">
                  <Icon as={FaHorseHead} />
                  <Text>{item.civilization}</Text>
                </HStack>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

export default Performance;
