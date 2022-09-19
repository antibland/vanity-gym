import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdFacebook,
  MdPhone,
} from "react-icons/md";

import { BsInstagram } from "react-icons/bs";

export const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    href: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    href: "/search",
  },
  {
    name: "Library",
    icon: MdLibraryMusic,
    href: "/library",
  },
];

export const socialMenu = [
  {
    name: "Phone",
    icon: MdPhone,
    href: "/",
  },
  {
    name: "Facebook",
    icon: MdFacebook,
    href: "/fb",
  },
  {
    name: "Instagram",
    icon: BsInstagram,
    href: "/insta",
  },
];

const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <Box display="flex" alignItems="center">
        <Heading as="h1" whiteSpace="nowrap">
          Vanity Gym
        </Heading>
        <Image src="/muscle.png" alt="muscle" width="100px" />
      </Box>
      <Box>
        <List display="flex">
          {navMenu.map(({ name, href, icon }) => (
            <ListItem paddingX="20px" key={name} fontSize="16px">
              <LinkBox>
                <Link href={href} passHref>
                  <LinkOverlay>
                    <>
                      <ListIcon as={icon} color="black" marginRight="10px" />
                      {name}
                    </>
                  </LinkOverlay>
                </Link>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <List display="flex">
          {socialMenu.map(({ name, href, icon }) => (
            <ListItem paddingX="10px" key={name} fontSize="16px">
              <LinkBox>
                <Link href={href} passHref>
                  <LinkOverlay>
                    <>
                      <ListIcon as={icon} color="black" marginRight="6px" />
                      {name}
                    </>
                  </LinkOverlay>
                </Link>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Header;
