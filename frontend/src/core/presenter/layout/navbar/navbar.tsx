// src/components/navbar.tsx
import React from 'react';
import { Box, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import NavbarDesktop from './navbar_desktop';
import NavbarMobile from './navbar_mobile';
import NavbarTutorial from './navbar_tutorial';

const Navbar: React.FC = () => {
  const usingMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return <Box zIndex={10} position={"relative"} w={"100%"}>
    <NavbarTutorial onClose={onClose} isOpen={isOpen}/>
    {usingMobile ? <NavbarMobile onTutorialClick={onOpen} /> : <NavbarDesktop onTutorialClick={onOpen} />}
  </Box>;
};

export default Navbar;
