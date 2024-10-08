import { Box, Divider, Text, Flex, Image as ChakraImage, Stack } from '@chakra-ui/react'
import * as assets from '@/assets'

export function AboutSection() {
    return (
        <Box width="100%" textAlign="center" px={6}>
            <Stack>
                <Flex align="center">
                    <Divider borderColor="black" flex="1" />
                    <Text mx="4" whiteSpace="nowrap">
                        Wie ben ik
                    </Text>
                    <Divider borderColor="black" flex="1" />
                </Flex>
                <Box height="300px" overflow="hidden">
                    <ChakraImage
                        src={assets.MISC_ABOUT.src}
                        alt="image"
                        objectFit="cover"
                        height="100%"
                        width="100%"
                        borderRadius={10}
                    />
                </Box>
                <Text>
                    My Endless Adventures is een reisblog waar ik al mijn ervaringen en tips deel, zodat jullie het
                    beste uit jullie reis kunnen halen en een onvergetelijke ervaring zullen hebben.
                    <br />
                    liefs Imani.
                </Text>
            </Stack>
        </Box>
    )
}
