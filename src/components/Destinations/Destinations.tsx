'use client'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect, useMemo } from 'react'

// Leaflet icon workaround (fixes missing marker icon issue in Next.js)
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useBlogs } from '@/hooks/useBlogs'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x.src,
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
})

export const MapWithPins: React.FC = () => {
    const { allPosts } = useBlogs()

    setTimeout(function () {
        window.dispatchEvent(new Event('resize'))
    }, 50)

    // Static pins data
    const pins = useMemo(
        () =>
            allPosts
                .filter((post) => post.fields.location)
                .map((post) => {
                    return {
                        position: [post.fields.location.lat, post.fields.location.lon] as [number, number],
                        title: post.fields.entryName,
                        description: new Date(post.fields.date).toLocaleDateString(),
                    }
                }),
        [allPosts]
    )
    // Ensure map tiles load correctly in Next.js
    useEffect(() => {
        import('leaflet')
    }, [])

    return (
        <div className="map-container">
            <MapContainer
                center={[51.505, -0.09]}
                zoom={3}
                style={{ height: '80vh', width: '100%' }} // Default size for desktop
                className="map-element"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Render static pins */}
                {pins.map((pin, index) => (
                    <Marker key={index} position={pin.position}>
                        <Popup>
                            <strong>{pin.title}</strong>
                            <br />
                            {pin.description}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}
