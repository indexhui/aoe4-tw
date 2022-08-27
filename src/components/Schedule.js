import {
  Flex,
  Text,
  Image,
  HStack,
  Icon,
  Button,
  Link,
  VStack,
  Box,
} from '@chakra-ui/react';

import Container from 'components/layouts/Container';

const Label = ({ state }) => {
  let color = '#E3E3E3';
  if (state === '1') {
    color = '#CDA351';
  } else if (state === '2') {
    color = '#2F2F2F';
  } else {
    color = '#E3E3E3';
  }

  return (
    <Box
      bgColor={color}
      position="absolute"
      h="100%"
      w="5px"
      left="0"
      top="0"
    />
  );
};

const MatchBox = props => {
  const { state, name, point } = props;
  return (
    <Flex bg="black" h="40px" w="200px" position="relative" align="center">
      <Label state={state} />
      <Text pl="20px">{name || 'TBD'}</Text>
      <Flex w="24px" position="absolute" right="0" color="gray.500">
        <Text>{point || '-'}</Text>
      </Flex>
    </Flex>
  );
};

const Schedule = () => {
  return (
    <Flex
      bg="#0F1519"
      w="100%"
      overflowX={{ base: 'scroll', lg: 'unset' }}
      py="20px"
    >
      <Container>
        <Text pb="20px">賽程</Text>
        <Flex align="center">
          <Flex w="280px" h="400px" direction="column" justify="space-between">
            <Text>八強賽</Text>
            <VStack spacing="1px">
              <MatchBox name="Whale" state="1" point="1" />
              <MatchBox name="小祤" state="2" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="Hopecat" state="1" point="1" />
              <MatchBox name="觸手" state="2" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="CongYang" state="2" point="0" />
              <MatchBox name="zZOMyGoDZz" state="1" point="1" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="小屁屁亨利" state="1" point="1" />
              <MatchBox name="TC" state="2" point="0" />
            </VStack>
          </Flex>
          <Flex w="280px" h="280px" direction="column" justify="space-between">
            <Text>四強賽</Text>
            <VStack spacing="1px">
              <MatchBox name="Whale" state="1" point="1" />
              <MatchBox name="Hopecat" state="2" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="zZOMyGoDZz" state="1" point="1" />
              <MatchBox name="小屁屁亨利" state="2" point="0" />
            </VStack>
          </Flex>
          <Flex w="280px" direction="column" justify="space-between">
            <Text>決賽</Text>
            <VStack spacing="1px">
              <MatchBox name="Whale" state="0" />
              <MatchBox name="小屁屁亨利" state="0" />
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Schedule;
