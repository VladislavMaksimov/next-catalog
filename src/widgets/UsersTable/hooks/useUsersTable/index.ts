import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { User } from "../../../../pages/api/users";
import { columns } from "./columns";

export const useUsersTable = (users: User[]) => {
  const table = useReactTable<User>({
    columns,
    data: users,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  return table;
};
