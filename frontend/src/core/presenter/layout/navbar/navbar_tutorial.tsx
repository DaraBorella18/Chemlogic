// src/components/navbar_tutorial.tsx
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  UseDisclosureProps,
  ModalHeader,
  ModalFooter,
  Card,
} from '@chakra-ui/react';
import tutorial from '@/assets/videos/tutorial.mp4';
import tutorialPdf from '@/assets/documents/tutorial.pdf';
import { DownloadIcon } from '@chakra-ui/icons';

const NavbarTutorial: React.FC<UseDisclosureProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Tutorial
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <video width="100%" controls autoPlay>
              <source src={tutorial} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ModalBody>
          <ModalFooter>
            <Card p={1} px={6} variant={'outline'}>
                <a href={tutorialPdf}>
                    Versão em PDF do tutorial
                    <DownloadIcon ml={2}/>
                </a>
            </Card>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NavbarTutorial;
