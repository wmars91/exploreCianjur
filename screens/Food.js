import React,{Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Container, Header, Left, Right, Content, Body, Text, List} from 'native-base';
import axios from 'axios';
import FoodDetail from './component/FoodDetail';

export default class Food extends Component{

    constructor(){
        super();
        this.state = {
          foods: []
        }
      }
    
      componentWillMount(){
        const self = this;
        axios.get('http://explorecianjur.phdstudio.id/wp-json/explore/v1/kuliner').then((response)=>{
          self.setState({foods: response.data});
        }).catch((error)=>{
          console.log('something went wrong')
          console.log(error)
        })
      }

    static navigatorStyle = {
        tabBarHidden: true,
        navBarBackgroundColor: '#4CC7F3',
        navBarTextColor: '#ffffff',
        navBarButtonColor: '#ffffff'
    }

    render(){
        return(
            <Container>
                <Content>
                {/* <List horizontal={true}>
                    {this.state.foods.map((foods, key)=> <FoodDetail key={key} foods={foods} {...this.props}/>)}
                </List> */}
                <FlatList 
                        key="flatList"
                        data={this.state.foods}
                        keyExtractor={(item, index) => (`${item}--${index}`)}
                        renderItem = {({ item, index }) => 
                            <View>
                                <ToursDetail key={index} tours={item} {...this.props}/>
                            </View>
                    }/>
                </Content>
            </Container>
        );
    }
}