import * as global_components from '@/components/Global'
import { Box, Fade, ScaleFade, Stack } from '@chakra-ui/react'
import * as context from '@/context'
import { useBlogs } from '@/hooks/useBlogs'
import { useInstagramPosts } from '@/hooks/useInstagramPosts'
import { useContext, useEffect } from 'react'

export function PageWrapper({
    children,
    ...props
}: Readonly<{
    children: React.ReactNode
}>) {
    const { finalized } = useContext(context.loadingStateContext)
    const { fetchPosts: fetchBlogs } = useBlogs()
    const { fetchPosts: fetchInstagramPosts } = useInstagramPosts()

    useEffect(() => {
        fetchBlogs()
        fetchInstagramPosts()
    }, [])

    return (
        <Stack spacing={0} backgroundColor={'#FCF3E2'} width={'100%'}>
            <global_components.NavBar />
            <Box
                flex="1"
                maxWidth={'100%'}
                position="relative"
                minHeight={finalized ? 'auto' : '79vh'} // Fixed height while loading
            >
                <ScaleFade in={finalized} unmountOnExit={false}>
                    <Box width="100%" hidden={!finalized}>
                        {children}
                    </Box>
                </ScaleFade>
                {!finalized && (
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="#FCF3E2"
                        zIndex={10}
                    >
                        <global_components.GlobalLoadingAnimation />
                    </Box>
                )}
            </Box>
            <global_components.Footer />
        </Stack>
    )
}
