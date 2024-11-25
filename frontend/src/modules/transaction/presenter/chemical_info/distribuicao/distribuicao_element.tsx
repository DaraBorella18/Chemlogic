import SE from "../../components/simulation_element/se";

export const distribuicaoElement = new SE(
    'Distribuição',
    { x: 1380, y: -180 },
    {
      connections: { bottom: 'target' },
      fixed: true,
      calculations: [
        {
          name: 'Vazão de Distribuição',
          variable: 'QDB',
          showOnScreen: true,
          formula: 'QAD - (QAD * 0.02)',
          measurement: 'm³/h',
          calculationMethod: (values) => {
            const { QAD } = values;
            return QAD;
          },
        },
      ],
    },
  )