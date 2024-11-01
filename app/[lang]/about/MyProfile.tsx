"use client";

import { useEffect } from "react";

import { clientService } from "@utils/api-service";

import ProfileDetails from "./components/Details";
import ProfileMain from "./components/Main";

const MyProfile = () => {
  useEffect(() => {
    const getUser = async () => {
      const user = await clientService.getDBUser();
      console.log(user);
    };
    getUser();
  }, []);

  return (
    <>
      <ProfileMain />
      <ProfileDetails />
    </>
  );
};

export default MyProfile;
