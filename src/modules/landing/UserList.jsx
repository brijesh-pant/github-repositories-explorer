import React from "react";
import List from "@mui/material/List";

import UserListItem from "~/components/UserListItem";

import avatar1 from "~/assets/images/avatar/1.png";
import avatar2 from "~/assets/images/avatar/2.png";
import avatar3 from "~/assets/images/avatar/3.png";
import avatar4 from "~/assets/images/avatar/4.png";
import avatar5 from "~/assets/images/avatar/5.png";

const mockUsers = [
  {
    name: "tom",
    avatarSrc: avatar1,
  },
  {
    name: "mojombo",
    avatarSrc: avatar2,
  },
  {
    name: "tmcw",
    avatarSrc: avatar3,
  },
  {
    name: "h2non",
    avatarSrc: avatar4,
  },
  {
    name: "tomnomnom",
    avatarSrc: avatar5,
  },
];

const UserList = () => {
  return (
    <List
      sx={{
        height: "100%",
        width: "100%",
        minWidth: 360,
        bgcolor: "custom.200",
        borderRadius: "6px",
      }}
    >
      {mockUsers.map(({ avatarSrc, name }) => (
        <UserListItem key={name} avatarSrc={avatarSrc} name={name} />
      ))}
    </List>
  );
};

export default UserList;
