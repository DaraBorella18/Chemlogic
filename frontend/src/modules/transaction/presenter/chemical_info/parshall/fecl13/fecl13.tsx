import { Text } from '@chakra-ui/react';

export const Fecl3: React.FC = () => {
  return (
    <>
      <Text fontSize={14} textAlign={'center'} color={'black'}>
        <p>
          Fe<sub>2</sub>O<sub>3</sub> + H<sub>2</sub>O + H<sub>CL</sub> + outros aditivos
        </p>
        <br />
        <p>
          P<sub>C</sub> = 1450 Kg/m³
          <br />
          38% de FeCl<sub>3</sub>
        </p>
        <br />  
        <p>
          Concentração de coagulante:
          <br />
          C<sub>FeCl3</sub> = (38 / 100) x ρ<sub>C</sub> = 551 Kg/m³
        </p>
      </Text>
    </>
  );
};
