'use client'

import * as assets from '@/assets'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

export function Logo() {
    return (
        <Box
            width={{ base: '100px', md: '150px' }} // Width: 100px on mobile, 150px on desktop
            height={{ base: '50px', md: '75px' }} // Height: 50px on mobile, 75px on desktop
            position="relative" // Required for next/image to fill the container
        >
            <Image
                src={assets.LOGO.src}
                alt="logo"
                layout="fill" // Fill the container
                objectFit="contain" // Contain the image within the box
            />
        </Box>
    )
}
