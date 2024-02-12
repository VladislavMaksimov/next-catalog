import { useQuery, useQueryClient } from "react-query";
import { getUsers } from "../getUsers";

export const useGetUsers = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return { users: data, isLoading, isSuccess, isError, error };
};
