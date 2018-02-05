import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content,Text,List,ListItem} from 'native-base';
import PropTypes from 'prop-types';
import { Image,View,Subtitle } from '@shoutem/ui';

class SlideshowView extends Component{
 
  static navigatorStyle = {
    navBarTransparent: true,
    drawUnderNavBar: true,
    navBarTextColor: '#ffffff',
    navBarButtonColor: '#ffffff'
  }

  render(){
    const {SLideShowData} = this.props;
    return (
      <Container>
        <Content>
          <Image
            styleName="large"
            source={{ uri: SLideShowData.image }}
          />
          <List>
            <ListItem itemDivider>
              <Text>{SLideShowData.title}</Text>
            </ListItem>                    
            <ListItem >
              <Text>Caption</Text>
            </ListItem>
        </List>
        </Content>
      </Container>
    )
  }
}

SlideshowView.propTypes = {
  SLideShowData: PropTypes.array.isRequired
};

export default SlideshowView;
