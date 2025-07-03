import {useEffect, useState} from 'react';
import { SOURCE_PATH } from '../constants/constants';

interface UseGetPostInterface {
    isLoading: boolean;
    isError: boolean;
    postData: PostInfoInterface;
}

export interface PostInfoInterface {
    categories: number[];
    id: number;
    slug: string;
    title: PostTitleInterface;
    date: string;
    content: PostContentInterface;
    author: number;
    acf: PostACFInterface
    _embedded: wpFeaturedMedia;
    excerpt: PostContentInterface;
}

interface PostACFInterface {
    autor: string | null;
}

interface PostTitleInterface {
    rendered: string;
}

interface wpFeaturedMedia{
    "wp:featuredmedia": FeaturedMedia
}

interface PostContentInterface {
    rendered: string;
}

interface FeaturedMedia{
    source_url: string;
}

const useGetPost = (slug: string): UseGetPostInterface => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [data, setData] = useState<PostInfoInterface>({} as PostInfoInterface);

    useEffect(()=> {
        fetch(`${SOURCE_PATH}/wp-json/wp/v2/posts?slug=${slug}&_embed`)
            .then(response => response.json())
            .then(postInfo => {
                setData({...postInfo[0]})
            })
            .catch(()=>{
                setIsError(true)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }, [slug])

    return {
        isLoading,
        isError,
        postData: data
    }
}

export {
    useGetPost
}