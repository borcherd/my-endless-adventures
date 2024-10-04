export interface IInstagramPost {
    id: string
    caption: string
    media_type: 'VIDEO' | 'IMAGE' | 'CAROUSEL_ALBUM'
    media_url: string
    permalink: string
    thumbnail_url: string
    timestamp: string
    username: string
}

// types/blog.ts
export interface IBlogAsset {
    metadata: {
        tags: any[]
    }
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        environment: {
            sys: {
                id: string
                type: string
                linkType: string
            }
        }
        revision: number
        locale: string
    }
    fields: {
        title: string
        file: {
            url: string
            details: {
                size: number
                image: {
                    width: number
                    height: number
                }
            }
            fileName: string
            contentType: string
        }
    }
}

export interface IBlog {
    metadata: {
        tags: any[]
    }
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        environment: {
            sys: {
                id: string
                type: string
                linkType: string
            }
        }
        revision: number
        contentType: {
            sys: {
                id: string
                type: string
                linkType: string
            }
        }
        locale: string
    }
    fields: {
        content: {
            nodeType: string
            data: any
            content: Array<{
                nodeType: string
                data: any
                content: Array<{
                    nodeType: string
                    data: any
                    marks: any[]
                    value: string
                }>
            }>
        }
        entryName: string
        previewImage: {
            sys: {
                type: string
                linkType: string
                id: string
            }
        }
        date: string
        location: {
            lat: number
            lon: number
        }
        type: string[]
        Continent: string[]
    }
}

export interface IBlogsResponse {
    sys: {
        type: string
    }
    total: number
    skip: number
    limit: number
    items: IBlog[]
    includes: {
        Asset: IBlogAsset[]
    }
}
