import { CloseIcon } from '@chakra-ui/icons';
import { IconButton, Td, Text, Tr } from '@chakra-ui/react';
import { Transformer } from '../calculation/calculation.interface';

interface Props {
  shadow?: boolean;
  transformer: Transformer;
  onDelete?: (transformer: Transformer) => void;
  onClick?: (transformer: Transformer) => void;
}

const TransformerItem: React.FC<Props> = ({ shadow, transformer, onDelete }) => {
  if (shadow) {
    return (
      <Tr minW={100}>
        <Td
          key={`shadow_input`}
          className="draggable_component"
          draggable
          p={1}
          borderRadius="md"
          w={'100%'}
          textAlign={'center'}
        >
          <Text fontSize={12} color={'transparent'}>
            Arraste Aqui
          </Text>
        </Td>
      </Tr>
    );
  }

  return (
    <Tr minW={100}>
      <Td
        key={`input_${transformer.name}`}
        p={'6px'}
        borderRadius="md"
        border={'1px solid teal'}
        borderStyle={'dashed'}
        cursor="grab"
        w={'100%'}
        textAlign={'center'}
        borderColor={transformer.color || 'transparent'}
        display={'flex'}
      >
        <Text width={'100%'} fontSize={12} fontWeight={400}>
          {transformer.name}
        </Text>

        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            onDelete(transformer);
          }}
          isRound={true}
          aria-label="Remover"
          variant={'ghost'}
          colorScheme="gray"
          size={'xs'}
        >
          <CloseIcon />
        </IconButton>
      </Td>
    </Tr>
  );
};

export default TransformerItem;
