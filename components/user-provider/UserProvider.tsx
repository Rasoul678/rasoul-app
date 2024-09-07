"use client";

import React, { createContext } from "react";

import { DBUserPropertiesType } from "@types";

export const UserContext = createContext<{
  user: DBUserPropertiesType;
} | null>(null);

interface IProps {
  children: React.ReactNode;
  user: DBUserPropertiesType;
}

export const UserProvider: React.FC<IProps> = ({ children, user }) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
