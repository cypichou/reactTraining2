import useData from "./useData";

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
  
const useGames = () => useData<Game>('/games')

export default useGames;    