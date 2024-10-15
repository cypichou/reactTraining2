import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slugl: string
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;