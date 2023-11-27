import { Box } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

const Page = (props: PropsWithChildren) => {
	return <Box w="full">{props.children}</Box>
}

export default Page
