import { useEffect, useState } from 'react'

export function InstagramFeed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('/api/fetch-instagram-posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        limit: 6, // number of posts to fetch
                    }),
                })

                const data = await response.json()
                setPosts(data.data)
            } catch (error) {
                console.error('Error fetching Instagram posts:', error)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div>
            <h1>Instagram Feed</h1>
        </div>
    )
}

export default InstagramFeed
