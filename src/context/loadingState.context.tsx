'use client'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export const loadingStateContext = createContext({
    finalized: false as boolean,
    setBlogsLoadingFinalized: (finalized: boolean) => {},
    setInstagramPostsLoadingFinalized: (finalized: boolean) => {},
})

export const LoadingStateContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [finalized, setFinalized] = useState(false)
    const [blogsLoadingFinalized, setBlogsLoadingFinalized] = useState(false)
    const [instagramPostsLoadingFinalized, setInstagramPostsLoadingFinalized] = useState(false)

    useEffect(() => {
        if (blogsLoadingFinalized && instagramPostsLoadingFinalized) {
            setFinalized(false)
        }
    }, [blogsLoadingFinalized, instagramPostsLoadingFinalized])

    const _setBlogsLoadingFinalized = (finalized: boolean) => {
        setBlogsLoadingFinalized(finalized)
    }

    const _setInstagramPostsLoadingFinalized = (finalized: boolean) => {
        setInstagramPostsLoadingFinalized(finalized)
    }

    return (
        <loadingStateContext.Provider
            value={{
                finalized,
                setBlogsLoadingFinalized: _setBlogsLoadingFinalized,
                setInstagramPostsLoadingFinalized: _setInstagramPostsLoadingFinalized,
            }}
        >
            {children}
        </loadingStateContext.Provider>
    )
}
