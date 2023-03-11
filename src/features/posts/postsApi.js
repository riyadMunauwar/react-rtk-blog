import http from '../../services/http';

export const getPosts = async () => {
    return await http.get('/blogs');
}

export const getPostsSortBy = async (sortBy) => {
    return await http.get(`/blogs?_sort=${sortBy}&_order=desc`);
}