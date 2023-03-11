const PostContainer = ({children}) => {
    return(
        <>
            <main className="post-container" id="lws-postContainer">
                {children}
            </main>
        </>
    )
}

export default PostContainer;