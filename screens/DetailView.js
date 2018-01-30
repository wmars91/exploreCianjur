import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {Container, Content,Text,List,ListItem, Left, Body, Right, Icon, Button} from 'native-base';
import PropTypes from 'prop-types';
import { Image,View,Subtitle } from '@shoutem/ui';
import openMap from 'react-native-open-maps';

class DetailView extends Component{

  static navigatorStyle = {
    navBarTransparent: true,
    drawUnderNavBar: true,
    navBarTextColor: '#ffffff',
    navBarButtonColor: '#ffffff'
  }
  
  render(){
    const {data} = this.props;
    return (
      <Container>
        <Content>
          <Image
            styleName="large"
            source={{ uri: data.image }}
          />
          <List>

            <ListItem itemDivider>
              <Text>{data.title}</Text>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-add" />
              </Left>
              <Body>
                <Text>{data.telp}</Text>
              </Body>
              <Right/>
            </ListItem>  

            <ListItem icon>
              <Left>
                <Icon name="ios-add" />
              </Left>
              <Body>
              <Button transparent info onPress={()=>{ Linking.openURL('http://explorecianjur.phdstudio.id/')}}>
                <Text>{data.website}</Text>
              </Button>
              </Body>
              <Right/>
            </ListItem> 

            <ListItem icon>
              <Left>
                <Icon name="ios-add" />
              </Left>
              <Body>
              <Button transparent info onPress={()=>{
                openMap({ latitude: data.latitude, longitude: data.longitude });  
              }}>
                <Text>Lihat Map</Text>
              </Button>
              </Body>
              <Right/>
            </ListItem> 
           
            <ListItem >
              <Text>{data.content}</Text>
            </ListItem>

          </List>
        </Content>
      </Container>
    )
  }
}

DetailView.propTypes = {
    data: PropTypes.object.isRequired
};

export default DetailView;
