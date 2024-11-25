/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  Divider,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  Tooltip,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useDnD } from '../../providers/drag_and_drop.provider';
import { VazaoForm } from './vazao_form';
import { CalculationValues, Transformer } from '../calculation/calculation.interface';
import { Sensor } from '../simulation_element/se.interface';
import { PAC } from '../../chemical_info/parshall/pac/pac';
import { Fecl3 } from '../../chemical_info/parshall/fecl13/fecl13';
import { NaOH } from '../../chemical_info/parshall/naoh/naoh';
import Al2so4 from '../../chemical_info/parshall/al2so4/al2so4';
import DesinfectanteMassBalance from '../../chemical_info/dosagem/desinfectante_mass_balance';
import FluorMassBalance from '../../chemical_info/dosagem/fluor_mass_balance';
import { Show } from '@/modules/shared/components/show';

const removeElement = async (closeId, element) => {
  element.massBalances = element.massBalances.filter((balance) => balance.id !== closeId);
};

export const availableTransformers: Transformer[] = [
  {
    type: 'transformer',
    name: 'Sulfato de Alumínio',
    color: 'teal',
    transform: (value) => {
      return value as any as CalculationValues;
    },
    position: {
      x: 70,
      y: 600,
    },
    onCreated: async (element) => {
      element.massBalances.push({
        id: 'dc-al2so4',
        name: 'Dosagem e Concentração Sulfato de Alumínio',
        content: <Al2so4 />,
      });
    },
    onDeleted: async (element) => {
      removeElement('dc-al2so4', element);
    },
    id: 'al2so4',
  },
  {
    type: 'transformer',
    name: 'Cloreto Férrico',
    color: 'teal',
    transform: (value) => {
      return value as any as CalculationValues;
    },
    position: {
      x: 70,
      y: 600,
    },
    onCreated: async (element) => {
      element.massBalances.push({
        id: 'dc-fecl3',
        name: 'Dosagem e Concentração de Cloreto Férrico',
        content: <Fecl3 />,
      });
    },
    onDeleted: async (element) => {
      removeElement('dc-fecl3', element);
    },
    id: 'fecl3',
  },
  {
    type: 'transformer',
    name: 'Policloreto de Alumínio',
    color: 'teal',
    transform: (value) => {
      return value as any as CalculationValues;
    },
    onCreated: async (element) => {
      element.massBalances.push({
        id: 'dc-policloreto',
        name: 'Dosagem e Concentração de Policloreto de Alumínio',
        content: <PAC />,
      });
    },
    onDeleted: async (element) => {
      removeElement('dc-policloreto', element);
    },
    id: 'PAC',
  },
  {
    type: 'transformer',
    name: 'Hidróxido de Sódio',
    color: 'teal',
    transform: (value) => {
      return value as any as CalculationValues;
    },
    onCreated: async (element) => {
      element.massBalances.push({
        id: 'dc-alcalinizante',
        name: 'Balanço de Massa e dosagem do Alcalinizante',
        content: <NaOH />,
      });
    },
    onDeleted: async (element) => {
      removeElement('dc-alcalinizante', element);
    },
    id: 'NaOH',
  },
  {
    type: 'transformer',
    name: 'Areia',
    color: 'purple',
    transform: (value) => {
      return value as any as CalculationValues;
    },
    onCreated: async (value) => {
      const variable = value.calculations.findIndex((calc) => calc.variable === 'Pf');

      value.calculations[variable].value = Number((value.calculations[variable].value + 0.3).toFixed(2));
    },
    onDeleted: async (value) => {
      const variable = value.calculations.findIndex((calc) => calc.variable === 'Pf');

      value.calculations[variable].value = Number((value.calculations[variable].value - 0.3).toFixed(2));
    },
    id: 'areia',
  },
  {
    type: 'transformer',
    name: 'Carvão Antracito',
    color: 'purple',
    transform: (value) => {
      return value as any as CalculationValues;
    },
    onCreated: async (value) => {
      const variable = value.calculations.findIndex((calc) => calc.variable === 'Pf');

      value.calculations[variable].value = Number((value.calculations[variable].value + 0.5).toFixed(2));
    },
    onDeleted: async (value) => {
      const variable = value.calculations.findIndex((calc) => calc.variable === 'Pf');

      value.calculations[variable].value = Number((value.calculations[variable].value - 0.5).toFixed(2));
    },
    id: 'antracito',
  },
  {
    type: 'transformer',
    name: 'Hipoclorito de Sódio',
    color: 'blue',
    transform: (value) => {
      return value as any as CalculationValues;
    },

    onCreated: async (element) => {
      element.massBalances.push({
        id: 'dc-desinfectante',
        name: 'Balanço de Massa do Desinfectante',
        content: <DesinfectanteMassBalance />,
      });
    },
    onDeleted: async (element) => {
      removeElement('dc-desinfectante', element);
    },
    id: 'NaClO',
  },
  {
    type: 'transformer',
    name: 'Ácido Fluossilícico',
    color: 'blue',
    transform: (value) => {
      return value as any as CalculationValues;
    },
    onCreated: async (element) => {
      element.massBalances.push({
        id: 'dc-fluor',
        name: 'Balanço de Massa do Flúor',
        content: <FluorMassBalance />,
      });
    },
    onDeleted: async (element) => {
      removeElement('dc-fluor', element);
    },
    id: 'fluor',
  },
];

export const availableSensors: Sensor[] = [
  { type: 'sensor', name: 'MV', id: 'MV', tooltip: 'Medidor de Vazão' },
  { type: 'sensor', name: 'MN', id: 'MN', tooltip: 'Medidor de Nível' },
  { type: 'sensor', name: 'pH', id: 'pH', tooltip: 'Medidor de pH' },
  { type: 'sensor', name: 'TB', id: 'TB', tooltip: 'Medidor de Turbidez' },
];

const Sidebar: React.FC = () => {
  const { setObject } = useDnD();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const onDragStart = (event, nodeType) => {
    setObject(nodeType);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeType));
  };

  const fontSize = useBreakpointValue({ base: 12, md: 10, '2xl': 12 });
  const spacing = useBreakpointValue({ base: 2, md: 1, '2xl': 4 });
  const bulletSize = useBreakpointValue({ base: 'sm', md: 'xs', '2xl': 'md' });
  const xl = useBreakpointValue({ base: false, '2xl': true });

  const content = (
    <>
      <Heading fontSize={10} mb={2} mt={-2} fontWeight={400} color={'gray.700'} textAlign={'center'}>
        Escolha os produtos e reagentes:
      </Heading>
      <VStack align="start">
        {availableTransformers.map((block, index) => (
          <Card
            key={index}
            className="draggable_component"
            onDragStart={(event) => onDragStart(event, block)}
            draggable
            p={1}
            borderRadius="md"
            cursor="grab"
            border={'1px solid'}
            borderColor={block.color}
            borderStyle={'dashed'}
            variant="outline"
            w={'100%'}
            textAlign={'center'}
          >
            <Text fontSize={fontSize} fontWeight={400}>
              {block.name}
            </Text>
          </Card>
        ))}
      </VStack>
      <Divider my={spacing} color={'transparent'} />
      <Heading fontSize={10} mb={2} fontWeight={400} color={'gray.700'} textAlign={'center'}>
        Adicione os analisadores:
      </Heading>
      <Flex align="start" overflow={'hidden'} justifyContent={'space-evenly'}>
        {availableSensors.map((sensor, index) => (
          <Tooltip key={index} label={sensor.tooltip} placement="right">
            <IconButton
              className="draggable_component"
              onDragStart={(event) => onDragStart(event, sensor)}
              draggable
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              mx={1}
              size={bulletSize}
              icon={
                <Text fontSize={fontSize} fontWeight={400}>
                  {sensor.name}
                </Text>
              }
            />
          </Tooltip>
        ))}
      </Flex>
      <Spacer />
      <VazaoForm />
    </>
  );

  const background = useColorModeValue('rgba(255, 255, 255)', 'rgb(44 44 44)');

  return isMobile ? (
    <Accordion allowToggle position={'absolute'} zIndex={1} bottom={'0px'} width={'100vw'} background={background}>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontSize={'18px'}>
            Componentes Químicos
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>{content}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ) : (
    <Card variant={'elevated'} padding={3} width={'15vw'} minW={200} height={'calc(100dvh - 65px)'}>
      <Show when={xl} fallback={content}>
        <Box
          p={0}
          maxH={'100%'}
          overflow={'hidden'}
          pl={2}
          pt={2}
          ml={-3}
          mt={0}
          height={'calc(100dvh - 65px)'}
          display={`flex`}
          flexDir={`column`}
        >
          {content}
        </Box>
      </Show>
    </Card>
  );
};

export default Sidebar;
