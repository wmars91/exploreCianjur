import React,{Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Header, Left, Right, Content, Body, Text, List} from 'native-base';
import axios from 'axios';
import ToursDetail from './component/ToursDetail';

export default class Tours extends Component{

    constructor(){
        super();
        this.state = {
          tours: []
        }
      }
    
      componentDidMount(){
        const self = this;
        axios.get('http://explorecianjur.phdstudio.id/wp-json/wp/v2/posts').then((response)=>{
          self.setState({tours: response.data});
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
                    {this.state.tours.map((tours, key)=> <ToursDetail key={key} tours={tours} {...this.props}/>)}
                </List>
                </Content>
            </Container>
        );
    }
}