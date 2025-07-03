import { ReactElement, ReactNode, createContext } from 'react';
import { useGetCategories } from '../Hooks/useGetCategories';
import { colors, ColorsInterface} from '../Utils/colors';

interface DictionaryInterface {
    Categories: CategoriesInterface,
    Colors: ColorsInterface
}

interface CategoriesInterface {
    [x: number]: string;
}


export const Dictionary = createContext<DictionaryInterface>({} as DictionaryInterface);

export const Dictionaries = ({ children }: {children: ReactNode} ): ReactElement => {
    const categories = useGetCategories();

    return <Dictionary.Provider value={{Categories: {...categories.categories}, Colors: {...colors}}}>
        {children}
    </Dictionary.Provider>
}
