import { UserContext } from "../context/userContext";
import useUser from "../hooks/useUserHook";

type Props = {
  children: React.ReactNode
}

function UserProvider({ children }: Props) {
  const { users, searchTerm, searchUser } = useUser();

  return (
    <UserContext.Provider value={{ users, searchTerm, searchUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;