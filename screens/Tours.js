import React,{Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
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
    
      componentWillMount(){
        const self = this;
        axios.get('http://explorecianjur.phdstudio.id/wp-json/explore/v1/wisata').then((response)=>{
          self.setState({tours: response.data});
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
                    {this.state.tours.map((tours, key)=> <ToursDetail key={key} tours={tours} {...this.props}/>)}
                </List> */}
                <FlatList 
                        key="flatList"
                        data={this.state.tours}
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