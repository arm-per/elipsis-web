import {useEffect, useState} from 'react';

import { SOURCE_PATH } from '../constants/constants';

interface CategoryInterface {
    id: number;
    name: string;
}

interface Categories {
    [x: number]: string;
}

interface UseCategoriesInterface {
    isLoading: boolean;
    isError: boolean;
    categories: Categories;
}

const useGetCategories = (): UseCategoriesInterface => {
    
    const [categories, setCategories] = useState<Categories>({});
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(()=> {
        fetch(`${SOURCE_PATH}/wp-json/wp/v2/categories?per_page=20`)
        .then(response => response.json())
        .then(_categories_ => {
            let categoryDictionary = {};
            (_categories_ as CategoryInterface[]).map(({id, name}) => {
                categoryDictionary = {...categoryDictionary, [id]: name};
            })
            return categoryDictionary;
        })
        .then(res => {
            setCategories(res)
        })
        .catch(()=>{
            setIsError(true);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }, [])

    console.log({categories})
    
    return {categories, isError, isLoading}
}

export {
    useGetCategories
}