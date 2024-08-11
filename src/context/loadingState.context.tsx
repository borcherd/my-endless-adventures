import React, { createContext, useEffect, useState } from 'react'

export const loadingStateContext = createContext({
    finalized: false as boolean,
    setBlogsLoadingFinalized: (finalized: boolean) => {},
    setInstagramPostsLoadingFinalized: (finalized: boolean) => {},
    setAnimationCompleted: () => {},
})

export const LoadingStateContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [finalized, setFinalized] = useState(false)
    const [blogsLoadingFinalized, setBlogsLoadingFinalized] = useState(false)
    const [instagramPostsLoadingFinalized, setInstagramPostsLoadingFinalized] = useState(false)
    const [animationCompleted, setAnimationCompleted] = useState(false)

    useEffect(() => {
        if (blogsLoadingFinalized && instagramPostsLoadingFinalized && animationCompleted) {
            setFinalized(true)
        }
    }, [blogsLoadingFinalized, instagramPostsLoadingFinalized, animationCompleted])

    const _setBlogsLoadingFinalized = (finalized: boolean) => {
        setBlogsLoadingFinalized(finalized)
    }

    const _setInstagramPostsLoadingFinalized = (finalized: boolean) => {
        setInstagramPostsLoadingFinalized(finalized)
    }

    const _setAnimationCompleted = () => {
        setAnimationCompleted(true)
    }

    return (
        <loadingStateContext.Provider
            value={{
                finalized,
                setBlogsLoadingFinalized: _setBlogsLoadingFinalized,
                setInstagramPostsLoadingFinalized: _setInstagramPostsLoadingFinalized,
                setAnimationCompleted: _setAnimationCompleted,
            }}
        >
            {children}
        </loadingStateContext.Provider>
    )
}
