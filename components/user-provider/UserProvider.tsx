"use client";

import React, { createContext } from "react";

import { GetDBUserReturnType } from "@utils";
import { myDefaultUser } from "@utils/constants";

export const UserContext = createContext<{
  user: GetDBUserReturnType;
}>({ user: myDefaultUser });

type IProps = {
  children: React.ReactNode;
  user: GetDBUserReturnType;
};

export const UserProvider: React.FC<IProps> = ({ children, user }) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
