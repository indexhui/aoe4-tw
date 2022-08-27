import {
  Flex,
  Text,
  Box,
  AspectRatio,
  Heading,
  VStack,
  HStack,
  Image,
  Icon,
} from '@chakra-ui/react';
import {
  FaRegCalendar,
  FaUserAstronaut,
  FaCrown,
  FaHorseHead,
  FaYoutube,
} from 'react-icons/fa';

import Container from 'components/layouts/Container';
import class02 from 'assets/images/class02.jpg';

const Learn = () => {
  const golfGradient =
    'linear-gradient(90deg,rgba(184,134,45,0),#b8862d,#ffdf91,#b8862d,rgba(184,134,45,0))';
  return (
    <Container>
      <Flex h="32px" w="70%" position="relative" align="center" mb="32px">
        <Box w="100%" h="1px" bg={golfGradient} />
        <Flex
          w="200px"
          h="32px"
          bg="main.500"
          position="absolute"
          margin="0 auto"
          left="0"
          right="0"
          top="0"
          justify="center"
          align="center"
        >
          <Text
            fontSize="20px"
            letterSpacing="0.2em"
            bgGradient="linear(to-l, #ffdf91, #cda351)"
            bgClip="text"
          >
            免費教學預告
          </Text>
        </Flex>
      </Flex>
      <Flex w="100%" wrap="wrap" align="center">
        <VStack
          w={{ base: '100%', lg: '50%' }}
          align="flex-start"
          spacing="7px"
          pb="12px"
        >
          <Heading fontSize="20px">基礎課程教學</Heading>
          <HStack pt="12px" fontSize="18px">
            <Icon as={FaRegCalendar} />
            <Text>週六 9月3日 20:00</Text>
          </HStack>
          <HStack fontSize="18px">
            <Icon as={FaUserAstronaut} />
            <Text>講師 Hopecat</Text>
          </HStack>
          <VStack spacing="5px" fontSize="16px" align="flex-start">
            <Text>課程內容</Text>
            <Text>不斷村、不斷羊、斥猴早期偵查</Text>
            <Text>快捷鍵編隊運用</Text>
            <Text>地板、控兵基本操作、早期兵種選擇</Text>
          </VStack>
        </VStack>
        <Flex w={{ base: '100%', lg: '50%' }}>
          <Image src={class02} maxH="320px" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Learn;
