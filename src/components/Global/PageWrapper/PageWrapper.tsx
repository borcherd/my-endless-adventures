import * as global_components from '@/components/Global'
import { Box, ScaleFade, Stack } from '@chakra-ui/react'
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
        <Stack spacing={0} backgroundColor={'#FCF3E2'} height="100vh" width="100%">
            {/* Header */}
            <Box as="header" zIndex={100}>
                <global_components.NavBar />
            </Box>

            {/* Scrollable Content */}
            <Box as="main" flex="1" overflowY="auto" backgroundColor="#FCF3E2" position="relative">
                <ScaleFade in={finalized} unmountOnExit={false}>
                    <Box
                        width={{
                            base: '100%',
                            md: '75%',
                        }}
                        margin="auto"
                        hidden={!finalized}
                    >
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

            {/* Footer */}
            <Box as="footer" zIndex={100}>
                <global_components.Footer />
            </Box>
        </Stack>
    )
}
