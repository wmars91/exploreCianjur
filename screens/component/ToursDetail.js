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
        source={{ uri: tours.guid.rendered }}
      />
      <Body>
        <Text>Title</Text>
        <Text note>{tours.title.rendered}</Text>
      </Body>
    </ListItem>
)
