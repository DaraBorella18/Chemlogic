/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useMemo } from 'react';
import { useSimulation } from '../../providers/simulation.provider';
import { parseForNumericValue } from '@/modules/shared/helpers/numeric.helper';
import CalculationTooltip from '../calculation/calculation_tooltip';

const SimulationModal: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const { globalVariables, setGlobalVariables, modelElement, setModelElement } = useSimulation();

  const availableCalculations = useMemo(
    () => modelElement?.calculations.filter((calc) => !calc.showOnScreen),
    [modelElement, globalVariables],
  );
  const bg = useColorModeValue('gray.50', 'gray.800');
  const dimensionsBg = useColorModeValue('white', 'transparent');
  const headerBg = useColorModeValue('gray.200', 'gray.900');

  useEffect(() => {
    if (!modelElement || !availableCalculations) {
      return;
    }

    const results = { ...globalVariables };

    if (results.p && results.q) {
      for (const calculation of availableCalculations) {
        calculation.value = parseForNumericValue(
          calculation.calculationMethod(results, modelElement.transformers, setGlobalVariables),
        );
        results[calculation.variable] = calculation.value;
      }
    }
  }, [modelElement, globalVariables]);

  if (!modelElement) {
    return <></>;
  }

  return (
    <Card
      className="dcomponent-scrollbar dcomponent-info"
      variant={'filled'}
      bg={bg}
      padding={0}
      borderRadius={0}
      width={isMobile ? '100vw' : '30vw'}
      minW={isMobile ? '100vw' : '500px'}
      maxW={isMobile ? '100vw' : '500px'}
      position={'absolute'}
      top={'60px'}
      right={0}
      zIndex={10}
      maxH="calc(100dvh - 60px)"
      overflow={'auto'}
    >
      <CardHeader background={headerBg}>
        <Heading as="h2" size="sm" mb={-2} mt={-2} fontWeight={400}>
          Informações
        </Heading>
        <CloseButton
          position="absolute"
          top={2}
          right={2}
          onClick={() => {
            setModelElement(null);
          }}
        />
      </CardHeader>
      <CardBody padding={4}>
        <Accordion allowToggle zIndex={1} width={isMobile ? '90vw' : '450px'} background={dimensionsBg}>
          {modelElement.massBalances?.map((balance, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Heading mt={2} w="100%" fontSize={15} textAlign={'center'}>
                  {balance.name}
                </Heading>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} background={'white'} border={'none'}>
                {balance.content}
              </AccordionPanel>
            </AccordionItem>
          ))}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <p color={'transparent'}>{isExpanded ? '' : ''}</p>
                <AccordionButton>
                  <Heading mt={2} w="100%" fontSize={15} textAlign={'center'}>
                    Dimensionamento
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={1} bg={dimensionsBg} px={2}>
                  {modelElement.dimensionElement}
                  <Text textAlign={'center'} mb={2} fontWeight={300}>
                    ABNT NBR 12216:1992
                  </Text>

                  <TableContainer>
                    <Table className="dcomponent-compact-table" size={'sm'} variant="striped">
                      <Tbody>
                        {availableCalculations
                          .filter((calc) => !calc.hideOnSidebar)
                          .map((calc, index) => {
                            if (calc.divider) {
                              return (
                                <Tr key={calc.name}>
                                  <Td colSpan={2}>
                                    <Text py={2} fontSize={'xs'} fontWeight={600}>
                                      {calc.name}
                                    </Text>
                                  </Td>
                                </Tr>
                              );
                            }

                            return (
                              <Tr key={index}>
                                <Td maxW={250}>
                                  <Text whiteSpace={'break-spaces'} maxW={250}>
                                    {calc.name}
                                  </Text>
                                </Td>
                                <Td>
                                  <CalculationTooltip key={`${calc}_${index}`} content={calc.formula}>
                                    <div style={{ display: 'flex', marginLeft: '-6px' }}>
                                      <span style={{ flex: 4, textAlign: 'right', marginRight: '3px' }}>
                                        {`${calc?.value ?? ''}`.replace('.', ',')}
                                      </span>{' '}
                                      <span style={{ flex: 2, marginRight: '8px', minWidth: '24px' }}>
                                        {calc.measurement}
                                      </span>
                                    </div>
                                  </CalculationTooltip>
                                </Td>
                              </Tr>
                            );
                          })}
                        <Tr></Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>

                  {modelElement.dimensionsBottomElement}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};

export default SimulationModal;
