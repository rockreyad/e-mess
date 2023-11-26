import {
  useDisclosure,
  SlideFade,
  StackProps,
  Stack,
  IconButtonProps,
  IconButton,
  Icon,
  Box,
} from "@chakra-ui/react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { CgMenuMotion, CgMenuRightAlt } from "react-icons/cg";
import Notifications from "./notifications";
import Profile from "./profile";

const Actions = () => {
  const { onToggle, isOpen } = useDisclosure();
  return (
    <>
      <ActionsList display={{ base: "none", md: "flex" }} />
      <ActionsButton onClick={onToggle} isOpen={isOpen} />
      <Box pos="absolute" insetX="5" top="5rem" zIndex="overlay">
        <SlideFade in={isOpen} offsetY="90px">
          <ActionsList
            p={5}
            justify="center"
            rounded="3xl"
            shadow="lg"
            layerStyle="neutral"
            justifyContent="space-between"
            display={{ base: "flex", md: "none" }}
          />
        </SlideFade>
      </Box>
    </>
  );
};

const ActionsList = (props: StackProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={{ base: 2, md: 6 }}
      {...props}
    >
      <ThemeSwitcher />
      <Notifications />
      <Profile />
    </Stack>
  );
};

export default Actions;

const ActionsButton = (props: IconButtonProps | any) => {
  const { isOpen, ...rest } = props;
  const icon = isOpen ? CgMenuMotion : CgMenuRightAlt;
  return (
    <IconButton
      display={{ md: "none" }}
      colorScheme="brand"
      variant="ghost"
      fontSize="2xl"
      aria-label="Toggle Actions"
      icon={<Icon as={icon} />}
      transition="all .4s ease-in-out"
      {...rest}
    />
  );
};
