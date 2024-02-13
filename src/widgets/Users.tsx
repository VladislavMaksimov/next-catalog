import { useEffect } from "react";
import { toast } from "react-toastify";

import { useGetUsers } from "../backend/hooks/useGetUsers";
import { UsersTable } from "../features/UsersTable/UsersTable";

export const Users = () => {
  const { users, isSuccess, isError, error } = useGetUsers();

  useEffect(() => {
    if (isError && error instanceof Error) toast.error(error.message);
  }, [error, isError]);

  return (
    <main className="p-4">
      {isSuccess && users && <UsersTable users={users} />}
    </main>
  );
};
