import { useState, useRef } from "react";
import { type Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

// const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({})

    const handleTermClicked = async (term: string) => {

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term])
            return
        }

        const gif = await getGifsByQuery(term)
        setGifs(gif)
    };

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].splice(0, 8));

        const gif = await getGifsByQuery(query);
        setGifs(gif);

        gifsCache.current[query] = gif;
        console.log(gifsCache)
    };

    return {
        gifs,
        previousTerms,
        handleTermClicked,
        handleSearch
    }
}
