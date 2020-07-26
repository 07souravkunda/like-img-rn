import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

const ImageComp = (props) => {
    const favorites = useSelector(state => state.posts.favoritePosts);
    let like = favorites.find(el => el._id === props.id);
    return <View style={styles.container}>
        <Image source={{ uri: props.uri }} style={styles.image} />
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '8%' }}>
            <Icon name={like ? "ios-heart" : "ios-heart-outline"} color='red' size={40} onPress={props.onPress} />
        </View>
    </View>
}

export default ImageComp;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 600,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'black'
    },
    image: {
        width: '100%',
        height: '92%'
    }
})