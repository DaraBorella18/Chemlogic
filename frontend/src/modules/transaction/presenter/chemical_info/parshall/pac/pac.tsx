import { CardBody, Text } from '@chakra-ui/react';

export const PAC: React.FC = () => {
  return (
    <CardBody>
      <Text fontSize={14} color={'black'} textAlign={'center'}>
        Al<sub>2</sub>O<sub>3</sub> + H<sub>2</sub>O + H<sub>2</sub>SO<sub>4</sub> + outros aditivos
        <br />P<sub>c</sub> = 1250 Kg/m³
        <br />
        10,3% de Al<sub>2</sub>O<sub>3</sub>
        <br />
        Equivalência mássica:
        <br />
        Al<sub>2</sub>O<sub>3</sub> = 2 moles de Al
        <br />
        Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.14H<sub>2</sub>O = 2 moles de Al
        <br />1 mol de Al<sub>2</sub>O<sub>3</sub> - 1 mol de Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.14H<sub>2</sub>
        O
        <br />
        102g de Al<sub>2</sub>O<sub>3</sub> - 594g de Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.14H<sub>2</sub>O
        <br />
        Concentração de coagulante:
        <br />C<sub>Al2O3</sub> = (10,3 / 100) x ρ<sub>c</sub> = 128,75 Kg/m³
        <br />
        102g de Al<sub>2</sub>O<sub>3</sub> - 594g de Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.14H<sub>2</sub>O
        <br />
        128,75 Kg de Al<sub>2</sub>O<sub>3</sub> - C<sub>Al2(SO4)3.14H2O</sub>
        <br />C<sub>Al2(SO4)3.14H2O</sub> = 749,8 Kg Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.14H<sub>2</sub>O/m³
      </Text>
    </CardBody>
  );
};
