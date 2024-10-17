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
  
const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', {params: {genres:selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre?.id,selectedPlatform?.id])

export default useGames;    