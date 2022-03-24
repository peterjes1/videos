import axios from 'axios';

const KEY = 'AIzaSyB-yquEgpYKnoFygvJyJ1XNl_0obQT9bLI';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
params : {
    part : 'snippet',
    type : 'video',
    maxResults : 5,
    key : KEY
}
}
)