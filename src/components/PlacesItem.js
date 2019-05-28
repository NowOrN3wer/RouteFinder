import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { API_ENDPOINT, API_KEY } from '../../constants';

export default class PlacesItem extends Component {

    render() {
        const { photos } = this.props.item;

		let source;
		if (photos) {
			// eslint-disable-next-line max-len
            source = { uri: `${API_ENDPOINT}/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&key=${API_KEY}` };
            console.log(source);
		} else {
			source = require('../RouteFinder_SourceAssets/img/no-image.jpg');
		}
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.viewheader}>
                    {this.props.item.name}
                </Text >
                <Text style={styles.viewtext}>
                    {this.props.item.vicinity}
                </Text>
                {/*<Image style={styles.photo} source={source} />*/}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    itemContainer: {
        margin: 5,
        marginLeft: 4,
        marginRight: 4,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'blue',
    },
    viewheader: {
        justifyContent: 'center',
        textAlign: 'center',
        //backgroundColor: 'red',
        fontSize: 15
    },
    viewtext: {
        fontSize: 13,
        //backgroundColor: 'green',
    },

});
