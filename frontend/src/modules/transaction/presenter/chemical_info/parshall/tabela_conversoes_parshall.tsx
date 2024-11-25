import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const TabelaConversoesParshall: React.FC = () => {
    const tableData = [
        ["W (pol,pé)", "m", "K1", "N1"],
        ["3\"", "0,075", "3,072", "0,646"],
        ["6\"", "0,150", "1,842", "0,633"],
        ["9\"", "0,229", "1,505", "0,654"],
        ["1'", "0,305", "1,276", "0,657"],
        ["1 1/2'", "0,460", "0,966", "0,650"],
        ["2'", "0,610", "0,795", "0,645"],
        ["3'", "0,915", "0,607", "0,639"],
        ["4'", "1,220", "0,505", "0,634"],
        ["5'", "1,525", "0,436", "0,630"],
        ["6'", "1,830", "0,389", "0,627"],
        ["7'", "2,135", "0,352", "0,625"],
        ["8'", "2,440", "0,324", "0,623"]
    ];
 

    return (
        <TableContainer className="tabelaConversoesParshall" bg={useColorModeValue('white', 'gray.600')} mt={2}>
            <Table size={"sm"}>
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
    )
};

export default TabelaConversoesParshall;