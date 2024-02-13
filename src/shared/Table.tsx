import { Table as TableType, flexRender } from "@tanstack/react-table";
import { FC } from "react";
import { Table as RBTable } from "react-bootstrap";

import { SortAscIcon, SortDescIcon, SortIcon } from "../assets/icons";
import { IconButton } from "./IconButton/IconButton";

export interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                <div
                  className="d-flex justify-content-between align-items-center w-100"
                  role={header.column.getCanSort() ? "button" : undefined}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  {header.column.getCanSort() &&
                    {
                      asc: <IconButton icon={<SortAscIcon />} />,
                      desc: <IconButton icon={<SortDescIcon />} />,
                      false: <IconButton icon={<SortIcon />} />,
                    }[header.column.getIsSorted().toString()]}
                </div>
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
