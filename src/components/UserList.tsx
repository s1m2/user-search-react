import { useContext } from 'react';
import User from './User';
import { UserContext } from '../context/userContext';
import { User as UserType } from '../model/user';

function UserList() {
  const { users } = useContext(UserContext);
  return (
    <div className='grid grid-cols-3 gap-8'>
      {users.length > 0 && users.map((user: UserType, index: number) => (
        <User user={user} key={index} />
      ))}
    </div>
  )     
}

export default UserList;