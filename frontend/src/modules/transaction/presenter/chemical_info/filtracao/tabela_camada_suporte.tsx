import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const TabelaCamadaSuporte: React.FC = () => {
    const tableData = [
        ["Tamanho (mm)", "Espessura (cm)"],
        ["2,4 a 4,8", "7,5"],
        ["4,8 a 12,5", "7,5"],
        ["12,5 a 19,0", "10,0"],
        ["19,0 a 38,0", "10,0"],
        ["38,0 a 63,0", "15,0"]
    ];

    return (
        <TableContainer className="dimensionsMinifiedTable" bg={useColorModeValue('white', 'gray.600')} top={0} left={0}>
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
    );
};

export default TabelaCamadaSuporte;