"use client";

import {
  Tooltip,
  LinkBox,
  IconButton,
  LinkOverlay,
  Icon,
  chakra,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { NavItem } from "./nav-item";
const CollapsedItem = (props: NavItem & { scheme?: string }) => {
  return (
    <Tooltip hasArrow label={props.name} placement="right">
      <LinkBox display="flex" justifyContent="center">
        <IconButton
          colorScheme={props.active ? "brand" : props.scheme}
          aria-label={props.name}
          variant={props.active ? "solid" : "ghost"}
          boxSize="40px"
          alignSelf="center"
          _focus={{ shadow: "none" }}
          icon={
            <>
              <Link href={props.href || ""}>
                <LinkOverlay>
                  <Icon as={props.icon} fontSize="lg" />
                </LinkOverlay>
              </Link>
              {props.count && (
                <chakra.span
                  pos="absolute"
                  top="-1px"
                  right="-1px"
                  px={2}
                  py={1}
                  fontSize="xs"
                  fontWeight="bold"
                  lineHeight="none"
                  color="pink.100"
                  transform="translate(50%,-50%)"
                  bg="pink.600"
                  rounded="full"
                >
                  {props.count}
                </chakra.span>
              )}
            </>
          }
        />
      </LinkBox>
    </Tooltip>
  );
};

export default CollapsedItem;
