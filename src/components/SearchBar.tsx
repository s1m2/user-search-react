import { useContext } from "react";
import { UserContext } from './../context/userContext'

function SearchBar() {
  const { searchTerm, searchUser } = useContext(UserContext);
  return <input type="text" placeholder='Search for a user...' value={searchTerm} onChange={(event) => searchUser(event.target.value)} className="border-2 border-green-500 p-5 w-full shadow-md mb-9 rounded-full" />
}

export default SearchBar;