'use client'
import * as global_components from '@/components/Global'
import * as components from '@/components'
import { useMemo } from 'react'
import dynamic from 'next/dynamic'
export default function AboutMe() {
    const Map = useMemo(
        () =>
            dynamic(() => import('@/components/Destinations/Destinations').then((mod) => mod.MapWithPins), {
                loading: () => <p>A map is loading</p>,
                ssr: false,
            }),
        []
    )

    return (
        <global_components.PageWrapper>
            <Map />
        </global_components.PageWrapper>
    )
}
