import React from 'react';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import Background from '@/assets/images/background.jpg';
import Waves from '@/core/presenter/layout/waves/waves';

const HomePage: React.FC = () => {
  return (
    <Box
      className={useColorModeValue('fc-white', 'fc-dark')}
      backgroundImage={Background}
      backgroundPosition="bottom"
      backgroundSize="cover"
      backgroundRepeat="repeat-x"
      display="flex"
      alignItems="flex-end"
      justifyContent="center"
      width="100%"
      height="100dvh"
      overflow="hidden"
    >
      <Waves>
        <Box
          width="100vw"
          minH='150px'
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading as="h1" size="2xl">
            
          </Heading>
          </Box>
      </Waves>
    </Box>
  );
};

export default HomePage;
