'use client'
import { useContext, useEffect, useState } from 'react'

import * as consts from '@/consts'
import * as context from '@/context'

export const useBlogs = () => {
    const [blogs, setBlogs] = useState<consts.IBlog[]>([])
    const [assets, setAssets] = useState<Record<string, consts.IBlogAsset>>({})
    const { setBlogsLoadingFinalized } = useContext(context.loadingStateContext)

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

            const data: consts.IBlogsResponse = await response.json()
            setBlogs([...data.items])
            const assetMap = data.includes.Asset.reduce(
                (acc, asset) => {
                    acc[asset.sys.id] = asset
                    return acc
                },
                {} as Record<string, consts.IBlogAsset>
            )
            setAssets(assetMap)
        } catch (error) {
            console.error('Error fetching blog posts:', error)
        } finally {
            setBlogsLoadingFinalized(true)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return { blogs, assets, fetchPosts }
}
