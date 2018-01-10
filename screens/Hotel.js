import React,{Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Header, Left, Right, Content, Body, Text, List} from 'native-base';
import axios from 'axios';
import HotelDetail from './component/HotelDetail';

export default class Hotel extends Component{

    constructor(){
        super();
        this.state = {
          hotels: []
        }
      }
    
      componentDidMount(){
        const self = this;
        axios.get('http://explorecianjur.phdstudio.id/wp-json/explore/v1/hotel').then((response)=>{
          self.setState({hotels: response.data});
        }).catch((error)=>{
          console.log('something went wrong')
          console.log(error)
        })
      }

    static navigatorStyle = {
        tabBarHidden: true
    }

    render(){
        return(
            <Container>
                <Content>
                <List horizontal={true}>
                    {this.state.hotels.map((hotels, key)=> <HotelDetail key={key} hotels={hotels} {...this.props}/>)}
                </List>
                </Content>
            </Container>
        );
    }
}