import { Box, Portal } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { usePopper } from 'react-popper';

interface CustomTooltipProps {
  content: string | JSX.Element;
  children: React.ReactNode;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ content, children }) => {
  const [visible, setVisible] = useState(false);
  const referenceElement = useRef<HTMLDivElement | null>(null);
  const popperElement = useRef<HTMLDivElement | null>(null);

  const { styles, attributes, update } = usePopper(referenceElement.current, popperElement.current, {
    placement: 'left',
    modifiers: [
      { name: 'offset', options: { offset: [0, 8] } },
    ],
  });


  useEffect(() => {
    if (visible && update) {
      update(); // Recalcula o posicionamento quando o tooltip é exibido
    }
  }, [visible, update]);

  return (
    <div
      ref={referenceElement}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{ display: 'inline-block' }}
    >
      {children}

      <Portal>
        <Box
          ref={popperElement}
          style={{
            ...styles.popper,
            visibility: visible ? 'visible' : 'hidden',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
          {...attributes.popper}
          bg="gray.700"
          color="white"
          p={2}
          borderRadius="md"
          boxShadow="md"
          fontSize="sm"
          zIndex={1000}
        >
          {typeof content === 'string' ? (
            <span dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            content
          )}
        </Box>
      </Portal>
    </div>
  );
};

export default CustomTooltip;
