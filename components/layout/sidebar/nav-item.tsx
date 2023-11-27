'use client'

import React from 'react'
import NextLink from 'next/link'
import {
	BoxProps,
	Icon,
	LinkBox,
	LinkOverlay,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

export type NavItem = {
	icon: IconType
	active?: boolean
	count?: number
	href?: string
	name: string
}
const NavItem = (props: NavItem) => {
	const activeColor = props.active ? 'bg.100' : 'white'
	const activeProps: BoxProps = {
		color: activeColor,
		borderRightColor: props.active ? activeColor : 'transparent',
		bg: 'blackAlpha.300',
	}

	return (
		<LinkBox>
			<Stack
				direction="row"
				cursor="pointer"
				px={8}
				py={4}
				spacing={4}
				alignItems="center"
				fontWeight="semibold"
				transition="all .4s ease-in-out"
				borderRightWidth="3px"
				borderRightColor="transparent"
				_hover={activeProps}
				{...(props.active && activeProps)}
			>
				<Icon as={props.icon} fontSize="xl" />
				<LinkOverlay as={NextLink} href={props.href || ''} passHref>
					<Text as={'p'}>{props.name}</Text>
				</LinkOverlay>
				<Spacer />
				{props.count && (
					<Text
						as={'span'}
						display="inline-flex"
						alignItems="center"
						justifyContent="center"
						px={2}
						py={1}
						fontSize="xs"
						fontWeight="bold"
						lineHeight="none"
						color="pink.50"
						bg="pink.500"
						rounded="full"
					>
						{props.count}
					</Text>
				)}
			</Stack>
		</LinkBox>
	)
}

export default NavItem
