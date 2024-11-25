import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const TabelaLeitoFiltrante: React.FC = () => {
    const tableData = [
        ["Material", "Tamanho efetivo (mm)", "U (mm)", "e (m)"],
        ["Antracito", "0,9", "1,4", "0,45"],
        ["Areia", "0,45", "1,5", "0,25"]
    ];

    return (
        <TableContainer className="dimensionsMinifiedTable" bg={useColorModeValue('white', 'gray.600')}>
            <Table size={"sm"} position={"relative"} top={'0px'} left={'0px'}>
                <Thead>
                    <Tr>
                        {tableData[0].map((header, index) => (
                            <Th key={index}>{header}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {tableData.slice(1).map((row, index) => (
                        <Tr key={index}>
                            {row.map((cell, index) => (
                                <Td key={index}>{cell}</Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TabelaLeitoFiltrante;