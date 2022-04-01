import {useState, useEffect} from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
    
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        search(defaultSearchTerm);
    },[defaultSearchTerm]);

    const search = async (term) => {
        const videos = await youtube.get('/search',
            {
                params: {
                    q: term
                }
            }
        );
        setVideos(videos.data.items);
        
        
    }

    return [videos, search];
}

export default useVideos;