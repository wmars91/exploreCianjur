import React,{Component} from 'react';
import {Text, View, StyleSheet, ListView} from 'react-native';
export default class Hotel extends Component{

    static navigatorStyle = {
        tabBarHidden: true
    }

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3',, 'row 4',, 'row 5', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10', 'row 11', 'row 12']),
        };
      }

    render(){
        return(
            <View>
                <ListView
                    horizontal={true}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }
}