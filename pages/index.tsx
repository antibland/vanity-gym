import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useMe } from "../lib/hooks";
import IndexLoggedOut from "../components/index/loggedOut";
import IndexLoggedIn from "../components/index/loggedIn";

const Home: NextPage = () => {
  const { user } = useMe();

  return (
    <Box>
      <Head>
        <title>Vanity Gym — Home</title>
        <meta name="description" content="Vanity Gym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user?.error ? <IndexLoggedOut /> : <IndexLoggedIn user={user} />}
    </Box>
  );
};

export default Home;
