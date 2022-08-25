import { Flex, Text, Box, AspectRatio } from '@chakra-ui/react';
import footer from 'assets/images/footer.jpg';

const Footer = () => {
  return (
    <Flex
      w="100%"
      h="80px"
      bgImage={`url('${footer}')`}
      bgSize="cover"
      bgPosition="center"
      align="center"
      justify="center"
    >
      <Flex w="70%" justify="flex-end">
        <Text bgGradient="linear(to-l, #ffdf91, #cda351)" bgClip="text">
          世紀帝國四 台灣最大交流群
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
