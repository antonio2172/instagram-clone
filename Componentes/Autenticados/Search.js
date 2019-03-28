import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Search extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Search</Text>
                <Button
                    title='Publicacion'
                    onPress={() => {
                        navigation.navigate('Publicacion');
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#902e9b',
    },
});

export default Search;