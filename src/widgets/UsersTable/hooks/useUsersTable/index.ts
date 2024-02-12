import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { User } from "../../../../pages/api/users";
import { columns } from "./columns";

export const useUsersTable = (users: User[], globalFilter: string) => {
  const table = useReactTable<User>({
    columns,
    data: users,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  return table;
};
