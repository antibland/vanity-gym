import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import { FC } from "react";

const IndexLoggedIn: FC<{ user: any }> = ({ user }: any) => {
  return (
    <Box>
      <Text>How are you doing{user?.name ? ` ${user?.name}` : ""}</Text>
    </Box>
  );
};

export default IndexLoggedIn;
