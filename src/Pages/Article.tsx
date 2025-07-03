import { ReactElement, useContext, useEffect, useState } from "react";
import { AccessibilityContext } from "../Contexts/Accessibility";
import {useParams} from 'react-router-dom';
import { useGetPost } from "../Hooks/useGetPost";
//import { useGetAuthorInfo } from "../Hooks/useGetAuthorInfo";

const Article = (): ReactElement => {
    const {slug} = useParams();
    const {fontSize, readingMode} = useContext(AccessibilityContext);
    const {postData, isError, isLoading} = useGetPost(slug!);
    //const {data} = useGetAuthorInfo(postData.author || 1);
    const [date, setDate] = useState<string>('');

    const months: { [key: number]: string } = {
        0: 'Enero',
        1: 'Febrero',
        2: 'Marzo',
        3: 'Abril',
        4: 'Mayo',
        5: 'Junio',
        6: 'Julio',
        7: 'Agosto',
        8: 'Septiembre',
        9: 'Octubre',
        10: 'Noviembre',
        11: 'Diciembre'
    }

    useEffect(()=>{
        const articleDate = new Date(postData.date);
        setDate(`${articleDate.getDay()} de ${months[articleDate.getMonth()]} del ${articleDate.getFullYear()}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isLoading])




    return(
        <> 
            {
                !isLoading && !isError && 
                <>
                    <div className='img-cover__background'><img src={postData._embedded["wp:featuredmedia"] ? (postData._embedded["wp:featuredmedia"] as unknown as Array<{source_url: string}>)[0].source_url : '' } alt="cover" className={`cover-image ${readingMode ? 'on-reading' : ''}`}/></div>
                    <div className={`article-meta-data size-${fontSize}`}><span className="author-info">{postData.acf.autor ?? ''}</span></div>
                    <h1 className={`h1-font-size-${fontSize} main-title`}>{postData?.title?.rendered}</h1>
                    <div className={`article-meta-data size-${fontSize}`}><span className="article-date">{date}</span></div>
                    <article className={`article-content size-${fontSize} ${readingMode ? 'hide_images' : ''}`}dangerouslySetInnerHTML={{__html: postData?.content?.rendered}}/>
                </>
                }
        </>
    )
}

export {
    Article
}