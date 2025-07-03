import { Banner } from "../Components/Banner/banner"
import { useGetAllPosts } from "../Hooks/useGetPosts"
import { Post } from "../Components/Post/post"
import { PostWrapper } from "../Components/Post/PostWrapper"

export const Homepage = () => {
    const { posts } = useGetAllPosts(10, 0);
    return (<main>
        <Banner/>
        <section>
            <h1 className="last-posts h1-font-size-2">Últimos posts</h1>
            <PostWrapper>
                {posts.map((post) => {
                    return <Post key={post.id} {...post} />;
                })}
            </PostWrapper>
        </section>
    </main>)
}