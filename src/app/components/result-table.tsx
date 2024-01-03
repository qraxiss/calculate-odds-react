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

interface ResultTableV2Props {
    data: { [key: string]: any }[]
}

export function ResultTableV2(props: ResultTableV2Props) {
    const { data } = props

    // Extract column names from the first item in the data array
    const columns = Object.keys(data[0] || {})

    return (
        <Table>
            <Thead>
                <Tr>
                    {columns.map((column, index) => (
                        <Th key={index}>{column}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {data.map((item, rowIndex) => (
                    <Tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <Td key={colIndex}>{item[column]}</Td>
                        ))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}
