"use client";

import React, { createContext } from "react";

import { DBUserPropertiesType } from "@types";

export const UserContext = createContext<{
  user: DBUserPropertiesType;
} | null>(null);

type IProps = {
  children: React.ReactNode;
  user: DBUserPropertiesType | null;
};

export const UserProvider: React.FC<IProps> = ({ children, user }) => {
  return (
    <UserContext.Provider value={user ? { user } : null}>
      {children}
    </UserContext.Provider>
  );
};
