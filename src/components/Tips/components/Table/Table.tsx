import { Flex } from '@chakra-ui/react'
import { BlogCard } from './Card'
import { useBlogs } from '@/hooks/useBlogs'

export const BlogTable = () => {
    const { tips, assets } = useBlogs()

    return (
        <Flex
            flexDirection={'column'}
            width={'100*'}
            height={'100%'}
            gap={4}
            p={1}
            overflow={'hidden'}
            maxH={'55vh'}
            overflowY={'scroll'}
        >
            {tips.map((post, idx) => {
                const previewImageId = post.fields.previewImage?.sys?.id
                const imageUrl = assets[previewImageId]?.fields.file.url
                return (
                    <BlogCard
                        key={idx}
                        imageUrl={imageUrl}
                        blogName={post.fields.entryName.replace(/\b\w/g, (char) => char.toUpperCase())}
                        date={post.fields.date}
                        location={post.fields.location}
                        introText={''}
                    />
                )
            })}
        </Flex>
    )
}
