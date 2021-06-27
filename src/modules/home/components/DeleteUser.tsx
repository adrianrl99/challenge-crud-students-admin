import { mdiTrashCan } from "@mdi/js";
import {
  Modal,
  IconButton,
  AppColors,
  Button,
  Message,
  UserContext,
  Config,
} from "app";
import { useContext, useState } from "react";
import { DeleteUserProps } from "./DeleteUser.interface";

export default function DeleteUser({ user }: DeleteUserProps) {
  const [message, setMessage] = useState("");
  const { deleteUser } = useContext(UserContext);

  const onDelete = async (close: Function) => {
    const res = await fetch(Config.api.routes.users + "/" + user._id, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
    });
    const data = await res.json();

    if (data.message) {
      setMessage(message);
    } else if (res.status === 200) {
      deleteUser(data);

      close();
    }
  };

  return (
    <Modal
      button={(onClick) => (
        <IconButton
          icon={mdiTrashCan}
          onClick={onClick}
          color={AppColors.error.main}
        />
      )}
      children={(close) => (
        <>
          <Message message={message} />
          <h4>Sure you want to delete the user {user.firstName}?</h4>
          <Button
            text="Delete"
            onClick={() => onDelete(close)}
            color={AppColors.error.on}
            backgroundColor={AppColors.error.main}
          />
        </>
      )}
    />
  );
}
