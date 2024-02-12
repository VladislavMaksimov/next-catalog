import { User } from "../../../../../pages/api/users";
import { checkSubstring } from "../../../../../utils/checkSubstring";

export const filterUserFullText = (fullText: string) => (user: User) => {
  const { firstName, lastName, email } = user;

  if (
    checkSubstring(firstName, fullText) ||
    checkSubstring(lastName, fullText) ||
    checkSubstring(email, fullText)
  )
    return true;

  return false;
};
