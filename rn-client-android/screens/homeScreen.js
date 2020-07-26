import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, FlatList, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ImageComp from '../components/ImageComp';
import { getPosts, toggleFavorites, getLikes } from '../store/actions/posts';

const HomeScreen = props => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.Posts);
    const page = useSelector(state => state.posts.page);

    const getHandler = async () => {
        let action = getPosts(page, 5);
        setLoading(true);
        try {
            await dispatch(action);
            await dispatch(getLikes())
        } catch (er) {
            console.log(er)
            Alert.alert('Error occured', 'error')
        }
        setLoading(false);
    }

    useEffect(() => {
        getHandler();
    }, [])

    const renderComp = ({ item }) => {
        return <ImageComp id={item._id} uri={item.uri} onPress={() => {
            dispatch(toggleFavorites(item));
        }} />
    }

    return <FlatList renderItem={renderComp} data={posts} keyExtractor={(item) => item._id} onEndReached={getHandler} />
}

export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center'
    }
})