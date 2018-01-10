import React from 'react';
import {ListItem, Thumbnail, Body, Text} from 'native-base';

export default HotelDetail = ({hotels, navigator}) => (
    <ListItem
      onPress={()=>navigator.push({
        screen: 'example.HotelView',
        passProps: {
            hotels: hotels
        }
      })}
    >
      <Thumbnail
        square
        size={80}
        source={{ uri: hotels.image}}
      />
      <Body>
        <Text note>{hotels.title}</Text>
      </Body>
    </ListItem>
)
