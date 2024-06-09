import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import * as carouselAssets from '@/assets/carouselImages'
import { Box, Image } from '@chakra-ui/react'

export function CarrouselSection() {
    const imageArray = Object.values(carouselAssets)

    return (
        <Carousel showStatus={false} showArrows={false} showThumbs={false}>
            {imageArray.map((item, idx) => (
                <Box
                    key={idx}
                    height={{ base: '250px', sm: '300px', md: '350px', lg: '400px' }}
                    overflow="hidden"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image
                        src={item.src}
                        alt={`carousel-image-${idx}`}
                        height={{ base: '250px', sm: '300px', md: '350px', lg: '400px' }}
                        objectFit="cover"
                    />
                </Box>
            ))}
        </Carousel>
    )
}
