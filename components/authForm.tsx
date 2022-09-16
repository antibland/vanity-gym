import { Box, Input, Button, Grid, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, FormEvent, useState } from "react";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const res = await auth(mode, { email, password });
    setIsLoading(false);

    if (!res.error) router.push("/");
    else setError(res.error);
  };

  return (
    <Box height="100vh" width="100vw" bg="black">
      <Grid placeContent="center" height="calc(100vh - 101px)">
        <Box padding="50px" bg="gray-900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="3">
              <Input
                aria-label={`${mode} email`}
                placeholder="email"
                type="email"
                required
                color="white"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                aria-label={`${mode} password`}
                placeholder="password"
                type="password"
                required
                color="white"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                bg="green.500"
                isLoading={isLoading}
                sx={{
                  "&:hover": {
                    bg: "green.600",
                  },
                }}
              >
                {mode}
              </Button>
              {error && (
                <Flex color="red" direction="column" gap="2">
                  {" "}
                  <p>{error}</p>
                  <Image
                    src="https://c.tenor.com/KLMNgMCmBYgAAAAC/omg-weights.gif"
                    width={517}
                    height={280}
                    alt="bench press mistake"
                  />
                </Flex>
              )}
            </Flex>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default AuthForm;
