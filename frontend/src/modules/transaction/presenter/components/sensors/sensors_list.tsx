import { VStack } from '@chakra-ui/react';
import { Sensor } from '../simulation_element/se.interface';
import SensorItem from './sensors';

interface Props {
  sensors: Sensor[];
  draggingOver?: boolean;

}

const SensorsList: React.FC<Props> = ({ sensors, draggingOver }) => {
  const deleteSensor = (sensor: Sensor) => {
    const index = sensors.indexOf(sensor);
    sensors.splice(index, 1);
  }

  return (
    <VStack position={'absolute'} right={-4} top={2}>
      {sensors &&
        sensors.map((sensor) => (
          <SensorItem
            key={sensor.id}
            sensor={sensor}
            onDelete={() => {
              deleteSensor(sensor);
            }}
          />
        ))}

      {draggingOver && <SensorItem shadow={true} sensor={{} as Sensor} />}
    </VStack>
  );
};

export default SensorsList;
