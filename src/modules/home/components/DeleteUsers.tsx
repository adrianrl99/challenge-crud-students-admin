import { useContext, useState } from "react";
import { UserContext, AppColors, Button, Config, Message } from "app";
import { DeleteUsersProps } from "./DeleteUsers.interface";

export default function DeleteUsers({ close }: DeleteUsersProps) {
  const { selected, deleteUsers } = useContext(UserContext);
  const [message, setMessage] = useState("");

  const onDelete = async (close: Function) => {
    const res = await fetch(Config.api.routes.users, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selected),
    });
    const data = await res.json();

    if (data.message) {
      setMessage(message);
    } else if (res.status === 200) {
      deleteUsers(data);

      close();
    }
  };

  return (
    <>
      <Message message={message} />
      <h4>Sure you want to delete {selected.length} users?</h4>
      <Button
        text="Delete"
        onClick={() => onDelete(close)}
        color={AppColors.error.on}
        backgroundColor={AppColors.error.main}
      />
    </>
  );
}
