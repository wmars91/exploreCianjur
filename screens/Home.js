import React,{Component} from 'react';
import { TouchableOpacity,ListView,FlatList } from 'react-native';
import { Container, Header, Content, Text, Icon, Right } from 'native-base';
import Slideshow from 'react-native-slideshow';
import { Divider,Caption,Title,View,Card,Subtitle,Image } from '@shoutem/ui';

export default class Home extends Component{

    constructor(props) {
        super(props);
 
        this.state = {
            position: 1,
            interval: null,
            imageList:[
                {
                  title: 'Title 1',
                  caption: 'Caption 1',
                  url: 'http://wpexplorer-demos.com/status/wp-content/uploads/sites/101/2016/06/jungle-740x340.jpg',
                }, {
                  title: 'Title 2',
                  caption: 'Caption 2',
                  url: 'http://explorecianjur.phdstudio.id/wp-content/uploads/2016/06/photo-1465877783223-4eba513e27c6.jpg',
                }, 
                {
                  title: 'Title 3',
                  caption: 'Caption 3',
                  url: 'http://explorecianjur.phdstudio.id/wp-content/uploads/2016/06/peppers.jpg',
                }
              ]
        };
    }

    static navigatorStyle = {
        navBarTransparent: true,
        drawUnderNavBar: true,
        navBarTextColor: '#ffffff'
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
              this.setState({
                position: this.state.position === this.state.imageList.length ? 0 : this.state.position + 1
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
                            screen: 'example.SlideshowView'
                          })}
                        dataSource={this.state.imageList}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })} 
                    />
                    <Divider styleName="section-header">
                        <Caption>KATEGORI</Caption>
                    </Divider>
                   
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>

                        <TouchableOpacity onPress={()=> this.props.navigator.push({
                            screen: 'example.Tours',
                            title: 'Wisata'
                        })}>
                           <View style={{
                               width: 150, 
                               height: 150, 
                               backgroundColor: 'powderblue', 
                               margin: 5, 
                               justifyContent: 'center',
                               alignItems: 'center',
                            }}>
                                <Image
                                    style={{width: 150, height: 150}}
                                    source={{ uri: 'https://image.freepik.com/free-photo/red-pink-tower-blue-hat-old-vintage-camera-and-shells-over-wooden-floor-on-sunshine-blue-sky-and-ocean-background_1421-402.jpg'}}
                                />
                                <View style={{
                                    position: 'absolute',
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
                            <View style={{
                                width: 150, 
                                height: 150, 
                                backgroundColor: 'skyblue', 
                                margin: 5, 
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image
                                    style={{width: 150, height: 150}}
                                    source={{ uri: 'https://image.freepik.com/free-photo/table-with-ingredients-to-prepare-italian-pasta_23-2147606548.jpg'}}
                                />
                                <View style={{
                                    position: 'absolute',
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
                            <View style={{
                                width: 150, 
                                height: 150, 
                                backgroundColor: 'steelblue', 
                                margin: 5, 
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image
                                    style={{width: 150, height: 150}}
                                    source={{ uri: 'https://image.freepik.com/free-photo/hotel-bell_1203-2898.jpg'}}
                                />
                                <View style={{
                                    position: 'absolute',
                                    justifyContent: 'center'
                                }}>
                                   <Title styleName="md-gutter-top">Hotel</Title>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{
                                width: 150, 
                                height: 150, 
                                backgroundColor: 'cadetblue', 
                                margin: 5, 
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image
                                    style={{width: 150, height: 150}}
                                    source={{ uri: 'https://image.freepik.com/free-photo/close-up-of-woman-using-a-laptop_1098-3563.jpg'}}
                                />
                                <View style={{
                                    position: 'absolute',
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