import { User } from "../pages/api/users";

export const getUsers = async (): Promise<User[] | never> => {
  const url = `${process.env.NEXT_PUBLIC_BASE}/users`;
  try {
    const res = await fetch(url);
    if (res.status !== 200)
      return Promise.reject(
        new Error(`Response returned with status ${res.status}`),
      );
    const data = await res.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
