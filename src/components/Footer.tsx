import React from "react";
import A from "./A";
import { Box } from "@chakra-ui/react";
import { version } from "../../package.json";

/**
 * Footer for any page
 */
function Footer(props: React.ComponentPropsWithRef<"footer">) {
  return (
    <footer {...props}>
      <Box pt="2rem" pb="2rem" pl="20vw" pr="20vw" bg="white">
        Virtual Pinball Packages v{version} is{" "}
        <A href="https://scoop.sh/">a web search app to scoop virtual pinball bucket</A>. To install packages to you Pinball Setup, you need to use <A href="https://scoop.sh/">Scoop</A> project a command line installer. This wesite is created with <A href="https://github.com/mertd/shovel">Shovel</A> OpenSource Project.
        .{props.children}
      </Box>
    </footer>
  );
}

export default Footer;
