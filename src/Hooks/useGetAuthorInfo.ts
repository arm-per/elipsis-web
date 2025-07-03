import {useEffect, useState} from 'react';
import { SOURCE_PATH } from '../constants/constants';

interface AuthorInfoInterface {
    id: number,
    avatar_urls: AvatarUrls;
    name: string;
};

interface AvatarUrls {
    24: string;
    48: string;
    96: string;
}

interface UseAuthorInfoInterface {
    data: AuthorInfoInterface;
    authorInfoIsLoading: boolean;
    isError: boolean; 
}

const useGetAuthorInfo = (id: number | string): UseAuthorInfoInterface => {
    const [data, setData] = useState<UseAuthorInfoInterface["data"]>({} as AuthorInfoInterface);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false)
    
    useEffect(()=> {
        fetch(`${SOURCE_PATH}/wp-json/wp/v2/users/${id}`)
            .then(response => response.json())
            .then(_author_ => {
                setData({..._author_});
            })
            .catch(() => {
                setIsError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    },[id])

    return {
        data,
        authorInfoIsLoading: isLoading,
        isError
    }
}

export {
    useGetAuthorInfo
}