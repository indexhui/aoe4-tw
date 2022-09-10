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

const learnList = [
  {
    title: '新手黃金杯',
    content: ' 四強賽將於 9/ 18 pm 8:00 正式於Twitch實況上開打',
    image: activity02,
    time: '22/09/14',
    link: 'https://challonge.com/zh_TW/yulcf4y8',
  },
  // {
  //   title: '八強表演賽',
  //   content: ' 由征服者鯨魚主講八大文明開局流程',
  //   image: learn01,
  //   time: '22/08/15',
  //   link: 'https://www.youtube.com/watch?v=9M0reyWh2v4',
  // },
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
        <Text color="gold.500" fontSize="12px" w="100%" textAlign="right">
          {time}
        </Text>
      </VStack>
    </Flex>
  );
};

const Activity = () => {
  return (
    <Container>
      <Title>最新活動</Title>
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

export default Activity;
