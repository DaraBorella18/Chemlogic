// src/components/navbar_mobile.tsx
import React from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from '../logo';

interface NavbarMobileProps {
  onTutorialClick: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ onTutorialClick }) => {
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'64px'}
        py={2}
        px={4}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex flex={1} justify={'center'}>
          <Link to="/">
            <Logo />
          </Link>
        </Flex>
        <Button onClick={onTutorialClick}>Tutorial</Button>
      </Flex>
    </Box>
  );
};

export default NavbarMobile;
