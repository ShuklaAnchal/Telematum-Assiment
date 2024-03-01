    import axios from "axios";

    const instance = axios.create({
        baseURL:"https://gist.githubusercontent.com/telematum"
    })


    export default instance;