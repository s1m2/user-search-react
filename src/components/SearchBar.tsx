import { useContext } from "react";
import { UserContext } from './../context/userContext'

function SearchBar() {
  const { searchTerm, searchUser } = useContext(UserContext);
  return <input type="text" value={searchTerm} onChange={(event) => searchUser(event.target.value)} />
}

export default SearchBar;