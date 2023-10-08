import { createContext } from "react";
import { User } from "../model/user";

type userContext = {
  users: User[],
  searchTerm: string,
  searchUser: (searchTerm: string) => void
}

export const UserContext = createContext<userContext>({} as userContext);