'use client'
import { Box, Flex } from '@chakra-ui/react'
import * as assets from '@/assets'
import { useLottie, LottieOptions } from 'lottie-react'

const defaultLottieOptions: LottieOptions = {
    animationData: assets.GLOBE_LOADING_LOTTIE,
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const defaultLottieStyle = {
    height: 164,
    width: 164,
}

export const GlobalLoadingAnimation = () => {
    const { View: lottieView } = useLottie(defaultLottieOptions, defaultLottieStyle)

    return (
        <Flex textColor={'white'} backgroundColor={'#FCF3E2'} alignItems={'center'} justifyContent={'center'}>
            {lottieView}
        </Flex>
    )
}
