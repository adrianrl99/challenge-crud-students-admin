import { mdiClose, mdiContentSave, mdiPencil } from "@mdi/js";
import { ChangeEvent, useContext, useState } from "react";
import {
  AppColors,
  IconButton,
  DeleteUser,
  Config,
  UserInterface,
  UserContext,
} from "app";
import { UserRowProps } from "./UserRow.interface";

export default function UserRow({ user }: UserRowProps) {
  const [edit, setEdit] = useState(false);
  const { selected, updateUser, addSelected } = useContext(UserContext);

  const [state, setState] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    age: user.age,
    grade: user.grade,
  });

  const onSave = async () => {
    const res = await fetch(Config.api.routes.users + "/" + user._id, {
      method: "PUT",
      body: JSON.stringify({ ...user, ...state }),
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.message) {
    } else if (res.status === 200) {
      updateUser(data);

      setEdit(false);
    }
  };

  const onFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      firstName: e.target.value,
    });
  };
  const onLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      lastName: e.target.value,
    });
  };
  const onEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      email: e.target.value,
    });
  };
  const onAge = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      age: Number(e.target.value),
    });
  };
  const onGrade = (e: ChangeEvent<HTMLSelectElement>) => {
    setState({
      ...state,
      grade: Number(e.target.value),
    });
  };

  return (
    <>
      <tr>
        <td>
          <input
            type="checkbox"
            checked={selected.includes(user._id)}
            onChange={() => addSelected(user)}
          />
        </td>
        <td>
          {!edit ? (
            user.firstName
          ) : (
            <input
              defaultValue={user.firstName}
              type="text"
              name="firstname"
              onChange={onFirstName}
              required
              pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
            />
          )}
        </td>
        <td>
          {!edit ? (
            user.lastName
          ) : (
            <input
              defaultValue={user.lastName}
              type="text"
              name="lastname"
              onChange={onLastName}
              required
              pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
            />
          )}
        </td>
        <td>
          {!edit ? (
            user.email
          ) : (
            <input
              defaultValue={user.email}
              type="email"
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              name="email"
              onChange={onEmail}
              required
            />
          )}
        </td>
        <td>
          {!edit ? (
            user.age
          ) : (
            <input
              defaultValue={user.age}
              type="number"
              name="age"
              onChange={onAge}
              required
              min={1}
              max={150}
            />
          )}
        </td>
        <td>
          {!edit ? (
            user.grade
          ) : (
            <select
              name="grade"
              onChange={onGrade}
              required
              defaultValue={user.grade}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        </td>
        <td className="actions">
          {!edit ? (
            <IconButton
              icon={mdiPencil}
              onClick={(e) => {
                setEdit(true);
              }}
              color={AppColors.warning.main}
            />
          ) : (
            <IconButton
              icon={mdiContentSave}
              onClick={onSave}
              color={AppColors.success.main}
            />
          )}
          {!edit ? (
            <DeleteUser user={user} />
          ) : (
            <IconButton
              icon={mdiClose}
              onClick={(e) => {
                setEdit(false);
              }}
              color={AppColors.error.main}
            />
          )}
        </td>
      </tr>
      <style jsx>{`
        input[type="checkbox"] {
          transform: scale(1.5);
        }
        tr:hover {
          background-color: #dadada;
        }
        td {
          font-size: 18px;
          padding: 10px 15px;
        }
        .actions {
          display: flex;
        }
      `}</style>
    </>
  );
}
