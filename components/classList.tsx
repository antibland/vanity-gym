import { Grid, GridItem, Text } from "@chakra-ui/layout";

const ClassList = ({ classes }: any) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" h="600px">
      {classes.map(({ name, details, cover }: any) => {
        return (
          <GridItem
            key={name}
            bgImage={cover}
            bgPos="center"
            bgRepeat="no-repeat"
          >
            <Text>{name}</Text>
            <Text>{details}</Text>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ClassList;
