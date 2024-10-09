import axios from "axios"

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"48c006f53b41440586ca70df58fbd5e5"
    }
})