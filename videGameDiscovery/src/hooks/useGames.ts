import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface Games {
    id: number;
    name: string;
  }
  interface fetchGamesResponse {
    count: number;
    results: Games[];
  }
  
const useGames = () => {


    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();

      apiClients
        .get<fetchGamesResponse>("/games", {signal:controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err)});

        return ()=> controller.abort()
    }, []);

    return {games, error}
}

export default useGames;    