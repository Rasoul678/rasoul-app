"use client";

import { useEffect } from "react";
import ProfileDetails from "./components/Details";
import ProfileMain from "./components/Main";
import { useQuery } from "@tanstack/react-query";
import { clientService } from "@utils/api-service";

const MyProfile = () => {
  //! Fetch user on the client
  const {
    data: user,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["hydrate-notion-user"],
    queryFn: () => clientService.getNotionUser(),
    keepPreviousData: true,
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
