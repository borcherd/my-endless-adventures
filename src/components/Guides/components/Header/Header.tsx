'use client'
import { Box, Image } from '@chakra-ui/react'
import { useBlogs } from '@/hooks/useBlogs'
import { Carousel } from 'react-responsive-carousel'

export const Header = () => {
    const { guides, assets: blogAssets } = useBlogs()

    const blogsPreviewImages = guides.splice(0, 3).map((post) => post.fields.previewImage.sys.id)
    const assets = Object.fromEntries(
        Object.entries(blogAssets).filter(([key, value]) => blogsPreviewImages.includes(key))
    )
    const assetArray = Object.values(assets)

    return (
        <Carousel autoPlay showIndicators={false} showStatus={false} showThumbs={false} infiniteLoop>
            {assetArray.splice(0, 3).map((item, idx) => (
                <Box
                    key={idx}
                    height={{ base: '250px', sm: '300px', md: '350px', lg: '400px' }}
                    overflow="hidden"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image
                        loading="eager"
                        src={item.fields.file.url}
                        alt={`carousel-image-${idx}`}
                        height={{ base: '250px', sm: '300px', md: '350px', lg: '400px' }}
                        objectFit="cover"
                        borderRadius={10}
                    />
                </Box>
            ))}
        </Carousel>
    )
}
