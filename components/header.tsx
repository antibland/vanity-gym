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
      aria-label="main navigation"
      display="flex"
      alignItems="center"
      paddingInline="3"
      position="fixed"
      top="0"
      left="0"
      right="0"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <Heading
          as="h1"
          whiteSpace="nowrap"
          color="white"
          transition="var(--transition-time-quick) color ease-in-out"
        >
          Vanity Gym
        </Heading>
        <Image src="/muscle.png" alt="muscle" width="80px" />
      </Box>
      <Box>
        <List display="flex">
          {navMenu.map(({ name, href, icon }) => (
            <ListItem paddingX="10px" key={name} fontSize="16px">
              <LinkBox>
                <Link href={href} passHref>
                  <LinkOverlay
                    color="white"
                    textShadow="headerOnDarkBG"
                    textTransform="uppercase"
                    fontSize="13px"
                  >
                    <>
                      <ListIcon
                        as={icon}
                        color="currentColor"
                        marginRight="5px"
                      />
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
