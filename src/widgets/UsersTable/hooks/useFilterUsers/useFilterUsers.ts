import { useEffect, useMemo, useState } from "react";
import { User } from "../../../../pages/api/users";
import { filterUserFullText } from "./utils/filterUserFullText";

export interface UserFilters {
  fullText: string | undefined;
}

export const useFilterUsers = (users: User[]) => {
  const [filters, setFilters] = useState<UserFilters>({
    fullText: undefined,
  });
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  const { fullText } = filters;

  useEffect(() => {
    let newFilteredUsers = [...users];
    if (fullText)
      newFilteredUsers = newFilteredUsers.filter(filterUserFullText(fullText));
    setFilteredUsers(newFilteredUsers);
  }, [fullText, users]);

  return { filteredUsers, setFilters };
};
