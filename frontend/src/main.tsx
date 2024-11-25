import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from './modules/router/routes';
import Theme from './core/presenter/theme.config';
import './main.css';
import { MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ["input/asciimath"] }
};


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <MathJaxContext config={config}>
        <RouterProvider router={router} />
      </MathJaxContext>
    </ChakraProvider>
  </React.StrictMode>,
);
