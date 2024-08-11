import { Box, Flex, Stack } from '@chakra-ui/react'
import * as home_components from './Components'

export function Home() {
    return (
        <Stack spacing={6}>
            <home_components.CarrouselSection />
            <Flex direction={{ base: 'column', md: 'row' }} gap={6} width="100%">
                <Box flex={{ base: '1 1 auto', md: '3 1 0%' }} width={{ base: '100%', md: '75%' }}>
                    <home_components.BlogsSection />
                </Box>
                <Box
                    flex={{ base: '1 1 auto', md: '1 1 0%' }}
                    width={{ base: '100%', md: '25%' }}
                    alignSelf={{ base: 'flex-start', md: 'stretch' }}
                >
                    <home_components.AboutSection />
                </Box>
            </Flex>{' '}
            <home_components.InstagramFeed />
        </Stack>
    )
}
