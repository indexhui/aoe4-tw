import {
  Grid,
  GridItem,
  Flex,
  Link,
  AspectRatio,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

import Container from 'components/layouts/Container';
import Title from 'components/layouts/Title';

import learn01 from 'assets/images/home/learn01.jpg';
import learn02 from 'assets/images/home/learn02.jpg';

const learnList = [
  {
    title: '基礎課程教學 (-)',
    content: ' 針對完全沒有接觸過RTS的新手課程,不斷村、不斷羊，斥猴早期巡邏',
    image: learn02,
    time: '22/09/05',
    link: 'https://www.youtube.com/watch?v=wxSgWlL4Hqs',
  },
  {
    title: '全文明對戰流程教學',
    content: ' 由征服者鯨魚主講八大文明開局流程',
    image: learn01,
    time: '22/08/15',
    link: 'https://www.youtube.com/watch?v=9M0reyWh2v4',
  },
];

const Card = props => {
  const { image, title, content, link, time } = props;
  return (
    <Flex
      h="100%"
      as={Link}
      href={link}
      isExternal
      w="100%"
      border="1px solid #b8862d"
      rounded="md"
      direction="column"
      justify="space-between"
      overflow="hidden"
    >
      <AspectRatio w="100%" ratio={2 / 1}>
        <Image src={image} />
      </AspectRatio>
      <VStack w="100%" align="flex-start" p="12px">
        <Text color="gold.600">{title}</Text>
        <Text color="gold.500" fontSize="13px">
          {content}
        </Text>
      </VStack>
      <Text
        p="10px"
        color="gold.500"
        fontSize="12px"
        w="100%"
        textAlign="right"
      >
        {time}
      </Text>
    </Flex>
  );
};

const TutorialVideo = () => {
  return (
    <Container>
      <Title>教學影片</Title>
      <Grid
        w="100%"
        templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {learnList.map((item, index) => (
          <GridItem w="100%" key={item.title}>
            <Card {...item} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default TutorialVideo;
