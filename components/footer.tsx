import {
  Grid,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";
import Link from "next/link";
import { navMenu } from "./header";

const Footer = () => {
  return (
    <footer>
      <Grid
        gap="8"
        templateColumns="repeat(3, 1fr)"
        templateAreas={`"footerTop footerTop footerTop"
                        "footerCopyright . footerLinks"`}
      >
        <GridItem area="footerTop" maxWidth="36rem" marginInline="auto">
          <Heading as="h3" size="md" marginBlockEnd="1">
            Vanity Gym
          </Heading>
          <p>
            Vanity Gym is a web app that Andy Hoffman put together as to not go
            crazy during his unemployment. It is comprised of{" "}
            <a target="_blank" href="https://nextjs.org/" rel="noreferrer">
              Next.js
            </a>
            ,{" "}
            <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">
              Prisma{" "}
            </a>
            and{" "}
            <a href="https://chakra-ui.com/" target="_blank" rel="noreferrer">
              Chakra UI
            </a>
          </p>
        </GridItem>

        <GridItem area="footerCopyright">Copyright @2022</GridItem>
        <GridItem area="footerLinks">
          <nav aria-label="secondary navigation">
            <List display="flex" justifyContent="flex-end">
              {navMenu.map(({ name, href }: any) => (
                <ListItem paddingX="8px" key={name} fontSize="16px">
                  <LinkBox>
                    <Link href={href} passHref>
                      <LinkOverlay>{name}</LinkOverlay>
                    </Link>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </nav>
        </GridItem>
      </Grid>
    </footer>
  );
};

export default Footer;
