import { HStack, Avatar, AvatarBadge, Icon } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const Profile = () => {
  return (
    <HStack alignItems="center">
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="sm">
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Icon as={IoIosArrowDown} />
    </HStack>
  );
};

export default Profile;
