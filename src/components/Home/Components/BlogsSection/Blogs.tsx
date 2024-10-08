import { Box, Image as ChakraImage, Flex, Divider, Text, Stack } from '@chakra-ui/react'
import { useBlogs } from '@/hooks/useBlogs'
import * as _assets from '@/assets'
import Image from 'next/image'

export function BlogsSection() {
    const { allPosts, assets } = useBlogs()
    return (
        <Box width={'100%'} textAlign={'center'} px={6}>
            <Stack>
                <Flex align="center">
                    <Divider borderColor="black" flex="1" />
                    <Text mx="4" whiteSpace="nowrap">
                        Nieuwe blogs
                    </Text>
                    <Divider borderColor="black" flex="1" />
                </Flex>

                <Stack>
                    {allPosts?.slice(0, 3).map((blog) => {
                        const previewImageId = blog.fields.previewImage?.sys?.id
                        const imageUrl = assets[previewImageId]?.fields.file.url
                        return (
                            <Flex
                                backgroundColor={'#F3E4C7'}
                                border={'1px solid black'}
                                borderRadius={10}
                                padding={2}
                                gap={4}
                                key={blog.sys.id}
                                alignItems={'center'}
                            >
                                <ChakraImage borderRadius={10} height={20} width={20} src={imageUrl} alt="blog1" />
                                <Flex
                                    flexDirection={'column'}
                                    justifyContent={'center'}
                                    alignItems={'start'}
                                    width={'100%'}
                                    height={'100%'}
                                >
                                    <Text as={'h4'} textStyle={'h4'} textAlign={'start'}>
                                        {blog.fields.entryName.replace(/\b\w/g, (char) => char.toUpperCase())}
                                    </Text>
                                    <Divider borderColor="black" borderStyle={'dashed'} flex="1" marginTop={2} />{' '}
                                    <Flex
                                        gap={1}
                                        flexDirection={'row'}
                                        alignItems={'center'}
                                        height={'100%'}
                                        justifyContent={'center'}
                                        pt={1}
                                    >
                                        <Image src={_assets.CALENDAR_ICON} alt="" height={24} width={24} />
                                        <Text as={'p'} textStyle={'p'} pt={1}>
                                            {new Date(blog.fields.date).toLocaleDateString()}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        )
                    })}
                </Stack>
            </Stack>
        </Box>
    )
}

{
    /* <Slide
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
                {loading
                    ? Array(8)
                          .fill(0)
                          .map((_, index) => (
                              <Box key={index} p={2}>
                                  <Skeleton height="300px" borderRadius="10px" />
                              </Box>
                          ))
                    : blogs.map((blog) => {
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
            </Slide> */
}

{
    /* {selectedBlog && (
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
            )} */
}
