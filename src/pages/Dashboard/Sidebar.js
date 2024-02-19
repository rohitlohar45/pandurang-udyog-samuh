import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  UnorderedList,
  flexbox,
} from "@chakra-ui/react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    // <Box
    //   bg="gray.800"
    //   color="white"
    //   w="200px"
    //   h="100vh"
    //   borderRadius="0 10px 10px 0"
    //   px={4}
    //   py={"10%"}
    //   position="fixed"
    //   left={0}
    //   top={0}
    //   boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
    // >
    //   <UnorderedList className="side-bar__ul">
    //     <ListItem className="side-bar__item">
    //       <Button variant="link" color="white">
    //         Dashboard
    //       </Button>
    //     </ListItem>
    //     <ListItem className="side-bar__item">
    //       <Button variant="link" color="white">
    //         Profile
    //       </Button>
    //     </ListItem>
    //     <ListItem className="side-bar__item">
    //       <Button variant="link" color="white">
    //         Settings
    //       </Button>
    //     </ListItem>
    //   </UnorderedList>
    // </Box>
    <div className="Sidebar">
      <img src="/assets/img/logo-2.png" alt="" className="Sidebar__logo" />
      <ul className="Sidebar__list">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="Sidebar__row"
              key={key}
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => (window.location.pathname = val.link)}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
