import React,{Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

export default class Tours extends Component{

    static navigatorStyle = {
        tabBarHidden: true
    }

    render(){
        return(
            <View>
                <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        );
    }
}