import { Flex, Image, Text } from '@chakra-ui/react'
import * as assets from '@/assets'
import { SocialLinks } from '../Header'
export const Footer = () => {
    return (
        <Flex
            backgroundColor={'black'}
            padding={2}
            textColor={'white'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Text textStyle={'p'} as={'p'}>
                My Endless Adventures © 2024
            </Text>
            <SocialLinks />
        </Flex>
    )
}
