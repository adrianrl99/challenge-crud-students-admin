import { UserProviderProps } from "app";
import { UserInterface } from "interfaces";
import { createContext, useState } from "react";

type InitStateType = {
  users: UserInterface[];
  selected: number[];
  addAllUsers: (users: UserInterface[]) => void;
  addUser: (user: UserInterface) => void;
  deleteUser: (user: UserInterface) => void;
  deleteUsers: (deleted: number[]) => void;
  updateUser: (user: UserInterface) => void;
  addAllSelected: () => void;
  addSelected: (user: UserInterface) => void;
};

export const initialState: InitStateType = {
  users: [],
  selected: [],
  addAllUsers: (users: UserInterface[]) => {},
  addUser: (user: UserInterface) => {},
  deleteUser: (user: UserInterface) => {},
  deleteUsers: (deleted: number[]) => {},
  updateUser: (user: UserInterface) => {},
  addAllSelected: () => {},
  addSelected: (user: UserInterface) => {},
};

export const UserContext = createContext(initialState);

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState(initialState.users);
  const [selected, setSelected] = useState(initialState.selected);

  const addAllUsers = (users: UserInterface[]) => setUsers(users);

  const addUser = (user: UserInterface) => setUsers([...users, user]);

  const deleteUser = (user: UserInterface) =>
    setUsers(users.filter((item) => item._id !== user._id));

  const deleteUsers = (deleted: number[]) => {
    setUsers(users.filter((item) => !deleted.includes(item._id)));
  };

  const updateUser = (user: UserInterface) => {
    const index = users.findIndex((item) => item._id === user._id);
    const newState = [...users];
    newState[index] = user;
    setUsers(newState);
  };

  const addAllSelected = () => {
    if (selected.length !== users.length) {
      const newSelected = [...selected];
      users.forEach((user) => {
        !newSelected.includes(user._id) && newSelected.push(user._id);
      });
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  const addSelected = (user: UserInterface) => {
    if (selected.includes(user._id)) {
      setSelected(selected.filter((item) => item !== user._id));
    } else {
      setSelected([...selected, user._id]);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        selected,
        addAllUsers,
        addUser,
        deleteUser,
        deleteUsers,
        updateUser,
        addAllSelected,
        addSelected,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
