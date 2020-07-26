import React, { useState } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ImageComp from '../components/ImageComp';
import { toggleFavorites } from '../store/actions/posts';

const LikesScreen = props => {
    const dispatch = useDispatch();
    const Likes = useSelector(state => state.posts.favoritePosts);
    const renderComp = ({ item }) => {
        return <ImageComp uri={item.uri} id={item._id} onPress={() => dispatch(toggleFavorites(item))} />
    }
    if (Likes.length === 0) return <Text style={{ alignSelf: 'center', marginVertical: 10, fontSize: 20 }}>No liked posts yet..</Text>
    return <FlatList renderItem={renderComp} data={Likes} keyExtractor={(item) => item._id} />
}

export default LikesScreen;

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center'
    }
})