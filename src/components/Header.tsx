import React from "react";
import A from "./A";
import { Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

/**
 * Header for any page
 */
function Header(props: React.ComponentPropsWithRef<"header">) {
  return (
    <header {...props}>
      <Box pt="1rem" pb="1rem" pl="20vw" pr="20vw" bg="gray.100">
        <Heading size="xl">
		  <img src="https://magadan.github.io/virtualpinballpackages/logo.png" alt="Visual Pinball" align="middle"></img>
          <Link to="/"></Link> 
        </Heading>
        <Heading size="sm">
          Find <A href="https://github.com/magadan/mgd-packages/tree/master/bucket">Virtual Pinball Resources</A>, like tables, image wheels and etc, instantly from the comfort of your browser and install with scoop.
		  <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Vpinball_cover.png" alt="Visual Pinball"></img>
        </Heading>
        {props.children}
      </Box>
    </header>
  );
}

export default Header;
