import * as blogsAssets from '@/assets/blogs'
import {
    Box,
    Grid,
    GridItem,
    Image as ChakraImage,
    Flex,
    Divider,
    Text,
    useBreakpointValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import { Blog, BlogsResponse, Asset } from './Blog.interfaces'

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
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

export function BlogsSection() {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [assets, setAssets] = useState<Record<string, Asset>>({})
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isMobile = useBreakpointValue({ base: true, md: false })

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('/api/fetch-blog-posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        limit: 8, // number of posts to fetch
                    }),
                })

                const data: BlogsResponse = await response.json()
                setBlogs([
                    ...data.items,
                    ...data.items,
                    ...data.items,
                    ...data.items,
                    ...data.items,
                    ...data.items,
                    ...data.items,
                    ...data.items,
                ])
                const assetMap = data.includes.Asset.reduce(
                    (acc, asset) => {
                        acc[asset.sys.id] = asset
                        return acc
                    },
                    {} as Record<string, Asset>
                )
                setAssets(assetMap)
            } catch (error) {
                console.error('Error fetching blog posts:', error)
            }
        }

        fetchPosts()
    }, [])

    const handleGridItemClick = (blog: Blog) => {
        setSelectedBlog(blog)
        onOpen()
    }

    return (
        <Box width={'100%'} textAlign={'center'}>
            <Flex align="center" px={6}>
                <Divider borderColor="black" flex="1" />
                <Text mx="4" whiteSpace="nowrap">
                    Nieuwe blogs
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
                {blogs.map((blog) => {
                    const previewImageId = blog.fields.previewImage.sys.id
                    const imageUrl = assets[previewImageId].fields.file.url
                    return (
                        <Box key={blog.sys.id + Math.random()} onClick={() => handleGridItemClick(blog)} p={2}>
                            <Box height="300px" overflow="hidden">
                                <ChakraImage
                                    src={imageUrl}
                                    alt={`grid-image-${blog.sys.id}`}
                                    objectFit="cover"
                                    height="100%"
                                    width="100%"
                                    borderRadius={10}
                                />
                            </Box>
                        </Box>
                    )
                })}
                {blogs.map((blog) => {
                    const previewImageId = blog.fields.previewImage.sys.id
                    const imageUrl = assets[previewImageId].fields.file.url
                    return (
                        <Box key={blog.sys.id + Math.random()} onClick={() => handleGridItemClick(blog)} p={2}>
                            <Box height="300px" overflow="hidden">
                                <ChakraImage
                                    src={imageUrl}
                                    alt={`grid-image-${blog.sys.id}`}
                                    objectFit="cover"
                                    height="100%"
                                    width="100%"
                                    borderRadius={10}
                                />
                            </Box>
                        </Box>
                    )
                })}
            </Slide>

            {selectedBlog && (
                <Modal isOpen={isOpen} onClose={onClose} isCentered size={isMobile ? 'full' : 'xl'}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{selectedBlog.fields.entryName}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {selectedBlog.fields.content.content.map((node: any, index: any) => {
                                switch (node.nodeType) {
                                    case 'heading-2':
                                        return (
                                            <Text as="h2" textStyle="h2" key={index}>
                                                {node.content[0].value}
                                            </Text>
                                        )
                                    case 'heading-4':
                                        return (
                                            <Text as="h4" textStyle="h4" key={index}>
                                                {node.content[0].value}
                                            </Text>
                                        )
                                    case 'paragraph':
                                        return <Text key={index}>{node.content[0].value}</Text>
                                    case 'embedded-asset-block':
                                        const asset = assets[node.data.target.sys.id]
                                        return (
                                            <ChakraImage
                                                key={index}
                                                src={asset.fields.file.url}
                                                alt={asset.fields.title}
                                                objectFit="cover"
                                                width="100%"
                                                my={4}
                                            />
                                        )
                                    default:
                                        return null
                                }
                            })}
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </Box>
    )
}
