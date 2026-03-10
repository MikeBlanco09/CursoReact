import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const Gifsapp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z'])

    const handleTermClicked = (term: string) => {
        console.log({ term })
    }

    const handleSearch = (query: string) => {
        query = query.trim().toLowerCase();
        if (query !== '') {
            if (!previousTerms.includes(query)) {
                if (previousTerms.length > 7) {
                    previousTerms.shift();
                }
                setPreviousTerms([...previousTerms, query])
            }
        }
    }

    return (
        <>
            {/*  Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

            {/* Search */}
            <SearchBar
                placeholder="Busca lo que quieras"
                onQuery={handleSearch}
            />

            {/* Búsquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={mockGifs} />


        </>
    )
}
