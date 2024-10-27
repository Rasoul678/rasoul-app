"use client";

import { useQuery } from "@tanstack/react-query";

import Hero from "@components/home_hero/Hero";
import TimeLine from "@components/timeline/TimeLine";
import { RepoType } from "@types";
import { clientService } from "@utils/api-service";

type Props = {
  repos: RepoType[];
};

const MainPage = ({ repos }: Props) => {
  const { data: user } = useQuery({
    queryKey: ["hydrate-notion-user"],
    queryFn: () => clientService.getDBUser(),
  });

  return (
    <>
      {/* <UserProvider user={user || null}> */}
      <Hero />
      <TimeLine repos={repos} />
      {/* </UserProvider> */}
    </>
  );
};

export default MainPage;
