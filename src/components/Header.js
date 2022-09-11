import { useRef } from 'react';
import {
  Flex,
  Image,
  Link,
  Box,
  HStack,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaTwitch } from 'react-icons/fa';

import { Link as RouterLink } from 'react-router-dom';

import logo from 'assets/images/logo.png';
import joinDiscord from 'assets/images/joinDiscord.png';
import pattern from 'assets/images/pattern.png';

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        variant="outline"
        color="gold.500"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<HamburgerIcon />}
        _hover={{ bgColor: 'gold.500', color: 'black' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        bg="main.500"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody
            display="flex"
            justifyContent="center"
            alignItems="center"
            py="50px"
            bg="main.500"
          >
            <VStack>
              <Link href="https://discord.gg/XUZfGgDgjn" isExternal>
                <Image h="50px" objectFit="contain" src={joinDiscord} />
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Header = () => {
  const bgGradient = 'linear-gradient(90deg,#181c29,#394766 40%,#181c29)';
  const golfGradient =
    'linear-gradient(90deg,rgba(184,134,45,0),#b8862d,#ffdf91,#b8862d,rgba(184,134,45,0))';
  return (
    <Flex
      zIndex="10"
      top="0"
      position="sticky"
      bg={bgGradient}
      // bgImage={pattern}
      w="100%"
      justify="center"
      py="8px"
      px="24px"
    >
      <Box position="absolute" top="0" w="100%" h="2px" bg={golfGradient} />
      <Box position="absolute" bottom="0" w="100%" h="2px" bg={golfGradient} />
      <Flex
        w={{ base: '100%', lg: '75%' }}
        justify="space-between"
        align="center"
      >
        <RouterLink to="/">
          <Image
            w={{ base: '200px', lg: '240px' }}
            objectFit="contain"
            src={logo}
          />
        </RouterLink>
        <HStack display={{ base: 'none', lg: 'flex' }}>
          <HStack spacing="24px">
            <Link href="https://challonge.com/zh_CN/yulcf4y8" isExternal>
              <Text variant="goldText">新秀杯賽程表</Text>
            </Link>
            <Link href="https://www.twitch.tv/asiatwaoe4" isExternal>
              <HStack>
                <Text variant="goldText">追蹤 Twitch</Text>
                <Icon color="gold.600" as={FaTwitch} />
              </HStack>
            </Link>
          </HStack>
          <Link href="https://discord.gg/XUZfGgDgjn" isExternal>
            <Image h="50px" objectFit="contain" src={joinDiscord} />
          </Link>
        </HStack>
        <Flex display={{ base: 'flex', lg: 'none' }}>
          <Menu />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
