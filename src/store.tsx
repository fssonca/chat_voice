import React, { createContext, useReducer, ReactNode } from "react";

interface IState {}

interface IContextProps {
  state: IState;
  dispatch: ({ type, payload }: { type: string; payload?: any }) => void;
}

type IAction = {
  type: string;
  payload?: any;
};

const Store = createContext({} as IContextProps);

function reducer(state: IState, action: IAction): IState {
  return state;
}

const initialState: IState = {};

type Props = {
  children: JSX.Element;
};

const StateProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export { Store, StateProvider };
