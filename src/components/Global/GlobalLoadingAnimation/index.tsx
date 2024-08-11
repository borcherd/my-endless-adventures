import { Flex } from '@chakra-ui/react'
import * as assets from '@/assets'
import { useLottie, LottieOptions } from 'lottie-react'
import { useEffect, useContext, useRef } from 'react'
import { loadingStateContext } from '@/context'

const defaultLottieOptions: LottieOptions = {
    animationData: assets.GLOBE_LOADING_LOTTIE,
    loop: false,
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
    const { setAnimationCompleted } = useContext(loadingStateContext)
    const hasCompletedOnce = useRef(false)

    const { View: lottieView, animationItem } = useLottie(defaultLottieOptions, defaultLottieStyle)

    useEffect(() => {
        if (animationItem) {
            const handleAnimationComplete = () => {
                if (!hasCompletedOnce.current) {
                    hasCompletedOnce.current = true
                    setAnimationCompleted()
                }
            }

            animationItem.addEventListener('complete', handleAnimationComplete)

            // Cleanup event listener when component unmounts
            return () => {
                if (animationItem) {
                    try {
                        animationItem.removeEventListener('complete', handleAnimationComplete)
                    } catch (error) {}
                }
            }
        }
    }, [animationItem, setAnimationCompleted])

    return (
        <Flex textColor={'white'} backgroundColor={'#FCF3E2'} alignItems={'center'} justifyContent={'center'}>
            {lottieView}
        </Flex>
    )
}
