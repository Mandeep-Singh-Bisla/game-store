import axios from "axios";
export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"caa44a053ad94a32a011a95f7affa046"
    }
})
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        apiClient
            .get<FetchGamesResponse>("/games")
            .then((res) => setGames(res.data.results))
            .catch((err) => setError(err.message));
    });

};
