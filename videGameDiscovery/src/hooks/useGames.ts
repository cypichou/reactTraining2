import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image:string // bien avoir le meme nom que le parametre dans la requete hehe
  }

  interface fetchGamesResponse {
    count: number;
    results: Game[];
  }
  
const useGames = () => {


    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();

      apiClients
        .get<fetchGamesResponse>("/games", {signal:controller.signal})
        .then((res) => {setGames(res.data.results)})
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err)});

        return ()=> controller.abort()
    }, []);

    return {games, error}
}

export default useGames;    