import { useRef, useState } from "react"
import type { Gif } from "../components/interfaces/gif.interface"
import { getGifsByQuery } from "../actions/get-gifs-by-query.action"

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {

    const [gifList, setGifList] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([])

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async (term: string) => {

        if (gifsCache.current[term]) {
            setGifList(gifsCache.current[term])
            return;
        }


        const gifs = await getGifsByQuery(term);
        setGifList(gifs);
    }

    const handleSearch = async (query: string) => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].splice(0, 8));

        const gifs = await getGifsByQuery(query);

        setGifList(gifs);

        gifsCache.current[query] = gifs;
        console.log(gifsCache)

    };


    return {
        // Values
        gifList,
        previousTerms,

        // Methods / Actions
        handleTermClicked,
        handleSearch

    }
}
