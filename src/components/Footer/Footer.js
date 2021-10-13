/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://bit.ly/3fKQZaL"
          target="_blank"
        >
          {document.documentElement.dir === "rtl"
            ? " توقيت الإبداعية"
            : "Creative Tim "}
        </Link>
        {' Coded by '} 
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://appseed.us"
          target="_blank"
        >
          {document.documentElement.dir === "rtl" ? "AppSeed" : "AppSeed"}
        </Link>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link href="https://appseed.us/product/node-js-react-purity-dashboard"
            target="_blank"
            color="gray.400">
            {document.documentElement.dir === "rtl"
              ? "Product"
              : "Product"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400"
            target="_blank"
            href="https://appseed.us/support">
            {document.documentElement.dir === "rtl" ? "Support" : "Support"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
