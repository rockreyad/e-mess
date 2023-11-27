import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

const SectionDivider = (props: BoxProps) => {
	return <Box textTransform="uppercase" px={8} pt={4} {...props} />
}

export default SectionDivider
