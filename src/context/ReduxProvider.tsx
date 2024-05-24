"use client";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export type TReduxProvider = { children: ReactNode };

const ReduxProvider = ({ children }: TReduxProvider) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
