import http from '../../services/http';

export const getPost = async (postId) => {
    return await http.get(`/blogs/${postId}`);
}

export const incrementLike = async (updatedValue, postId) => {
    return await http.patch(`/blogs/${postId}`, {
        likes: updatedValue,
    });
}

export const toggleSaveValue = async (value, postId) => {
    return await http.patch(`blogs/${postId}`, {
        isSaved: value
    });
}