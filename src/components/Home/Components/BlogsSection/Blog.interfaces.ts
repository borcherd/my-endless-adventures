// types/blog.ts
export interface Asset {
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

export interface Blog {
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
    }
}

export interface BlogsResponse {
    sys: {
        type: string
    }
    total: number
    skip: number
    limit: number
    items: Blog[]
    includes: {
        Asset: Asset[]
    }
}
