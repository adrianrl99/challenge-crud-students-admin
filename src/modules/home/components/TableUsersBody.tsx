import { UserContext, UserRow } from "app";
import { useContext, useEffect } from "react";

export default function TableUsersBody() {
  const { users } = useContext(UserContext);

  return (
    <tbody>
      {users.map((user) => (
        <UserRow key={user._id} user={user} />
      ))}
    </tbody>
  );
}
