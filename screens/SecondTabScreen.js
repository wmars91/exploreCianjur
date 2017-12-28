import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

export default class SecondTabScreen extends Component{
    render(){
        return(
            <View>
                <Swiper>
                    <View>
                    <Text>Hello Swiper</Text>
                    </View>
                    <View>
                    <Text>Beautiful</Text>
                    </View>
                    <View>
                    <Text>And simple</Text>
                    </View>
                </Swiper>
            </View>
        );
    }
}
