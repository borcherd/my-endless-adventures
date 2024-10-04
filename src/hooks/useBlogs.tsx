'use client'
import { useContext, useEffect, useState } from 'react'

import * as consts from '@/consts'
import * as context from '@/context'

export const useBlogs = () => {
    const [allPosts, setAllPosts] = useState<consts.IBlog[]>([])
    const [blogs, setBlogs] = useState<consts.IBlog[]>([])
    const [guides, setGuides] = useState<consts.IBlog[]>([])
    const [tips, setTips] = useState<consts.IBlog[]>([])
    const [assets, setAssets] = useState<Record<string, consts.IBlogAsset>>({})
    const { setBlogsLoadingFinalized } = useContext(context.loadingStateContext)

    async function fetchPosts() {
        try {
            const response = await fetch('/api/fetch-blog-posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const data: consts.IBlogsResponse = await response.json()

            const sortedData = data.items.sort((a, b) => {
                const dateA = new Date(a.fields.date)
                const dateB = new Date(b.fields.date)
                return dateB.getTime() - dateA.getTime()
            })
            setAllPosts([...sortedData])

            const blogPosts = sortedData.filter((post) => post.fields.type.map((type) => type.trim()).includes('Blog'))
            setBlogs([...blogPosts])
            const guidePosts = sortedData.filter((post) =>
                post.fields.type.map((type) => type.trim()).includes('Guide')
            )
            setGuides([...guidePosts])
            const tipPosts = sortedData.filter((post) => post.fields.type.map((type) => type.trim()).includes('Tip'))
            setTips([...tipPosts])

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
        if (!allPosts.length) fetchPosts()
    }, [])

    return { allPosts, blogs, guides, tips, assets, fetchPosts }
}
