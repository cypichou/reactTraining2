import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image:string // bien avoir le meme nom que le parametre dans la requete hehe
    parent_platforms: {platform: Platform}[];
    metacritic:number
  }
  
const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres:selectedGenre?.id}}, [selectedGenre?.id])

export default useGames;    