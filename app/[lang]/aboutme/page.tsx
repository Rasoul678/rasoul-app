import { notionService } from "@utils/api-service";
import MyProfile from "./MyProfile";
import getQueryClient from "@utils/react-query/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@utils/react-query/hydrate.client";

const getUser = async () => {
  const users = await notionService.getNotionUser();

  return users.results[0];
};

const ProfilePage = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["hydrate-notion-user"],
    queryFn: getUser,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <main className="md:p-14 mt-[7rem] md:mt-[3rem] mx-4">
        <section className="px-3 bg-gray-900 rounded-xl">
          <Hydrate state={dehydratedState}>
            <MyProfile />
          </Hydrate>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
