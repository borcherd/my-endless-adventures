'use client'

import * as assets from '@/assets'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

export function Logo() {
    return (
        // <Flex alignItems={'center'} justifyItems={'center'}>
        // <Image width={72} height={72} src={assets.LOGO_SVG} alt="logo" hidden={true} />

        //     <Flex flexDirection={'column'}>
        //     <Text as="h4" textStyle="h4">My Endless</Text>
        //     <Text as="h4" textStyle="h4">Adventures</Text>
        //     </Flex>
        //   </Flex>
        <Text as="h4" textStyle="h4">
            LOGO
        </Text>
    )
}
