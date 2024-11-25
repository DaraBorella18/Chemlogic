import { Card, Table, TableCaption, TableContainer, Tbody, Text } from '@chakra-ui/react';
import TransformerItem from './transformer_item';
import { Transformer } from '../calculation/calculation.interface';
import { ReactFlowNode, useSimulation } from '../../providers/simulation.provider';

interface Props {
  draggingOver: boolean;
  transformers: Transformer[];
  availableTransformers: string[];
  deleteTransformer: (transformer: Transformer) => void;
  transformerColor?: string;
}

const TransformerList: React.FC<Props> = ({
  draggingOver,
  transformers,
  availableTransformers,
  deleteTransformer,
  transformerColor,
}) => {
  const { nodes, setNodes } = useSimulation();

  if (!availableTransformers?.length) {
    return <></>;
  }

  const needMoreTransformers = availableTransformers.includes('NaOH') && transformers.length < 2;

  return (
    <>
      <Card variant={'elevated'} minW={200} w={'100%'} py={1}>
        <TableContainer minW={'200px'} w={'100%'} overflow={'hidden'}>
          <Table variant="simple" style={{ borderCollapse: 'separate', borderSpacing: '4px' }} w={'100%'}>
            {((!draggingOver && !transformers.length) || needMoreTransformers) && (
              <TableCaption
                mt={0}
                textAlign={'center'}
                w={'98%'}
                mx={1}
                border={`dashed 1px`}
                borderRadius={8}
                borderColor={transformerColor || 'transparent'}
              >
                <Text fontSize={12} fontWeight={400}>
                  Arraste seus reagentes aqui
                </Text>
              </TableCaption>
            )}
            <Tbody>
              {transformers.map((transformer, index) => (
                <TransformerItem
                  key={index}
                  transformer={transformer}
                  onDelete={() => {
                    deleteTransformer(transformer);
                  }}
                  onClick={() => {
                    setNodes([
                      ...(nodes as ReactFlowNode[]),
                      {
                        id: transformer.id,
                        data: transformer as any,
                        position: transformer.position || { x: 0, y: 0 },
                        type: 'transformerComponent',
                      } as ReactFlowNode,
                    ]);
                  }}
                />
              ))}
              {draggingOver && transformers.length < 2 && <TransformerItem shadow transformer={{} as Transformer} />}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default TransformerList;
