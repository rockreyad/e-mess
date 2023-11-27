import { layerStyles } from './tl-styles/layer-styles'
import { textStyles } from './tl-styles/text-styles'
import { styles } from './styles'
import { colors } from './foundations/colors'
import { fonts } from './foundations/fonts'
import { ThemeConfig, ThemeOverride } from '@chakra-ui/react'

export const config: ThemeConfig = {
	useSystemColorMode: false,
	initialColorMode: 'dark',
	cssVarPrefix: 'ck',
}

export const overrides: ThemeOverride = {
	config,
	fonts,
	colors,
	styles,
	textStyles,
	layerStyles,
}
