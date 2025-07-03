import { idToCategory, categoryName  } from "./Categories";

interface LocationsInterface {
    [x: string]: string;
}

export const setLocations = (urlPattern: string) => {
    const linksTo = {
        info: [{}] as LocationsInterface[]
    }

    for(const category in idToCategory){
        const linkInfo = {
            to: `${urlPattern}/${idToCategory[category].toLowerCase()}`,
            name: categoryName[category],
        }
        
        linksTo.info = [...linksTo.info, linkInfo];
    }
    return linksTo.info;
}

//  to={`/articles/${idToCategory[Categories.CUENTO]}`}