import {useEffect, useState} from 'react';

import { SOURCE_PATH } from '../constants/constants';

export interface BannerInterface {
    _embedded: wpFeaturedMedia,
    content: BannerContent;
    title: BannerTitle;
}

interface wpFeaturedMedia{
    "wp:featuredmedia": WPMedia[];
}

interface WPMedia {
    source_url: string;
}

interface BannerContent {
    rendered: string;
}

interface BannerTitle {
    rendered: string;
}

interface UseGetBannersInterface {
    isLoading: boolean;
    isError: boolean;
    banners: BannerInterface[];
}

const useGetBanners = (): UseGetBannersInterface => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [banners, setBanners] = useState<BannerInterface[]>([])

    useEffect(()=>{
        fetch(`${SOURCE_PATH}/wp-json/wp/v2/pages?parent=13&_embed`)
            .then(response => response.json())
            .then(_banners_ => setBanners(_banners_))
            .catch(()=> {
                setIsError(true)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    },[])

    return {
        isLoading,
        isError,
        banners
    }
}

export {
    useGetBanners
}