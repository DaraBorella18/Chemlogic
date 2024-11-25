import SE from "../../components/simulation_element/se";

export const captcaoElement = new SE(
    'Captação',
    { x: 28, y: -200 },
    {
      fixed: true,
      connections: { bottom: 'source' },
      calculations: [
        {
          name: 'Vazão da Captação',
          variable: 'Q',
          showOnScreen: true,
          formula: '((k*P*q)/86400)*1,03 / 1000',
          measurement: 'm³/h',
          calculationMethod: (values) => {
            return values['Q1'] * 3600;
          },
        },
      ],
    },
  )