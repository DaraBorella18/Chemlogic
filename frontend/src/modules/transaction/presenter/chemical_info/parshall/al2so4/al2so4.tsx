import { CardBody, Text } from '@chakra-ui/react';

const Al2so4: React.FC = () => {

  return (
    <CardBody>
      <Text fontSize={'14px'} textAlign={"center"} color={'black'}>
        <p>
            Al<sub>2</sub>O<sub>3</sub> + H<sub>2</sub>O + H<sub>2</sub>SO<sub>4</sub> + outros aditivos
          
          <br/>
        </p>
        <p>
          P<sub>C</sub> = 1200 Kg/m<sup>3</sup>
        </p>
        <p>
          8,1 % de Al<sub>2</sub>O<sub>3</sub>
        </p><br/>
        <p>
          Equivalência mássica:
        </p>
        <p>
          Al<sub>2</sub>O<sub>3</sub> = 2 moles de Al
        </p>
        <p>
          Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.14H<sub>2</sub>O = 2 moles de Al
        </p><br/>
        <p>
          Concentração de coagulante:
        </p>
        <p>
          C<sub>Al2O3</sub> = (8,1 / 100) x ρ<sub>C</sub> = 97,2 Kg/m<sup>3</sup>
        </p>
        <br />
        <p>
          102 g de Al<sub>2</sub>O<sub>3</sub> – 594 g de Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.14H<sub>2</sub>O
          <br />
          97,2 Kg de Al<sub>2</sub>O<sub>3</sub> – C<sub>Al2(SO4)3.14H2O</sub>
        </p>
        <br/>
        <p>
          C<sub>Al2(SO4)3.14H2O</sub> = 566,04 Kg Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.14H<sub>2</sub>O/m³
        </p>
      </Text>
    </CardBody>
  );
};

export default Al2so4;
