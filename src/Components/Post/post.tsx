import { useContext } from "react";
import { Dictionary } from "../../Contexts/Dictionaries";
import { AccessibilityContext } from "../../Contexts/Accessibility";
import { Link } from "react-router-dom";
import PostProps from "./Post.interface";
import './post.css';

const Post = (props: PostProps) => {
    const { Categories, Colors } = useContext(Dictionary);
    const {fontSize} = useContext(AccessibilityContext);
  return (
    <Link to={`/articles/${Categories[props.categories[0]]}/${props.slug}`} className={`post`}>
        <span className={`postCategory`} style={{backgroundColor: Colors[props.categories[0]]}}>{Categories[props.categories[0]]}</span>
        <img src={(props['_embedded']['wp:featuredmedia'] as unknown as Array<{source_url: string}>)[0].source_url } alt={props.title.rendered} className={`postImage`} />
        <h2 className={`postTitle h2-font-size-${fontSize}`}>{props.title.rendered}</h2>
        <article className={`summary size-${fontSize}`} dangerouslySetInnerHTML={{__html: props.excerpt.rendered}}></article>
        <div className={`postMeta`}>
            <span className={`postDate`}>{new Date(props.date).toLocaleDateString()}</span>
        </div>
        <div className={`postReadMore size-${fontSize}`}><p>Leer artículo</p></div>
    </Link>
  );
}

export { Post };