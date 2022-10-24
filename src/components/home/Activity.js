import { Link as RouterLink } from 'react-router-dom';

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

import activity01 from 'assets/images/active01.jpg';
import activity02 from 'assets/images/activity/activity02.jpg';
import activity03 from 'assets/images/activity/activity03.jpg';

const learnList = [
  {
    title: '隊友在靠杯',
    content: ' 10/23 開始報名',
    image: activity03,
    time: '22/11/19',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScvE-1XeLYaTwZnE-VdxkRHoad-a1BTUkDFd2B_3JyoefU2OQ/viewform?pli=1',
    // routerLink: '/game',
  },
  {
    title: '新手黃金杯',
    content: ' 四強賽將於 9/ 18 pm 8:00 正式於Twitch實況上開打',
    image: activity02,
    time: '22/09/14',
    // link: 'https://challonge.com/zh_TW/yulcf4y8',
    routerLink: '/game',
  },
  {
    title: '八強表演賽',
    content: '  八強表演賽 ◆ 完整版',
    image: activity01,
    time: '22/08/28',
    link: 'https://www.youtube.com/watch?v=1Wf93rzb2rs',
  },
];

const Card = props => {
  const { image, title, content, link, routerLink, time } = props;
  return (
    <Flex
      h="100%"
      as={routerLink ? RouterLink : Link}
      href={link}
      to={routerLink}
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
