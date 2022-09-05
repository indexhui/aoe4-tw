import {
  Flex,
  Text,
  Image,
  HStack,
  Icon,
  Button,
  Link,
  Heading,
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

const ScheduleRookie = () => {
  return (
    <Flex w="100%" overflowX={{ base: 'scroll', lg: 'unset' }} py="20px">
      <Container>
        <Heading pb="20px"> REGULATIONS 賽程表</Heading>
        <Flex align="center">
          <Flex w="280px" h="800px" direction="column" justify="space-between">
            <Text>十六強賽</Text>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
          </Flex>
          <Flex w="280px" h="400px" direction="column" justify="space-between">
            <Text>八強賽</Text>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
          </Flex>
          <Flex w="280px" h="280px" direction="column" justify="space-between">
            <Text>四強賽</Text>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
          </Flex>
          <Flex w="280px" direction="column" justify="space-between">
            <Text>決賽</Text>
            <VStack spacing="1px">
              <MatchBox name="TBD" state="0" point="0" />
              <MatchBox name="TBD" state="0" point="0" />
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default ScheduleRookie;
