import {
  Table as TableType,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import { User } from "../pages/api/users";
import { FC } from "react";
import { Table as RBTable } from "react-bootstrap";

export interface TableProps {
  table: TableType<any>;
}

export const Table: FC<TableProps> = ({ table }) => {
  return (
    <RBTable striped bordered hover>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </RBTable>
  );
};
