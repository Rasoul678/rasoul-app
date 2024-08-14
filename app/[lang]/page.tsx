import Hero from "@components/home_hero/Hero";
import TimeLine from "@components/timeline/TimeLine";
import { serverService } from "@utils/api-service";

const Home = async () => {
  const repoWithLangs = await serverService.getAllRepoWithLangs();

  return (
    <main className="min-h-screen">
      <Hero />
      <TimeLine repos={repoWithLangs} />
    </main>
  );
};

export default Home;
