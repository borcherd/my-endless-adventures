'use client'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Stack, Collapse, useDisclosure } from '@chakra-ui/react'
import { useLottie, LottieOptions } from 'lottie-react'

import Link from 'next/link'
import Image from 'next/image'

import * as global_components from '@/components/Global'
import * as assets from '@/assets'
import * as consts from '@/consts'

const defaultLottieOptions: LottieOptions = {
    animationData: assets.HAMBURGER_LOTTIE,
    loop: true,
    autoplay: false,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const defaultLottieStyle = {
    height: 24,
    width: 24,
}

const menuItems = [
    { name: 'Blogs', href: '/' },
    { name: 'Bestemmingen', href: '/' },
    { name: 'Over mij', href: '/' },
    { name: 'Contact', href: '/' },
]

export const NavBar = () => {
    const { isOpen, onToggle } = useDisclosure()
    const [isOpenState, setIsOpenState] = useState<boolean>(false)

    useEffect(() => {
        setIsOpenState(!isOpen)
    }, [isOpen])

    return (
        <NavBarContainer>
            <Flex width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                <Link href={'/'}>
                    <global_components.Logo />
                </Link>
                <MenuToggle isOpen={isOpenState} toggle={onToggle} />
                <Box display={{ base: 'none', md: 'block' }}>
                    <MenuLinks />
                </Box>
                <Box display={{ base: 'none', md: 'block' }}>
                    <SocialLinks />
                </Box>
            </Flex>
            <Collapse unmountOnExit in={isOpen} animateOpacity>
                <MenuLinks />
                <SocialLinks />
            </Collapse>
        </NavBarContainer>
    )
}

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => {
    const { View: lottieView, goToAndStop } = useLottie(defaultLottieOptions, defaultLottieStyle)

    return (
        <Box
            display={{ base: 'block', md: 'none' }}
            onClick={() => {
                toggle()
                goToAndStop(isOpen ? 37 : 0, true)
            }}
        >
            <div className={'mb-4 mt-0'}>{lottieView}</div>
        </Box>
    )
}

const MenuItem = ({
    children,
    isLast,
    to = '/',
    ...rest
}: {
    children: React.ReactNode
    isLast?: boolean
    to?: string
}) => {
    return (
        <Link href={to}>
            <Text
                fontWeight={{ base: 500, md: 700 }}
                fontSize={{ base: 'medium', md: 'x-large' }}
                display="block"
                {...rest}
            >
                {children}
            </Text>
        </Link>
    )
}

const MenuLinks = () => {
    return (
        <Stack
            spacing={{ base: 4, md: 8 }}
            align={{ base: 'start', md: 'center' }}
            justify={{ base: 'center', md: 'center' }}
            direction={{ base: 'column', md: 'row' }}
            pt={{ base: 4, md: 0 }}
            pb={{ base: 4, md: 0 }}
        >
            {menuItems.map((item) => (
                <MenuItem to={item.href} key={item.name}>
                    {item.name}
                </MenuItem>
            ))}
        </Stack>
    )
}

export const SocialLinks = () => {
    return (
        <Stack direction={'row'} spacing={6}>
            {consts.socialItems.map((Icon) => {
                return (
                    <Link href={Icon.href} target="_blank" key={Math.random()}>
                        <Image height={24} width={24} src={Icon.iconSrc} alt="img"></Image>
                    </Link>
                )
            })}
        </Stack>
    )
}

const NavBarContainer = ({ children, ...props }: { children: React.ReactNode }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            // mb={8}
            p={8}
            bg={{ base: 'black', md: 'black' }}
            color={{ base: 'white', md: 'white' }}
            {...props}
        >
            {children}
        </Flex>
    )
}
