'use client'

import { overrides } from '@/style/theme'
import Fonts from '@/style/theme/foundations/fonts'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

const theme = extendTheme(overrides)
export function Chakra({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<ChakraProvider theme={theme}>
				<Fonts />
				<ColorModeScript initialColorMode={theme.config?.initialColorMode} />
				{children}
			</ChakraProvider>
		</CacheProvider>
	)
}
