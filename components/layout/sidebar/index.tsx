'use client'
import React, { useContext } from 'react'
import { RiDashboardLine } from 'react-icons/ri'
import { BiBasket } from 'react-icons/bi'
import {
	HiOutlineCalendar,
	HiOutlineChat,
	HiOutlineFolder,
} from 'react-icons/hi'
import NavItem from './nav-item'
import SectionDivider from './section-divider'
import { FaDiscord, FaIntercom, FaJira, FaSlack } from 'react-icons/fa'
import IntegrationItem from './integration-item'
import { FiPlus, FiPower, FiSettings } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import CollapsedItem from './collapsed-item'
import { Stack, Divider, Spacer } from '@chakra-ui/react'
import { NavContext } from '..'

const Sidebar = () => {
	const { isOpen } = useContext(NavContext)!
	const pathname = usePathname()
	const NavAction = isOpen ? CollapsedItem : NavItem
	const IntegrationAction = isOpen ? CollapsedItem : IntegrationItem
	return (
		<Stack
			layerStyle="card"
			rounded="xl"
			w={isOpen ? '60px' : '300px'}
			transition="width .4s ease-in-out"
			py={8}
			shadow="md"
			minH="full"
			spacing={2}
			fontSize="sm"
			display={{ base: 'none', md: 'initial' }}
			overflowX={isOpen ? 'initial' : 'clip'}
			whiteSpace="nowrap"
		>
			{routes.map((props, rid) => (
				<NavAction
					key={`nav-item-${rid}`}
					active={pathname === props.href}
					{...props}
				/>
			))}
			{isOpen ? <Divider /> : <SectionDivider>Help</SectionDivider>}
			{/* {integrations.map((props, iid) => (
        <IntegrationAction key={`int-item-${iid}`} {...props} />
      ))} */}
			{/* <IntegrationAction name="" icon={FiPlus} scheme="purple" /> */}
			<Spacer />
			<Divider display={{ md: 'none' }} />
			<NavAction name="Settings" icon={FiSettings} />
			<NavAction name="Logout" icon={FiPower} />
		</Stack>
	)
}

export default Sidebar

export const routes = [
	{ name: 'Dashboard', href: '/', icon: RiDashboardLine },
	{ name: 'Manage', href: '/team-chat', icon: HiOutlineChat, count: 3 },
	{ name: 'Expenses', href: '/calendar', icon: HiOutlineCalendar },
	{ name: 'Deposits', href: '/documents', icon: HiOutlineFolder },
	{ name: 'Report', href: '/store', icon: BiBasket },
]

export const integrations = [
	{
		name: 'Discord',
		scheme: 'linkedin',
		icon: FaDiscord,
	},
]
