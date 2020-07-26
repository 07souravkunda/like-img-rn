import { UPDATE_POSTS, TOGGLE_FAVORITES, INC_PAGE, ADD_FAVORITES } from '../actions/posts';

const initialState = {
    Posts: [],
    favoritePosts: [],
    page: 1
};


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            let favorites = [...state.favoritePosts];

            const index = favorites.findIndex((el) => el._id === action.post._id);

            if (index > -1) {
                favorites.splice(index, 1);
            } else {
                favorites.unshift(action.post);
            }

            return Object.assign({}, state, { favoritePosts: favorites });
        case UPDATE_POSTS: {
            return Object.assign({}, state, { Posts: [...state.Posts, ...action.posts] })
        }
        case INC_PAGE: {
            return Object.assign({}, state, { page: state.page + 1 });
        }
        case ADD_FAVORITES: {
            return Object.assign({}, state, { favoritePosts: action.posts })
        }
        default:
            return state;
    }
};

export default postReducer;