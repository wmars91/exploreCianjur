import React from 'react';
import {ListItem, Thumbnail, Body, Text} from 'native-base';
import { Tile,Image,View,Title,TouchableOpacity } from '@shoutem/ui';

export default HotelDetail = ({hotels, navigator}) => (
  <ListItem>
    <TouchableOpacity
      onPress={()=>navigator.push({
        screen: 'example.HotelView',
        passProps: {
          hotels: hotels
        }
      })}
    >
      <Tile>
        <Image
          styleName="large-banner"
          source={{ uri: hotels.image }}
        />
        <View styleName="content">
          <Title>{hotels.title}</Title>
        </View>
      </Tile>
    </TouchableOpacity>
  </ListItem>
)
