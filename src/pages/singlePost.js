import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SinglePostAside from "../components/aside/SinglePostAside";
import Breadcrumb from "../components/common/Breadcrumb";
import MasterLayouts from "../components/layouts/MasterLayouts";
import RelatedPostCard from "../components/post/RelatedPostCard";
import SinglePostCard from "../components/post/SinglePostCard";
import { fetchPost, selectPost } from "../features/post/postSlice";
import { fetchRelatedPosts, selectRelatedPosts } from "../features/relatedPosts/relatedPostSlice";


const SinglePost = () => {

    const { postId } = useParams();
    const {data: post} = useSelector(selectPost);
    const {data: relatedPosts} = useSelector(selectRelatedPosts);
    const dispatch = useDispatch();


    
    useEffect(() => {
        dispatch(fetchPost(postId))
    }, [dispatch, postId]);


    useEffect(() => {
        if(post) {
            dispatch(fetchRelatedPosts({tags: [...post.tags], postId}));
        }
    }, [dispatch, post, postId])

    return(
        <>
            <MasterLayouts>
                <Breadcrumb/>

                

                <section className="post-page-container">
                    
                    {post && <SinglePostCard post={post}/>}

                    <SinglePostAside>
                        {relatedPosts &&  relatedPosts.map(post => (<RelatedPostCard key={post.id} post={post} />))}
                    </SinglePostAside>
                </section>



            </MasterLayouts>
        </>
    )
}

export default SinglePost;