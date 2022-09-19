import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useMe } from "../lib/hooks";
import IndexLoggedOut from "../components/index/loggedOut";
import IndexLoggedIn from "../components/index/loggedIn";
import prisma from "../lib/prisma";
import ClassList from "../components/classList";

const Home: NextPage = ({ classes }: any) => {
  const { user } = useMe();

  return (
    <Box>
      <Head>
        <title>Vanity Gym — Home</title>
        <meta name="description" content="Vanity Gym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user?.error ? (
        <IndexLoggedOut style={{ marginBlockEnd: "15rem" }} />
      ) : (
        <IndexLoggedIn user={user} />
      )}

      <ClassList classes={classes} />
    </Box>
  );
};

export const getServerSideProps = async () => {
  const classes = await prisma.class.findMany({});
  const serializedClasses = await JSON.parse(JSON.stringify(classes));
  return { props: { classes: serializedClasses } };
};

export default Home;
