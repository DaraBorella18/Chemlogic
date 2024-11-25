import { Card, CardHeader, Divider, IconButton, Text } from '@chakra-ui/react';
import { Transformer } from '../components/calculation/calculation.interface';
import { CloseIcon } from '@chakra-ui/icons';
import { useSimulation } from '../providers/simulation.provider';

interface Props {
  data: Transformer;
}

const TransformerComponent: React.FC<Props> = (props) => {
  const { nodes, setNodes } = useSimulation();

  return (
    <Card>
      <CardHeader display={"flex"} textAlign={'center'} mb={-2} fontSize={18}>
        <Text flex={10}>
          Concentração e Dosagem: <b>{props.data.name}</b>
        </Text>
        <IconButton
          flex={1}
          marginLeft={6}
          marginTop={-3}
          onClick={(event) => {
            event.stopPropagation();

            setNodes(
              nodes.filter((node) => {
                return node.id !== props.data.id;
              })
            );
          }}
          isRound={true}
          aria-label="Remover"
          variant={'ghost'}
          colorScheme="gray"
          size={'lg'}
        >
          <CloseIcon />
        </IconButton>
      </CardHeader>
      <Divider color={'gray.400'} />

      {props.data.transformerContent}
    </Card>
  );
};

export default TransformerComponent;
