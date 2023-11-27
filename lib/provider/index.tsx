import React, { FC, PropsWithChildren } from 'react'
import { QueryProvider } from './query-provider'
import { Chakra } from './chakra'

interface ProvidersProps extends PropsWithChildren {}

export const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<QueryProvider>
			<Chakra>{children}</Chakra>
		</QueryProvider>
	)
}
