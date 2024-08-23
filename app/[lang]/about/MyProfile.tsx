"use client";

import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { clientService } from "@utils/api-service";

import ProfileDetails from "./components/Details";
import ProfileMain from "./components/Main";

const MyProfile = () => {
  //! Fetch user on the client
  const { data: user } = useQuery({
    queryKey: ["hydrate-notion-user"],
    queryFn: () => clientService.getNotionAuthUser(),
  });

  useEffect(() => {
    const getUser = async () => {
      const user = await clientService.getDBUser();
      console.log(user);
    };
    getUser();
  }, []);

  return (
    <>
      {user && (
        <>
          <ProfileMain user={user} />
          <ProfileDetails />
        </>
      )}
    </>
  );
};

export default MyProfile;
