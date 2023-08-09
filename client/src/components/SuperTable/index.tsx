import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  TableProps,
} from "@chakra-ui/react";

interface SuperTableProps extends TableProps {
  columns: {
    label: string;
    accessor: string;
  }[];
  data: {
    [key: string]: string | number;
  }[];
}

export const SuperTable = ({ columns, data, ...props }: SuperTableProps) => {
  return (
    <TableContainer>
      <Table variant="simple" {...props}>
        <TableCaption>Procure seus produtos aqui</TableCaption>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column.accessor}>
                {column.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr key={row.id}>
              {columns.map((column) => (
                <Td key={column.accessor}>{row[column.accessor]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
