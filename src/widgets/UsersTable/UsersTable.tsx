import { FC } from "react";
import { User } from "../../pages/api/users";
import { useUsersTable } from "./hooks/useUsersTable";
import { Pagination } from "../../shared/Pagination/Pagination";
import { useFilterUsers } from "./hooks/useFilterUsers/useFilterUsers";
import { Table } from "../../shared/Table";
import { UsersControls } from "./UsersControls/UsersControls";

interface UsersTableProps {
  users: User[];
}

export const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const { filteredUsers, setFilters } = useFilterUsers(users);
  const table = useUsersTable(filteredUsers);
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-column gap-4">
        <UsersControls
          table={table}
          onFullTextSearch={(fullText: string) =>
            setFilters((prev) => ({ ...prev, fullText }))
          }
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
