import { useDispatch } from "react-redux";
import { likePost, toggleSave } from "../../features/post/postSlice";


const SinglePostCard = ({post}) => {

    const {id, title, description, image, tags, likes, isSaved} = post;
    const dispatch = useDispatch();

    const incrementLikeHandeler = (updatedValue, id) => {
        dispatch(likePost({updatedValue, postId: id}))
    }

    const toggleSaveHandeler = (value, postId) => {
        dispatch(toggleSave({value, postId}));
    }

    return(
        <>
            <main className="post">
                <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
                <div>
                    <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                        {title}
                    </h1>
                    <div className="tags" id="lws-singleTags">
                        {tags.map((tag, index) => <span id={index + 1}>{`#${tag}`}</span>)}
                    </div>
                    <div className="btn-group">
                    {/* <!-- handle like on button click --> */}
                    <button onClick={() => incrementLikeHandeler(likes + 1, id)} className="like-btn" id="lws-singleLinks">
                        <i className="fa-regular fa-thumbs-up"></i> {likes}
                    </button>
                    {/* <!-- handle save on button click --> */}
                    {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
                    <button onClick={() => toggleSaveHandeler(!isSaved, id)} className={`${isSaved && 'active'} save-btn`} id="lws-singleSavedBtn">
                        <i className="fa-regular fa-bookmark"></i> Saved
                    </button>
                    </div>
                    <div className="mt-6">
                    <p>
                        {description}
                    </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SinglePostCard;