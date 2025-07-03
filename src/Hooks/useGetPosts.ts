import {useEffect, useState} from 'react';
import type { PostInfoInterface } from './useGetPost';
import { SOURCE_PATH } from '../constants/constants';

interface UseGetAllPostsInterface {
    isError: boolean;
    isLoading: boolean;
    posts: PostInfoInterface[];
    totalPages: number;
}

const useGetAllPosts = (items: number, offset: number): UseGetAllPostsInterface => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [data, setData] = useState<PostInfoInterface[]>([])
    const [totalPages, setTotalPages] = useState<number>(0)

    useEffect(()=> {
        fetch(`${SOURCE_PATH}/wp-json/wp/v2/posts?_embed&offset=${offset}&per_page=${items}`)
            .then(response => {
                setTotalPages(parseInt(response.headers.get('X-WP-TotalPages')?? '0'));
                console.log(`${SOURCE_PATH}/wp-json/wp/v2/posts?_embed&offset=${offset}&per_page=${items}`)
                return response.json()
            })
            .then(posts => setData(posts))
            .catch(() => {
                setIsError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [items, offset])

    return {
        posts: data,
        isError,
        isLoading,
        totalPages
    }
}

export {
    useGetAllPosts
}