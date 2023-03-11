import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeAside from "../components/aside/HomeAside";
import MasterLayouts from "../components/layouts/MasterLayouts";
import PostCard from "../components/post/PostCard";
import PostContainer from "../components/post/PostContainer";
import { fetchPosts, selectAllPosts } from "../features/posts/postsSlice";


const Home = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return(
        <>
            <MasterLayouts>
                <section className="wrapper">
                    <HomeAside/>

                    <PostContainer>
                        {posts.data.map(post => (<PostCard key={post.id} post={post} />))}
                    </PostContainer>
                </section>
            </MasterLayouts>
        </>
    )
}

export default Home;