import { Link } from 'react-router-dom';

const RelatedPostCard = ({post}) => {

    const {id, title, image, tags, createdAt } = post;

    return (
        <>
            <div className="card">
                <Link to={`/posts/${id}`}>
                     <img src={image} className="card-image" alt="" />
                </Link>

                <div className="p-4">
                    <Link to={`/posts/${id}`} className="text-lg post-title lws-RelatedPostTitle">
                        { title }
                    </Link>
                    <div className="mb-0 tags">
                        {tags.map((tag, index) => <span id={index + 1}>{`#${tag}`}</span>)}
                    </div>
                    <p>{createdAt}</p>
                </div>
            </div>
        </>
    )
}

export default RelatedPostCard;