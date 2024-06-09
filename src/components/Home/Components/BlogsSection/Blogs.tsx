import * as blogsAssets from '@/assets/blogs'
import { Box, Grid, GridItem, Image as ChakraImage, Flex, Divider, Text } from '@chakra-ui/react'

export function BlogsSection() {
    const imageArray = Object.values(blogsAssets)
    return (
        <Box width={'100%'} textAlign={'center'}>
            <Flex align="center" px={6}>
                <Divider borderColor="black" flex="1" />
                <Text mx="4" whiteSpace="nowrap">
                    Nieuwe blogs
                </Text>
                <Divider borderColor="black" flex="1" />
            </Flex>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                }}
                gap={6}
                p={6}
            >
                {imageArray.map((item, index) => (
                    <GridItem key={index}>
                        <Box height="300px" overflow="hidden">
                            <ChakraImage
                                src={item.src}
                                alt={`grid-image-${index}`}
                                objectFit="cover"
                                height="100%"
                                width="100%"
                                borderRadius={10}
                            />
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}
