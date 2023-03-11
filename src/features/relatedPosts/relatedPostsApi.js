import http from '../../services/http';

export const getRelatedPosts = async ({tags, postId}) => {

    const params = tags.map(tag => `tags_like=${tag}`).join('&')
    return await http.get(`/blogs/?${params}&id_ne=${postId}`);
    
}