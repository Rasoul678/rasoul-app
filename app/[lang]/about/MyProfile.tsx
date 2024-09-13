"use client";

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

  return (
    <>
      <ProfileMain />
      <ProfileDetails />
    </>
  );
};

export default MyProfile;
