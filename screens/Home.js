import React,{Component} from 'react';
import { TouchableOpacity,ListView,FlatList,StyleSheet,View } from 'react-native';
import { Container, Header, Content, Text, Icon, Right } from 'native-base';
import Slideshow from 'react-native-slideshow';
import { Divider,Caption,Title,Image } from '@shoutem/ui';
import axios from 'axios';

export default class Home extends Component{

    constructor(props) {
        super(props);
 
        this.state = {
            position: 1,
            interval: null,
            SLideShowData: []
        };
    }

    static navigatorStyle = {
        navBarTransparent: true,
        drawUnderNavBar: true,
        navBarTextColor: '#ffffff'
    }

    componentWillMount() {
        const self = this;
        axios.get('http://explorecianjur.phdstudio.id/wp-json/explore/v1/featured').then((response)=>{
          self.setState({SLideShowData: response.data});
        }).catch((error)=>{
          console.log('something went wrong')
          console.log(error)
        })
        this.setState({
            interval: setInterval(() => {
              this.setState({
                position: this.state.position === this.state.SLideShowData.length ? 0 : this.state.position + 1
              });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        // SplashScreen.hide();
    }

    render(){
        return(
            <Container>
                <Content>
                    <Slideshow 
                        onPress={()=> this.props.navigator.push({
                            screen: 'example.SlideshowView',
                            passProps: {
                                SLideShowData: SLideShowData
                              }
                          })}
                        dataSource={this.state.SLideShowData}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })} 
                    />
                    <Divider styleName="section-header">
                        <Caption></Caption>
                    </Divider>
                   
                    <View style={styles.container}>

                        <TouchableOpacity onPress={()=> this.props.navigator.push({
                            screen: 'example.Tours',
                            title: 'Wisata'
                        })}>
                           <View style={styles.menu}>
                                <Image
                                    // style={{width: 150, height: 150}}
                                    source={require('../img/wisata64.png')}                                
                                />
                                <View style={{
                                    justifyContent: 'center'
                                }}>
                                   <Title styleName="md-gutter-top">Wisata</Title>
                                </View>
                           </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.navigator.push({
                            screen: 'example.Food',
                            title: 'Kuliner'
                        })}>
                            <View style={styles.menu}>
                                <Image
                                    // style={{width: 150, height: 150}}
                                    source={require('../img/food64.png')} 
                                />
                                <View style={{
                                    justifyContent: 'center'
                                }}>
                                   <Title styleName="md-gutter-top">Kuliner</Title>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.navigator.push({
                            screen: 'example.Hotel',
                            title: 'Hotel'
                        })}>
                            <View style={styles.menu}>
                                <Image
                                    // style={{width: 150, height: 150}}
                                    // source={{ uri: 'https://image.freepik.com/free-photo/hotel-bell_1203-2898.jpg'}}
                                    source={require('../img/hotel64.png')}
                                />
                                <View style={{
                                    justifyContent: 'center'
                                }}>
                                   <Title styleName="md-gutter-top">Hotel</Title>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.menu}>
                                <Image
                                    // style={{width: 150, height: 150}}
                                    source={require('../img/picture.png')}
                                />
                                <View style={{
                                    justifyContent: 'center'
                                }}>
                                   <Title styleName="md-gutter-top">Contributor</Title>
                                </View>
                            </View>
                        </TouchableOpacity>
            
                    </View>

                </Content>
          </Container>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    menu : {
        width: 150, 
        height: 150, 
        // backgroundColor: '#4CC7F3', 
        margin: 3, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
    }
});