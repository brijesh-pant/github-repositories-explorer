import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import UserListItem from ".";

import avatar1 from "~/assets/images/avatar/1.png";
import avatar2 from "~/assets/images/avatar/2.png";
import avatar3 from "~/assets/images/avatar/3.png";
import avatar4 from "~/assets/images/avatar/4.png";
import avatar5 from "~/assets/images/avatar/5.png";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/UserListItem",
  component: UserListItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

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

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = {
  render: () => (
    <UserListItem
      avatarSrc={avatar1}
      key="gaearon"
      name="gaearon"
      onClick={() => {}}
    />
  ),
};

const UserList = () => (
  <List sx={{ width: "100%", minWidth: 360, bgcolor: "background.paper" }}>
    {mockUsers.map(({ avatarSrc, name }) => (
      <UserListItem
        key={name}
        avatarSrc={avatarSrc}
        name={name}
        onClick={() => {}}
      />
    ))}
  </List>
);
export const All = {
  render: () => <UserList />,
};
