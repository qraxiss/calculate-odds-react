interface ResultTableProps {
    data: {
        over: number
        under: number
        odd: number
    }[]
}

import { Table, Thead, Tbody, Tr, Th, Td } from '../styles/table'

export function ResultTable(props: ResultTableProps) {
    const { data } = props
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Over</Th>
                    <Th>Under</Th>
                    <Th>Odd</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data.map((item, index) => (
                    <Tr key={index}>
                        <Td>{item.over}</Td>
                        <Td>{item.under}</Td>
                        <Td>{item.odd}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}
