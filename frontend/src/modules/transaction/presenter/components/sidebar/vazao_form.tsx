import DebouncerHelper from '@/modules/shared/helpers/debouncer.helper';
import useConstructor from '@/modules/shared/patterns/Constructor';
import { Button, FormControl, FormLabel, Input, Tooltip } from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { useSimulation } from '../../providers/simulation.provider';
import { useLayoutEffect } from 'react';
import { useEntradaModal } from '../entrada/entrada_modal.provider';

interface VazaoFormDTO {
  P: string;
  q: string;
}

let debouncer;

export const VazaoForm: React.FC = () => {
  const form = useForm<VazaoFormDTO>({ defaultValues: {P: '', q: ''} });
  const { globalVariables, setGlobalVariables, resetSimulation } = useSimulation();
  const { openModal } = useEntradaModal()

  const parseForNumericValue = (value: number, fixed = 4) => {
    return Math.trunc(value * Math.pow(10, fixed)) / Math.pow(10, fixed);
  };

  const loadSchedules = form.handleSubmit(async (data: VazaoFormDTO) => {
    const { k } = globalVariables;
    data.P = data.P?.replace(/\./g, ''); // remove any . on data.P
    data.q = data.q?.replace(/\./g, ''); // remove any . on data.q

    const Q = parseForNumericValue(((k * Number(data.P) * Number(data.q)) / 86400) * 1.03); // formula original
    const Q1 = parseForNumericValue(Q / 1000, 6); // metro cubico por segundo
    const Q2 = parseForNumericValue(Q1 * 3600, 6); // metro cubico por hora

    setGlobalVariables((prevVariables) => ({
      ...prevVariables,
      p: Number.parseFloat(data.P),
      q: Number.parseFloat(data.q),
      Q,
      Q1,
      Q2,
    }));
  });

  useConstructor(() => {
    debouncer = DebouncerHelper.registerDebounce(loadSchedules, 500);
  });

  const onFormChange = () => {
    form.clearErrors();

    debouncer();
  };

  useLayoutEffect(() => {
    form.setValue('P', globalVariables.p ? globalVariables.p.toString() : '');
    form.setValue('q', globalVariables.q ? globalVariables.q.toString() : '');
  });

  return (
    <>
      <FormControl size={'sm'}>
        <FormLabel mb={1} fontSize={'12'} color={'gray.600'} fontWeight={400}>
          Número de Habitantes:
        </FormLabel>
        <Controller
          name="P"
          control={form.control}
          render={({ field }) => (
            <Input
              variant={'filled'}
              borderRadius={8}
              size={'sm'}
              fontSize={12}
              placeholder="10.000 habitantes"
              value={field.value}
              onChange={(event) => {
                let value = event.target.value?.replace(/\D/g, '');
                value = Math.max(0, Math.min(100000, Number(value))).toString();
                const formattedValue = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
                field.onChange(formattedValue);
                onFormChange();
              }}
            />
          )}
        />
      </FormControl>
      <FormControl size={'sm'}>
        <FormLabel mb={1} fontSize={'12'} color={'gray.600'} fontWeight={400}>
          Consumo médio por habitante:
        </FormLabel>
        <Controller
          name="q"
          control={form.control}
          render={({ field }) => (
            <Input
              variant={'filled'}
              borderRadius={8}
              size={'sm'}
              fontSize={12}
              placeholder="100 L/hab.dia"
              value={field.value}
              onChange={(event) => {
                let value = event.target.value?.replace(/\D/g, '');
                value = Math.max(0, Math.min(300, Number(value))).toString();
                const formattedValue = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
                field.onChange(formattedValue);
                onFormChange();
              }}
            />
          )}
        />
      </FormControl>

      <Button
        mt={4}
        colorScheme="teal"
        variant={'outline'}
        size="sm"
        width={'100%'}
        onClick={() => {
          form.reset();
          resetSimulation();
        }}
      >
        Resetar
      </Button>
      <Tooltip label={'Clique aqui'}>
        <Button mt={4} colorScheme="teal" variant={'solid'} size="sm" width={'100%'} onClick={openModal}>
          Valores de Entrada
        </Button>
      </Tooltip>
    </>
  );
};

