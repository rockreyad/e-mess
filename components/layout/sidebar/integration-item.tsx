import {
	IconButtonProps,
	Stack,
	IconButton,
	Icon,
	useColorModeValue,
	Text,
} from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

type IntegrationItem = {
	icon: IconType
	scheme?: IconButtonProps['colorScheme']
	name: string
}
const IntegrationItem = (props: IntegrationItem) => {
	const hoverColor = useColorModeValue('brand.600', 'white')
	return (
		<Stack
			direction="row"
			cursor="pointer"
			px={8}
			py={3}
			fontWeight="semibold"
			alignItems="center"
			_hover={{
				color: hoverColor,
				bg: 'blackAlpha.300',
			}}
			transition="all .4s ease-in-out"
			spacing={4}
		>
			<IconButton
				aria-label="Interation"
				size="xs"
				variant="outline"
				isRound
				colorScheme={props.scheme}
				icon={<Icon as={props.icon} />}
			/>
			<Text>{props.name}</Text>
		</Stack>
	)
}

export default IntegrationItem
