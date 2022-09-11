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

import activity01 from 'assets/images/home/learn01.jpg';
import activity02 from 'assets/images/activity/activity02.jpg';
import game10 from 'assets/images/rookie/game10.jpg';
import game5 from 'assets/images/rookie/game5.jpg';
import game08 from 'assets/images/rookie/game08.jpg';

const reviewList = [
  {
    title: 'No.10 新秀盃16強 神羅 vs 英國',
    content: '參賽選手: 呆呆 vs asd 546',
    image: game10,
    time: '22/09/12',
    link: 'https://www.youtube.com/watch?v=i7LwqQpDbSc',
  },
  {
    title: 'No.5 新秀盃16強 法國 vs 英國',
    content: '參賽選手: 阿峰 vs AAA',
    image: game5,
    time: '22/09/11',
    link: 'https://www.youtube.com/watch?v=aMmC9xTnjQ8',
  },
  {
    title: 'No.8 新秀盃16強 法國 vs 英國',
    content: '參賽選手: 神奇海駝 vs 政客莉波',
    image: game08,
    time: '22/09/11',
    link: 'https://www.youtube.com/watch?v=QZFRYXA-5f8',
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
      <AspectRatio w="100%" ratio={5 / 3}>
        <Image src={image} />
      </AspectRatio>
      <VStack w="100%" align="flex-start" p="12px">
        <Text color="gold.600">{title}</Text>
        <Text color="gold.500" fontSize="13px">
          {content}
        </Text>
        <Text color="gold.500" fontSize="12px" w="100%" textAlign="right">
          {time}
        </Text>
      </VStack>
    </Flex>
  );
};

const GameReview = () => {
  return (
    <Flex direction="column" w="100%" pt="40px" justify="center" align="center">
      <Title>精彩回顧</Title>
      <Grid
        w="100%"
        templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {reviewList.map((item, index) => (
          <GridItem w="100%" key={item.title}>
            <Card {...item} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default GameReview;
