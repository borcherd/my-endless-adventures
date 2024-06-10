import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const body = await request.json()

    const { limit } = body

    const spaceId = process.env.CONTENTFUL_SPACE_ID
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

    if (!spaceId || !accessToken) {
        return NextResponse.json({
            status: 500,
            body: {
                error: 'Contentful space ID or access token is not set',
            },
        })
    }

    try {
        const response = await fetch(
            `https://cdn.contentful.com/spaces/${spaceId}/entries?content_type=blogPost&limit=${limit}&access_token=${accessToken}`
        )

        if (!response.ok) {
            throw new Error('Failed to fetch Contentful posts')
        }

        const responseJson = await response.json()

        return new Response(JSON.stringify(responseJson), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    } catch (error: any) {
        console.error('Error occurred while fetching Contentful posts:', error)

        return NextResponse.json({
            status: 500,
            body: {
                error: 'Error occurred while fetching Contentful posts',
            },
        })
    }
}
