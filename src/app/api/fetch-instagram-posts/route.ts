import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const body = await request.json()

    const { limit } = body

    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

    if (!accessToken) {
        return NextResponse.json({
            status: 500,
            body: {
                error: 'Instagram access token is not set',
            },
        })
    }

    try {
        const response = await fetch(
            `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${accessToken}&limit=${limit}`
        )

        if (!response.ok) {
            throw new Error('Failed to fetch Instagram posts')
        }

        const responseJson = await response.json()

        return new Response(JSON.stringify(responseJson), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    } catch (error: any) {
        console.error('Error occurred while fetching Instagram posts:', error)

        return NextResponse.json({
            status: 500,
            body: {
                error: 'Error occurred while fetching Instagram posts',
            },
        })
    }
}
