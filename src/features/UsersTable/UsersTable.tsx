import { FC, useState } from "react";

import { User } from "../../pages/api/users";
import { Pagination } from "../../shared/Pagination/Pagination";
import { Table } from "../../shared/Table";
import { UsersControls } from "./UsersControls/UsersControls";
import { useUsersTable } from "./hooks/useUsersTable";

interface UsersTableProps {
  users: User[];
}

export const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const table = useUsersTable(users, globalFilter);
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-column gap-4">
        <UsersControls
          table={table}
          onFullTextSearch={(fullText: string) => {
            setGlobalFilter(fullText);
          }}
        />
        <Table table={table} />
      </div>
      <Pagination
        currentPage={table.getState().pagination.pageIndex}
        pagesCount={table.getPageCount()}
        canGoPrev={table.getCanPreviousPage()}
        canGoNext={table.getCanNextPage()}
        setPage={table.setPageIndex}
        goPrevPage={table.previousPage}
        goNextPage={table.nextPage}
      />
    </div>
  );
};
