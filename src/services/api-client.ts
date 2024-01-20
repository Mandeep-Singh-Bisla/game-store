import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "caa44a053ad94a32a011a95f7affa046",
  },
});
