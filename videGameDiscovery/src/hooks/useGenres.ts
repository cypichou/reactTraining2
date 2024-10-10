import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface Genre {
    id: number,
    name: string
}

interface FetchGenreResponse {
    count: number,
    results: Genre[]
}

const useGenres = () => {
    const [isLoading, setLoading] = useState(false)
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();

        setLoading(true)
      apiClients
        .get<FetchGenreResponse>("/genres", {signal:controller.signal})
        .then((res) => {setGenre(res.data.results); setLoading(false)})
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err);
          setLoading(false)});

        return ()=> controller.abort()
    }, []);

    return {genres, error, isLoading}
}

export default useGenres;