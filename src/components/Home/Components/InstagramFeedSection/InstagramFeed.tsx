import { Flex, Divider, Box, Text, Image as ChakraImage, Skeleton, SimpleGrid } from '@chakra-ui/react'
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
            slidesToShow: 5,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        },
    },
    {
        breakpoint: 300,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    },
]

export function InstagramFeed() {
    const [posts, setPosts] = useState<consts.IInstagramPost[]>([])
    const [loading, setLoading] = useState(true)

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
                setLoading(false)
            } catch (error) {
                console.error('Error fetching Instagram posts:', error)
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    useEffect(() => {
        console.log('posts', posts)
    }, [posts])

    return (
        <Box width={'100%'} textAlign={'center'}>
            <Flex align="center" px={6}>
                <Divider borderColor="black" flex="1" />
                <Text mx="4" whiteSpace="nowrap">
                    Instagram feed
                </Text>
                <Divider borderColor="black" flex="1" />
            </Flex>

            {loading ? (
                <Slide
                    slidesToScroll={2}
                    slidesToShow={2}
                    indicators={false}
                    autoplay={true}
                    responsive={responsiveSettings}
                    canSwipe={true}
                    easing={'ease'}
                    duration={2000}
                    arrows={false}
                    pauseOnHover={true}
                    infinite={true}
                    transitionDuration={1000}
                >
                    {Array(8)
                        .fill(0)
                        .map((_, index) => (
                            <Box key={index} p={2}>
                                <Skeleton height="300px" borderRadius="10px" />
                            </Box>
                        ))}
                </Slide>
            ) : (
                <Slide
                    slidesToScroll={2}
                    slidesToShow={2}
                    indicators={false}
                    autoplay={true}
                    responsive={responsiveSettings}
                    canSwipe={true}
                    easing={'ease'}
                    duration={2000}
                    arrows={false}
                    pauseOnHover={true}
                    infinite={true}
                    transitionDuration={1000}
                >
                    {posts.map((item, index) => (
                        <Box
                            key={item.id}
                            p={2}
                            onClick={() => {
                                console.log('clicked', item)
                            }}
                        >
                            <ChakraImage
                                src={item.media_type === 'VIDEO' ? item.thumbnail_url : item.media_url}
                                alt={`grid-image-${index}`}
                                borderRadius="10px"
                                height="300px"
                                objectFit="cover"
                                width="100%"
                            />
                        </Box>
                    ))}
                </Slide>
            )}
        </Box>
    )
}

export default InstagramFeed
