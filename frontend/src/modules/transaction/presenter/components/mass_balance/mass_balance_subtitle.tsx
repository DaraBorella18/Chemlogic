import { Box, Table, TableContainer, Tbody, Td, Tr, useColorModeValue } from "@chakra-ui/react"
interface Props {
    tableData: any;
}

const MassBalanceSubtitle: React.FC<Props> = ({ tableData }: Props) => {
    return (
    <TableContainer bg={useColorModeValue('white', 'gray.600')} mt={8} width={'100%'} overflow={"hidden"}>
    <Table size={'sm'} width={'100%'} variant="striped">
      <Tbody>
        <Tr>
          <Td maxWidth={'60px'}>
            <b>Variável</b>
          </Td>
          <Td>
            <b>Descrição</b>
          </Td>
        </Tr>
        {Object.entries(tableData).map(([key, value]) => (
          <Tr key={`${key}_tr`}>
            <Td>
              <Box maxWidth={'30px'} whiteSpace={'break-spaces'} dangerouslySetInnerHTML={{ __html: key }} />
            </Td>
            <Td>{`${value}`}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  )
}

export default MassBalanceSubtitle