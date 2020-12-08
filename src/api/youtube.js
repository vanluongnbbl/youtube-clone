import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snipet',
        maxResults: 5,
        key: '[AIzaSyAwbRWkx_9nG24p_pqr0dBvmn2XLD9d_u0]'
    }
})