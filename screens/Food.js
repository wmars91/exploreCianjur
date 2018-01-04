import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Food extends Component{

    static navigatorStyle = {
        tabBarHidden: true
    }

    render(){
        return(
            <View>
                <Text>Food</Text>
            </View>
        );
    }
}
