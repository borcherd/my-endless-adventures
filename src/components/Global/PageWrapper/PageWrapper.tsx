'use client'

import * as global_components from '@/components/Global'
import { Box, Stack, useEditable } from '@chakra-ui/react'
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
        <Stack spacing={0} backgroundColor={'#FCF3E2'} width={'100%'} minHeight={'100vh'}>
            <global_components.NavBar />
            {finalized ? (
                <Box flex="1" maxWidth={'100%'}>
                    {children}
                </Box>
            ) : (
                <Box flex="1" justifyContent={'center'} alignContent={'center'}>
                    <global_components.GlobalLoadingAnimation />
                </Box>
            )}
            <global_components.Footer />
        </Stack>
    )
}
