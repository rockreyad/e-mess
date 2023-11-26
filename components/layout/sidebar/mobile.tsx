import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Stack,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import IntegrationItem from "./integration-item";
import NavItem from "./nav-item";
import SectionDivider from "./section-divider";
import { FiPlus, FiPower, FiSettings } from "react-icons/fi";
import { integrations, routes } from ".";
import { NavContext } from "..";

const MobileSidebar = () => {
  const router = useRouter();
  const { isOpen, onClose } = useContext(NavContext);

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, []);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay display={{ base: "initial", md: "none" }}>
        <DrawerContent layerStyle="neutral" py={8}>
          <Stack spacing={2} fontSize="sm">
            <DrawerCloseButton />
            {/* <Search w="fUll" py={2} px={5} /> */}
            {routes.map((props, rid) => (
              <NavItem
                key={`nav-item-${rid}`}
                active={router.pathname === props.href}
                {...props}
              />
            ))}
            <SectionDivider>Integrations</SectionDivider>
            {integrations.map((props, iid) => (
              <IntegrationItem key={`int-item-${iid}`} {...props} />
            ))}
            <IntegrationItem
              name="Add new plugin"
              icon={FiPlus}
              scheme="purple"
            />
            <SectionDivider />
            <NavItem name="Settings" icon={FiSettings} />
            <NavItem name="Logout" icon={FiPower} />
          </Stack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default MobileSidebar;
