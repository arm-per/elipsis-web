import { ReactElement, useContext } from "react"
import { AccessibilityContext } from "../Contexts/Accessibility";
import { AnnounceInterface } from "../Hooks/useGetAnnounce";

interface DataInterface {
    data: AnnounceInterface;
    loading: boolean;
}

const Announcement = ({data, loading}: DataInterface): ReactElement => {
    console.log(data)

    const {fontSize, readingMode} = useContext(AccessibilityContext);
    return (
        <>{!loading && 
            <>
            <div className='img-cover__background'><img src={data._embedded["wp:featuredmedia"] ? (data._embedded["wp:featuredmedia"] as unknown as Array<{source_url: string}>)[0].source_url : ''} alt="cover" className={`cover-image ${readingMode ? 'on-reading' : ''}`} /></div>
            <main className="announcement-container">
            <h1 className={`h1-font-size-${fontSize} main-title`}>{data?.title?.rendered}</h1>
            <article className={`article-content size-${fontSize} ${readingMode ? 'hide_images' : ''}`} dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />
            </main>
            </>
        }
        </>
    )
}

export {
    Announcement
}