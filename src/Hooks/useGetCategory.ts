import {useEffect, useState} from 'react';

import { SOURCE_PATH } from '../constants/constants';

import { PostInfoInterface } from './useGetPost';

interface UseCategoriesInterface {
    isLoading: boolean;
    isError: boolean;
    posts: PostInfoInterface[];
}

const useGetCategory = (category: string): UseCategoriesInterface => {
    
    const [posts, setPosts] = useState<PostInfoInterface[]>([] as PostInfoInterface[]);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(()=> {
        fetch(`${SOURCE_PATH}/wp-json/wp/v2/posts?categories=${category}&_embed`)
        .then(response => response.json())
        .then(response => setPosts(response))
        .catch(()=>{
            setIsError(true);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }, [category])
    
    return {posts, isError, isLoading}
}

export {
    useGetCategory
}