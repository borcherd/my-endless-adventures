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
