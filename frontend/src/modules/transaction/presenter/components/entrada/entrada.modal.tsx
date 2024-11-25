// EntradaModal.tsx
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Card,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useEntradaModal } from './entrada_modal.provider';
import { For } from '@/modules/shared/components/for';

const EntradaModal: React.FC = () => {
  const { isOpen, closeModal, modalData } = useEntradaModal();

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent maxW={useBreakpointValue({ base: '100%', md: '50dvw' })}>
        <ModalHeader>Dados da Entrada</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Card variant={'unstyled'} mt={4} fontSize={10}>
            <TableContainer minW={280} w={'100%'}>
              <Table variant="striped" size={'sm'} w={'100%'}>
                <Tbody>
                  <For each={modalData}>
                    {(item, index) => (
                      <Tr key={index}>
                        <Td>{item.description}</Td>
                        <Td display={'flex'}>
                          <div style={{ width: '100%',display: 'flex', }}>
                            <span style={{ flex: 4, textAlign: 'right', marginRight: '3px' }}>
                              {`${item?.value ?? ''}`.replace('.', ',')}
                            </span>{' '}
                            <span style={{ flex: 2, marginRight: '8px', minWidth: '24px' }} dangerouslySetInnerHTML={{ __html: item.measurement }}></span>
                          </div>
                        </Td>
                      </Tr>
                    )}
                  </For>
                </Tbody>
              </Table>
            </TableContainer>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={closeModal}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EntradaModal;
