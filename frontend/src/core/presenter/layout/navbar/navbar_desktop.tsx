// src/components/navbar_desktop.tsx
import React from 'react';
import {
  Flex,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Logo from '../logo';

interface NavbarDesktopProps {
  onTutorialClick: () => void;
}

const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ onTutorialClick }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      bg={useColorModeValue('rgba(255, 255, 255, 0.6)', 'rgba(0, 0, 0, 0.6)')}
      color={useColorModeValue('gray.600', 'white')}
      boxShadow={'0px 2px 9px 1px rgb(57 57 57 / 20%)'}
      minH={'60px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      align={'center'}
    >
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Link to="/">
          <Logo width="128" height="20" />
        </Link>
      </Flex>

      <Stack
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'row'}
        spacing={2}
      >
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Button onClick={onTutorialClick}>Tutorial</Button>
      </Stack>
    </Flex>
  );
};

export default NavbarDesktop;
