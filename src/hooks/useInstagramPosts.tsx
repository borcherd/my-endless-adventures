'use client'
import { useContext, useEffect, useState } from 'react'

import * as consts from '@/consts'
import * as context from '@/context'

export const useInstagramPosts = () => {
    const [instagramPosts, setInstagramPosts] = useState<consts.IInstagramPost[]>([])
    const { setInstagramPostsLoadingFinalized } = useContext(context.loadingStateContext)

    const fetchPosts = async () => {
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
            setInstagramPosts(data)
        } catch (error) {
            console.error('Error fetching Instagram posts:', error)
            setInstagramPosts([])
        } finally {
            setInstagramPostsLoadingFinalized(true)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return { instagramPosts, fetchPosts }
}
