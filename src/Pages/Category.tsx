import { ReactElement, useContext} from 'react';
import {useParams, Outlet, Link} from 'react-router-dom';

import { AccessibilityContext } from '../Contexts/Accessibility';
import { Dictionary } from '../Contexts/Dictionaries';
import { useGetCategory } from '../Hooks/useGetCategory';
import { Categories as CategoryEnum } from '../Utils/Categories';
import { Loader } from '../Components/Loader';

const Category = (): ReactElement => {
    const {category, slug} = useParams();
    const {fontSize} = useContext(AccessibilityContext);
    const {Categories, Colors} = useContext(Dictionary);
    const parsedCategory = CategoryEnum[category!.toUpperCase() as keyof typeof CategoryEnum];
    const {posts, isLoading} = useGetCategory(parsedCategory as unknown as string);

    if(slug) return <Outlet/>
    return (
        <main className="category_layout"> 
            <h1 className={`h1-font-size-${fontSize} category-title`}>{Categories[parseInt(parsedCategory! as unknown as string)]}</h1>
            <section className="category-grid">
            {!isLoading && posts.length > 0 && posts.map((el, index) => {
                    return <Link to={`${el.slug}`} className='cateogry-card' key={`${Categories[parseInt(parsedCategory! as unknown as string)].split(' ').join("-")}_${index}`}>
                        <img aria-hidden="true" alt={`${el.title.rendered} imagen`} src={el['_embedded']['wp:featuredmedia'] ? (el['_embedded']['wp:featuredmedia'] as unknown as Array<{source_url: string}>)[0].source_url : undefined} style={{maxWidth: '300px', display: 'block'}}/>
                        <h2>{el.title.rendered}</h2>
                        <span className='category-tag' style={{backgroundColor: Colors[el.categories[0]]}}>{Categories[el.categories[0]]}</span>
                    </Link>
                }
                )}
                {isLoading && <Loader/>}
                {!isLoading && posts.length == 0 && <h2 style={{textAlign: "center"}}>No se encontró ningun post en esta categoría</h2>}
               
            </section>
        </main>
    )
}

export {
    Category
} 