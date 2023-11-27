'use client'
import React from 'react'
import Actions from './actions'
import { usePathname } from 'next/navigation'
import { Flex, Stack, Spacer, Text } from '@chakra-ui/react'
import Info from './info'
import NavButton from './navr-button'
import { routes } from '../layout/sidebar'

const Navbar = () => {
	const pathname = usePathname()

	const getRoute = () => {
		return routes.find(({ href }) => pathname === href)?.name
	}

	return (
		<Flex layerStyle="card" h="4.5rem" alignItems="center" p={5}>
			<Stack
				direction="row"
				w="full"
				alignItems="center"
				spacing={{ base: 0, md: 8 }}
			>
				<Info display={{ base: 'none', md: 'flex' }} />
				<NavButton />

				<Spacer display={{ md: 'none' }} />
				<Text
					textStyle="default"
					fontSize="xl"
					fontWeight="semibold"
					fontFamily="cursive"
					display={{ md: 'none' }}
				>
					{getRoute()}
				</Text>
				{/* <Search display={["none", , "initial"]} /> */}
				<Spacer />
				<Actions />
			</Stack>
		</Flex>
	)
}

export default Navbar
