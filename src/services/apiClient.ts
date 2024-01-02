import axios from "axios";
export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"f9ab592b23b044a490b8b0ced5f53875" 
    }
})
