const axios = require('axios');

export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const UPDATE_POSTS = 'UPDATE_POSTS';
export const INC_PAGE = 'INC_PAGE';
export const ADD_FAVORITES = 'ADD_FAVORITES';

export const toggleFavorites = (post) => {
    toggle(post._id);
    return {
        type: TOGGLE_FAVORITES,
        post,
    };
};

export const getPosts = (page, limit) => {
    return async (dispatch) => {
        const res = await axios.get(`http://192.168.43.206:3000/api/v1/posts?page=${page}&limit=${limit}`);
        const resData = res.data.posts;
        // console.log(resData)
        if (resData.length > 0) {
            dispatch(incPage());
            dispatch(setPosts(resData));
        }
    }
}

export const getLikes = () => {
    return async (dispatch) => {
        const res = await axios.get('http://192.168.43.206:3000/api/v1/posts/likes');
        dispatch(setLikes(res.data.posts))
    }
}

const toggle = async (id) => {
    try {

        await axios.post('http://192.168.43.206:3000/api/v1/posts/toggleLike', { id });
        console.log('success');
    } catch (er) {
        console.log(er);
    }
}

export const setLikes = (posts) => {
    return (dispatch) => {
        dispatch({
            type: ADD_FAVORITES,
            posts
        })
    }
}

export const setPosts = (posts) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_POSTS,
            posts
        })
    }
}

export const incPage = () => {
    return (dispatch) => {
        dispatch({
            type: INC_PAGE
        })
    }
}