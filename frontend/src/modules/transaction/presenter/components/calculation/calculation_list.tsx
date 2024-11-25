import { Card, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';
import { CalculationElement, Transformer } from './calculation.interface';
import { useEffect } from 'react';
import { useSimulation } from '../../providers/simulation.provider';
import { parseForNumericValue } from '@/modules/shared/helpers/numeric.helper';

interface Props {
  calculations: CalculationElement[];
  transformers: Transformer[];
}

const CalculationList: React.FC<Props> = ({ calculations, transformers }) => {
  const { globalVariables, setGlobalVariables } = useSimulation();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {
  }, [globalVariables]);
  if (!calculations.length) {
    return <></>;
  }

  const results = { ...globalVariables };

  const availableCalculations = calculations.filter((calc) => calc.showOnScreen);

  for (const calculation of availableCalculations) {
    calculation.value = parseForNumericValue(
      calculation.calculationMethod(globalVariables, transformers, setGlobalVariables),
    );
    results[calculation.variable] = calculation.value;
  }

  const showedCalculations = calculations.filter((calculation) => calculation.showOnScreen);

  return (
    <Card variant={'unstyled'} mt={4} fontSize={10}>
      <TableContainer minW={200} w={'100%'}>
        <Table variant="simple" size={'sm'} w={'100%'}>
          <Tbody>
            {showedCalculations.map((calculation) => (
              <Tr key={calculation.variable}>
                <Td>{calculation.name}</Td>
                <Td>
                  {calculation.value?.toFixed(3).replace('.', ',')} {calculation.measurement}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default CalculationList;
