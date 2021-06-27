export interface UserInterface {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  grade: number;
}

export type UserPayload = {
  [UserActionTypes.AddAll]: UserInterface[];
  [UserActionTypes.Create]: UserInterface;
  [UserActionTypes.Delete]: {
    id: number;
  };
};

export enum UserActionTypes {
  AddAll = "ADD_ALL_USERS",
  Create = "CREATE_USER",
  Delete = "DELETE_USER",
}
