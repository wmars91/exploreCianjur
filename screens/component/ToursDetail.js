import React from 'react';
import {ListItem, Thumbnail, Body, Text} from 'native-base';

export default ToursDetail = ({tours, navigator}) => (
    <ListItem
      onPress={()=>navigator.push({
        screen: 'example.ToursView',
        passProps: {
          tours: tours
        }
      })}
    >
      <Thumbnail
        square
        size={80}
        source={{ uri: tours.image}}
      />
      <Body>
        <Text note>{tours.title}</Text>
      </Body>
    </ListItem>
)
