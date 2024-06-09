'use client'

import { ChakraProvider } from '@chakra-ui/react'
import * as styles from '@/styles'
import { ReactNode } from 'react'

// 2. Extend the theme to include custom colors, fonts, etc
type Props = {
    children: ReactNode
}

// 3. Pass the `theme` prop to the `ChakraProvider`
export function Providers({ children }: Props) {
    return <ChakraProvider theme={styles.theme}>{children}</ChakraProvider>
}
