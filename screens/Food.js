import React,{Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default class Food extends Component{

    static navigatorStyle = {
        tabBarHidden: true
    }

    render() {
        var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
        return (
          <Container>
            <Content>
              <List 
                horizontal={true}
                dataArray={items}
                renderRow={(item) =>
                  <ListItem>
                    <Text>{item}</Text>
                  </ListItem>
                }>
              </List>
            </Content>
          </Container>
        );
      }
}
