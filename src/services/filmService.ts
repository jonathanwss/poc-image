import axios from "axios";

export const getFilms = async (page: number) => {
    const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    return response.data.results
}