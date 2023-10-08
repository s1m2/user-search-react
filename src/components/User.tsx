import { User } from "../model/user";

function User ({ user }: { user: User }) {
  return <p>{ user.firstName} {user.lastName}</p>
}

export default User;