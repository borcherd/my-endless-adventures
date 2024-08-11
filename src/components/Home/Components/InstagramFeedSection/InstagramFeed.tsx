import { Flex, Divider, Box, Text, Image as ChakraImage, Skeleton, SimpleGrid } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import * as consts from '@/consts'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import * as context from '@/context'
import { useInstagramPosts } from '@/hooks/useInstagramPosts'

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
    const { instagramPosts } = useInstagramPosts()

    return (
        instagramPosts && (
            <Box width={'100%'} textAlign={'center'}>
                <Flex align="center" px={6}>
                    <Divider borderColor="black" flex="1" />
                    <Text mx="4" whiteSpace="nowrap">
                        Instagram feed
                    </Text>
                    <Divider borderColor="black" flex="1" />
                </Flex>

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
                    {instagramPosts?.map((item, index) => (
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
            </Box>
        )
    )
}

export default InstagramFeed
