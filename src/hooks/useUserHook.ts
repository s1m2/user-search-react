import { useReducer, useEffect, useMemo, useCallback } from 'react';
import { getAllUsers } from '../lib/api';
import type { User } from '../model/user';

type UserState = {
  users: User[],
  searchTerm: string
}

type Actions = { type: 'setUserDetails', payload: [] } | { type: 'setSearchTerm', payload: string }

const initialState: UserState = {
  users: [],
  searchTerm: ''
}

function userReducer(state: UserState, actions: Actions) {
  switch (actions.type) {
    case 'setUserDetails':
      return {
        ...state,
        users: actions.payload
      }
    case 'setSearchTerm':
      return {
        ...state,
        searchTerm: actions.payload
      }
    default:
      return state
  }
}


function useUser() {
  const [{ users, searchTerm }, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();

    getAllUsers(controller.signal)
      .then((data) => dispatch({ type: 'setUserDetails', payload: data }))
      .catch((error) => console.error(error))

    return () => {
      controller.abort();
    }

  }, []);

  const filteredUsers = useMemo(() => users.filter((user) => user.firstName.toLowerCase().includes(searchTerm.toLowerCase())), [users, searchTerm]);

  const sortedUsers = useMemo(() => filteredUsers.sort((a: User, b:User) => a.firstName.localeCompare(b.firstName)), [filteredUsers]);
  
  const searchUser = useCallback((searchTerm: string) => dispatch({ type: 'setSearchTerm', payload: searchTerm }), []);

  return { users: sortedUsers, searchTerm, searchUser }
}

export default useUser;