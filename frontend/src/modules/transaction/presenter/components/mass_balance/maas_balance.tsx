import { Card, CardBody, CardHeader, Divider } from "@chakra-ui/react";
import { Handle, Position } from "@xyflow/react";

interface Props {
  data: {
    label: string;
    id: string;
    content: JSX.Element
  };
}

const MassBalance: React.FC<Props> = (props: Props) => {
  return (
    <Card>
      <CardHeader fontSize={18} textAlign={'center'} mb={-2}>
        Balanço de Massa: <b>{props.data.label}</b>
      </CardHeader>
      <Divider color={'gray.400'} />                                                                                                                                                                                                                                                                                                                                                                                                   
      <CardBody fontSize={10} width={360} height={500} maxW={360} textAlign={'left'}>
        {props.data.content}
      </CardBody>

      <Handle type="source" position={Position.Bottom} style={{ bottom: '0%' }} />
    </Card>
  );
};

export default MassBalance;
