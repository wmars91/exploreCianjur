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
    const {imglist} = this.props;
    return (
      <Container>
        <Content>
          <Image
            styleName="large"
            source={{ uri: 'http://wpexplorer-demos.com/status/wp-content/uploads/sites/101/2016/06/jungle-740x340.jpg' }}
          />
          <List>
            <ListItem itemDivider>
              <Text>Title</Text>
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
  imglist: PropTypes.array.isRequired
};

export default SlideshowView;
