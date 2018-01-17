import React from 'react';
import {ListItem, Thumbnail, Body, Text} from 'native-base';
import { Tile,Image,View,Title,TouchableOpacity } from '@shoutem/ui';

export default ToursDetail = ({tours, navigator}) => (
  <ListItem>
    <TouchableOpacity
      onPress={()=>navigator.push({
        screen: 'example.ToursView',
        passProps: {
          tours: tours
        }
      })}
    >
      <Tile>
        <Image
          styleName="large-banner"
          source={{ uri: tours.image }}
        />
        <View styleName="content">
          <Title>{tours.title}</Title>
        </View>
      </Tile>
    </TouchableOpacity>
  </ListItem>
)
