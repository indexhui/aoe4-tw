import { Flex, Link } from '@chakra-ui/react';

import Container from 'components/layouts/Container';
import Title from 'components/layouts/Title';

import learn01 from 'assets/images/home/learn01.jpg';
import learn02 from 'assets/images/home/learn02.jpg';

const TutorialVideo = () => {
  return (
    <Container>
      <Title>教學影片</Title>
      <Flex w="100%">
        <Flex
          as={Link}
          href="https://www.youtube.com/watch?v=9M0reyWh2v4"
          isExternal
          w="50%"
          h="300px"
          border="1px solid #b8862d"
          rounded="md"
          bgImage={`url(${learn01})`}
          bgSize="cover"
          mr="10px"
        ></Flex>
        <Flex
          ml="10px"
          as={Link}
          href="https://www.youtube.com/watch?v=9M0reyWh2v4"
          isExternal
          w="50%"
          h="300px"
          border="1px solid #b8862d"
          rounded="md"
          bgImage={`url(${learn02})`}
          bgSize="cover"
        ></Flex>
      </Flex>
    </Container>
  );
};

export default TutorialVideo;
