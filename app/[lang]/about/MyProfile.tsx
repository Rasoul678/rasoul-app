"use client";

import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";

import { UserContext } from "@components/user-provider";
import { clientService } from "@utils/api-service";

import ProfileDetails from "./components/Details";
import ProfileMain from "./components/Main";

const MyProfile = () => {
  const userContext = useContext(UserContext);

  //! Fetch user on the client
  const { data: user } = useQuery({
    queryKey: ["hydrate-notion-user"],
    queryFn: () => clientService.getNotionAuthUser(),
  });

  return (
    <>
      {user && (
        <>
          <ProfileMain user={userContext?.user} />
          <ProfileDetails />
        </>
      )}
    </>
  );
};

export default MyProfile;
