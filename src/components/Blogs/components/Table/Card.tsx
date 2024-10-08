import { Divider, Box, Flex, Text, Image as ChakraImage } from '@chakra-ui/react'
import Image from 'next/image'
import * as assets from '@/assets'
export const BlogCard = ({
    imageUrl,
    blogName,
    date,
    location,
    introText,
}: {
    imageUrl: string
    blogName: string
    date: string
    location: {
        lat: number
        lon: number
    }
    introText: string
}) => {
    return (
        <Flex gap={2} width={'100%'}>
            <Image src={imageUrl} alt={''} height={96} width={96} className=" rounded-md" />
            <Flex flexDirection={'column'} width={'75%'}>
                <Box maxWidth="100%" overflow="hidden">
                    <Text as="h3" textStyle="h3">
                        {blogName}
                    </Text>
                </Box>
                <Divider />

                <Text> {new Date(date).toLocaleDateString()}</Text>
            </Flex>
        </Flex>
    )
}
