import Hero from "@components/home_hero/Hero";
import TimeLine from "@components/timeline/TimeLine";
import { serverService } from "@utils/api-service";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const Home = async ({ params, searchParams }: Props) => {
  const repoWithLangs = await serverService.getAllRepoWithLangs();

  return (
    <main className="min-h-screen">
      <Hero />
      <TimeLine repos={repoWithLangs} />
    </main>
  );
};

export default Home;
