'use client'

import { ChakraProvider } from '@chakra-ui/react'
import * as styles from '@/styles'
import { ReactNode, useEffect } from 'react'
import * as context from '@/context'

// 2. Extend the theme to include custom colors, fonts, etc
type Props = {
    children: ReactNode
}

// 3. Pass the `theme` prop to the `ChakraProvider`
export function Providers({ children }: Props) {
    return (
        <context.LoadingStateContextProvider>
            <ChakraProvider theme={styles.theme}>{children}</ChakraProvider>
        </context.LoadingStateContextProvider>
    )
}
