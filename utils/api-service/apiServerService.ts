import { RepoType } from "@types";
import { octokit } from "@utils/octokit";

class APIServerSide {
  public getMyGitRepos = async () => {
    const { data: repos } = await octokit.request(
      "GET /users/rasoul678/repos?per_page=100"
    );

    return repos as RepoType[];
  };

  public getAllRepoWithLangs = async () => {
    const repos: RepoType[] = await this.getMyGitRepos();

    const langPromises = repos.map((repo) =>
      octokit.request("GET /repos/{owner}/{repo}/languages", {
        owner: "Rasoul678",
        repo: repo.name,
      })
    );
    const langResults = await Promise.all(langPromises);
    const langs: Record<string, any> = langResults.reduce((acc, val) => {
      const newLangs = {
        ...acc,
        [val.url.slice(39, -10)]: Object.entries(val.data),
      };
      return newLangs;
    }, {});

    const newRepo = repos
      .map((repo) => {
        repo["all_languages"] = langs[repo.name];
        return repo;
      })
      .sort(
        (a, b) =>
          Number(new Date(b.created_at)) - Number(new Date(a.created_at))
      )
      .filter((repo) => {
        return !repo.fork && repo.stargazers_count;
      })
      .slice(0, 20);

    return newRepo;
  };
}

export const serverService = new APIServerSide();
