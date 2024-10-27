import { serverService } from "@utils/api-service";

import MainPage from "./MainPage";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const Home = async ({ params, searchParams }: Props) => {
  const repoWithLangs = await serverService.getAllRepoWithLangs();

  return (
    <main className="min-h-screen">
      <MainPage repos={repoWithLangs} />
    </main>
  );
};

export default Home;
