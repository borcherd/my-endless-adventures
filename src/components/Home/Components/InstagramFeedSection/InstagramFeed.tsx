import { Flex, Divider, Box, Text, Image as ChakraImage } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import * as consts from '@/consts'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        },
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        },
    },
]

export function InstagramFeed() {
    const [posts, setPosts] = useState<consts.IInstagramPost[]>([])

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('/api/fetch-instagram-posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        limit: 8, // number of posts to fetch
                    }),
                })

                const data: consts.IInstagramPost[] = (await response.json()).data
                setPosts(data)
            } catch (error) {
                console.error('Error fetching Instagram posts:', error)
            }
        }

        fetchPosts()
    }, [])

    return (
        <Box width={'100%'} textAlign={'center'}>
            <Flex align="center" px={6}>
                <Divider borderColor="black" flex="1" />
                <Text mx="4" whiteSpace="nowrap">
                    Instagram feed
                </Text>
                <Divider borderColor="black" flex="1" />
            </Flex>

            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
                {posts.length > 0 ? (
                    posts.map((item, index) => (
                        <Box key={item.id} p={2}>
                            <ChakraImage
                                src={item.media_type === 'VIDEO' ? item.thumbnail_url : item.media_url}
                                alt={`grid-image-${index}`}
                                borderRadius="10px"
                                height="300px"
                                objectFit="cover"
                                width="100%"
                            />
                        </Box>
                    ))
                ) : (
                    <Text>Loading...</Text>
                )}
            </Slide>
        </Box>
    )
}

export default InstagramFeed
