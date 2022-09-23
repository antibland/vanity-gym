import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

const ClassList = ({ classes }: any) => {
  return (
    <Box as="section">
      <Heading
        as="h2"
        size="2xl"
        color="white"
        textAlign="center"
        marginBlockEnd="5"
        letterSpacing="1px"
        textShadow="headerOnDarkBG"
      >
        Our Classes
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" h="600px" className="class-grid">
        {classes.map(({ name, details, cover }: any) => {
          return (
            <GridItem
              pos="relative"
              className="class-grid-item"
              key={name}
              bgImage={cover}
              bgPos="center"
              bgRepeat="no-repeat"
              bgSize="cover"
            >
              <Box className="descriptions">
                <Heading as="h2" size="xl" marginBlockEnd="3">
                  {name}
                </Heading>
                <Text marginBlockEnd="5">{details}</Text>
                <Button
                  marginInline="auto"
                  display="block"
                  size="lg"
                  sx={{
                    "&:hover": {
                      transform: "scale(0.97)",
                      bg: "tan.900",
                    },
                  }}
                  bg="tan.500"
                >
                  Sign Up
                </Button>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ClassList;
