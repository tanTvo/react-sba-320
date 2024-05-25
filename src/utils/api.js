import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmZkODkwNjdmZWU5MWNlYzllOGIxMzU3MmE5ZTExZCIsInN1YiI6IjY2NTFlM2RhNzBjOGFlYjFmNzk5YWU3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KiZ7pterw9BNiIvMECAHAuS1tZ18lvKkPVT8K6RciKI"
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};