import { UserInterface, UserPayload } from "app";

export interface HomePageProps {
  users: UserInterface[];
}

export interface UserProviderProps {
  children: JSX.Element | JSX.Element[];
}

export type UserStateContextType = {
  users: UserInterface[];
};

export type HomePayload = UserPayload;

export type HomeActions = ActionMap<HomePayload>[keyof ActionMap<HomePayload>];

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
