import {useState, useEffect} from 'react';
import { SOURCE_PATH } from '../constants/constants';

export interface AnnounceInterface {
    _embedded: wpFeaturedMedia,
    content: AnnounceContent;
    title: BannerTitle;
}

interface wpFeaturedMedia{
    "wp:featuredmedia": WPMedia[];
}

interface WPMedia {
    source_url: string;
}

interface AnnounceContent {
    rendered: string;
}

interface BannerTitle {
    rendered: string;
}

interface GetAnnounceInterface {
    isLoading: boolean;
    isError: boolean;
    data: AnnounceInterface;
}


export const useGetAnnounce = (): GetAnnounceInterface => {
    const [data, setData] = useState<AnnounceInterface>({} as AnnounceInterface);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false)
    
    useEffect(()=> {
        fetch(`${SOURCE_PATH}/wp-json/wp/v2/pages/25?_embed`)
            .then(response => response.json())
            .then(_announce_ => {
                setData({..._announce_});
            })
            .catch(() => {
                setIsError(true)
            })
            .finally(() => {
                setIsLoading(false);
            })
    },[])

    return {
        data,
        isLoading,
        isError
    }
}