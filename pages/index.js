import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "@layouts/ContainerBlock";
import FavoriteProjects from "@components/FavoriteProjects";
import LatestCode from "@components/LatestCode";
import Hero from "@components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Satwik Anmol - Developer, Writer, Creator"
      description="This is my personal profile portfolio"
    >
      <Hero />
      <FavoriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  // console.log("GITHUB_AUTH_TOKEN", process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
