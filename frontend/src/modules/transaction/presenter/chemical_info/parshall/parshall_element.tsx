/* eslint-disable react-refresh/only-export-components */
import SE from '../../components/simulation_element/se';
import { findParshallContent } from './parshall';
import calha from '@/chemical_components/calha.svg';

import { Box, Heading } from '@chakra-ui/react';
import CalhaParshall from './calha_parshall';
import TabelaParshall from './tabela_parshall';
import TabelaConversoesParshall from './tabela_conversoes_parshall';
import CoagulanteMassBalance from './coagulante_mass_balance';

const ParshallCalculations: React.FC = () => {
  return (
    <Box my={6}>
      <CalhaParshall />
    </Box>
  );
};

const ParshallCalculationsBottom: React.FC = () => {
  return (
    <Box>
      <Heading fontSize={16} fontWeight={500} my={8} textAlign={'center'}>
        Dimensões padronizadas de Parshall
      </Heading>
      <TabelaParshall />
      <TabelaConversoesParshall />
    </Box>
  )
}

export const parshallElement = new SE(
  'Calha Parshall',
  { x: -10, y: 70 },
  {
    image: calha,
    imageWidth: 150,
    connections: { top: 'target', right: 'source' },
    availableTransformers: ['PAC', 'al2so4', 'fecl3', 'NaOH'],
    dimensionElement: <ParshallCalculations />,
    dimensionsBottomElement: <ParshallCalculationsBottom />,
    transformerColor: 'teal',
    massBalances: [
      {
        id: 'coagulante',
        name: 'Balanço de Massa do Coagulante',
        content: <CoagulanteMassBalance />,
      },
    ],
    calculations: [
      {
        name: 'Dosagem de Coagulante',
        variable: 'DC',
        formula: 'DC = 0.00576',
        hideOnSidebar: true,
        showOnScreen: true,
        measurement: 'x 10¯³ m³/h',
        calculationMethod: (values, transformers, setValues) => {
          const transformador = transformers.find((transformer) => transformer.id !== 'NaOH')?.id;

          if (!transformador) return 0;
          const valuesDC = {
            al2so4: 0.00792,
            fecl3: 0.0072,
            PAC: 0.00576,
          };
          const DC = valuesDC[transformador];
          values.DC = DC;
          values.DC1 = DC;

          setTimeout(() => {
            setValues(values);
          }, 0);
          return DC * 1000;
        },
      },
      {
        name: 'Vazão de Coagulante',
        variable: 'QC',
        formula: 'QC = (QAB * DC) / CC',
        hideOnSidebar: true,
        showOnScreen: true,
        measurement: 'x 10¯³ m³/h',
        calculationMethod: (values, transformers, setValues) => {
          const transformador = transformers.find((transformer) => transformer.id !== 'NaOH')?.id;

          if (!transformador) return 0;
          const valoresCC = {
            al2so4: 97.2,
            fecl3: 551,
            PAC: 128.75,
          };
          const CC = valoresCC[transformador];

          const QAB = values['Q2'];
          const QC = (QAB * values.DC) / CC;

          values.QC = QC;

          setTimeout(() => {
            setValues(values);
          }, 0);
          return QC * 1000;
        },
      },
      {
        name: 'Dosagem de Alcalinizante',
        variable: 'DA',
        formula: 'DC * 0.45',
        showOnScreen: true,
        measurement: ' x 10¯³ m³/h',
        calculationMethod: (values, transformers, setValues) => {
          const haveAlcalinizante = transformers.find((transformer) => transformer.id == 'NaOH');

          if (!haveAlcalinizante || !values.DC) return 0;

          const DA = values.DC * 0.45;
          values.DA = DA;

          setTimeout(() => {
            setValues(values);
          }, 0);

          return DA * 1000;
        },
      },
      {
        name: 'Vazão de Alcalinizante',
        variable: 'QA',
        formula: 'QA = (QAB * DA) / CA',
        showOnScreen: true,
        measurement: ' x 10¯³ m³/h',
        calculationMethod: (values, _transformers, setValues) => {
          const { Q2, DA } = values;
          const QAB = Q2;
          const CA = 765;

          const QA = (QAB * DA) / CA;

          values.QA = QA;

          setTimeout(() => {
            setValues(values);
          }, 0);

          return QA * 1000;
        },
      },
      {
        name: 'Vazão',
        variable: 'Q',
        formula: '((k*P*q)/86400)*1,03 / 1000',
        hideOnSidebar: true,
        calculationMethod: (values) => {
          return values['Q'];
        },
      },
      {
        name: 'Altura da lâmina',
        variable: 'Ha',
        formula: 'Ha = K1*(Q1^N1)',
        measurement: 'm',
        calculationMethod: (values) => {
          const table = findParshallContent(values.Q);

          const { Q1 } = values;
          const { K1, N1 } = table;
          return K1 * Math.pow(Q1, N1);
        },
      },
      {
        name: 'Velocidade de escoamento da água',
        variable: 'Va',
        formula: 'D’ = ((2/3)*(D-W)) + W \n Va = (Q/(Ha*D’))',
        measurement: 'm/s',
        calculationMethod: (values) => {
          const { wM, D } = findParshallContent(values.Q);
          const { Q1, Ha } = values;
          const Dl = (2 / 3) * (D - wM) + wM;
          const Va = Q1 / (Ha * Dl);

          return Va;
        },
      },
      {
        name: 'Velocidade de escoamento inicial',
        variable: 'V1',
        formula:
          'Ea = Ha + ((Va^2)/(2*9,81)) + N </br> Teta = -[(9,81*Q)/(W*(((2*9,81*Ea)/3)^1,5))] </br> V1 = (2*cos(Teta/3))* (((2*9,81*Ea)/3)^0,5)',
        measurement: 'm/s',
        calculationMethod: (values) => {
          const { wM } = findParshallContent(values.Q);
          const { Q1, Ha, Va } = values;
          const Ea = Ha + Math.pow(Va, 2) / (2 * 9.81) + 0.1;
          const Teta = -((9.81 * Q1) / (wM * Math.pow((2 * 9.81 * Ea) / 3, 1.5)));
          const V1 = 2 * Math.cos(Teta / 3) * Math.pow((2 * 9.81 * Ea) / 3, 0.5);

          return V1;
        },
      },
      {
        name: 'Altura da água no início do ressalto',
        variable: 'Y1',
        formula: 'Y1 = Q/(W*V1)',
        measurement: 'm',
        calculationMethod: (values) => {
          const { wM } = findParshallContent(values.Q);
          const { Q1, V1 } = values;
          return Q1 / (wM * V1);
        },
      },
      {
        name: 'Número de Froude',
        variable: 'FR',
        formula: 'FR = V1/(sqrt(9,81*Y1))',
        calculationMethod: (values) => {
          const { V1, Y1 } = values;
          return V1 / Math.sqrt(9.81 * Y1);
        },
      },
      {
        name: 'Y3',
        variable: 'Y3',
        formula: 'Y3 = (Y1/2)(((1+(8(FR^2)))^0,5)-1)',
        hideOnSidebar: true,
        calculationMethod: (values) => {
          const { FR } = values;
          const { Y1 } = values;
          return (Y1 / 2) * (Math.sqrt(1 + 8 * Math.pow(FR, 2)) - 1);
        },
      },
      {
        name: 'Altura do ressalto no final do trecho divergente',
        variable: 'Y2',
        formula: 'Y3 = (Y1/2)(((1+(8(FR^2)))^0,5)-1) \n Y2 = Y3 – (N-K)',
        measurement: 'm',
        calculationMethod: (values) => {
          const { Y3 } = values;
          const { N, K } = findParshallContent(values.Q);
          return Y3 - (N - K);
        },
      },
      {
        name: 'Velocidade de escoamento no final do trecho divergente',
        variable: 'V2',
        formula: 'V2 = Q/(Y2*C)',
        measurement: 'm/s',
        calculationMethod: (values) => {
          const { Y2, Q1 } = values;
          const { C } = findParshallContent(values.Q);
          return Q1 / (Y2 * C);
        },
      },
      {
        name: 'Tempo de detenção da água no trecho divergente',
        variable: 'T',
        formula: 'T = G/((V1+V2)/2)',
        measurement: 's',
        calculationMethod: (values) => {
          const { V1, V2 } = values;
          const { G } = findParshallContent(values.Q);
          return G / ((V1 + V2) / 2);
        },
      },
      {
        name: 'Perda de carga no vertedor no trecho divergente',
        variable: 'h',
        formula: 'h = Ha + N – Y3',
        measurement: 'm',
        calculationMethod(values) {
          const { N } = findParshallContent(values.Q);
          const { Ha, Y3 } = values;
          return Ha + N - Y3;
        },
      },
      {
        name: 'Gradiente médio de velocidade no trecho divergente',
        variable: 'GM',
        formula: 'GM = sqrt((Ƴ*h)/( µ*T)',
        measurement: 's¯¹',
        calculationMethod(values) {
          const { h, T } = values;
          const { Y, F } = findParshallContent(values.Q);
          return Math.sqrt((Y * h) / (F * T));
        },
      },
      {
        name: 'Altura da lâmina no canal a jusante',
        variable: 'Hj',
        formula: 'Hj = Q/(Vj*C)',
        measurement: 'm',
        calculationMethod(values) {
          const { Q1, Vj } = values;
          const { C } = findParshallContent(values.Q);
          return Q1 / (Vj * C);
        },
      },
      {
        name: 'Altura do rebaixo no inicio do canal a jusante',
        variable: 'DeltaH',
        formula: 'DeltaH = Hj – Y2',
        measurement: 'm',
        calculationMethod(values) {
          const { Hj, Y2 } = values;
          return Hj - Y2;
        },
      },
      {
        name: 'Distância da comporta ao nível da água a jusante',
        variable: 'Hv',
        formula: 'Hv =(Q/(1,838*C))^(2/3)',
        measurement: 'm',
        calculationMethod(values) {
          const { Q1 } = values;
          const { C } = findParshallContent(values.Q);
          return Math.pow(Q1 / (1.838 * C), 2 / 3);
        },
      },
      {
        name: 'Altura da lâmina de elevação da comporta',
        variable: 'Hc',
        formula: 'HC = Hj – Hv',
        measurement: 'm',
        calculationMethod(values) {
          const { Hj, Hv } = values;
          return Hj - Hv;
        },
      },
      {
        name: 'Distância do vertedor à comporta',
        variable: 'Dc',
        formula: 'Dc = Vj * Tf',
        measurement: 'm',
        calculationMethod() {
          return 3;
        },
      },
    ],
  },
);
