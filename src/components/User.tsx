import type { User } from "../model/user";

function User({ user }: { user: User }) {
  return (
    <div className="grid gap-3 shadow-lg p-4 border-2 border-green-500 rounded-lg transition-all hover:cursor-pointer hover:-translate-y-3 hover:bg-green-500 hover:text-white">
      <img src={user.image} alt={user.firstName} />
      <h2 className="text-2xl">{user.firstName} {user.lastName}</h2>
      <p>{user.company.name}</p>
      <p className="text-gray-500"> {user.username}</p>
    </div>
  )
}

export default User;