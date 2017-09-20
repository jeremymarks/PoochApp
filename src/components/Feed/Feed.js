import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Screen,
    ListView,
    View,
    Image,
    Spinner,
    Tile,
    Text,
    Title,
    Subtitle,
    NavigationBar,
    Button,
    Divider,
    Overlay,
    Icon,
    Caption,
    GridView,
    TextInput,
    Row,
    Lightbox,
  } from '@shoutem/ui';
  import Moment from 'react-moment';
  import { me } from '../../Config/data';



export default class Feed extends Component {

    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = {
          posts: [{
            "title": "Teddy checked-in to Elsternwick Park, Elsternwick",
            "address": "185 Sutter St, San Francisco, CA 94109",
            "image": { "url": "https://scontent-syd2-1.cdninstagram.com/t51.2885-15/e35/21227270_172273400006830_7497993419608817664_n.jpg" },
            "time": "13:45"
        }, {
            "title": "Thor & Luna checked-in to Chelsea Beach, Chelsea",
            "address": "527 Broome St, New York, NY 10013",
            "image": { "url": "https://scontent-syd2-1.cdninstagram.com/t51.2885-15/e35/14596630_1118703881530995_68145553141137408_n.jpg" },
            "time": "12:01" 
        },{
            "title": "Teddy checked-in to Brighton Beach, Brighton",
            "address": "185 Sutter St, San Francisco, CA 94109",
            "image": { "url": "https://scontent-syd2-1.cdninstagram.com/t51.2885-15/e35/16788490_647795825405803_6258708386196488192_n.jpg" },
            "time": "11:50" 
        }, {
            "title": "Wally checked-in to Packer Park, Carnegie",
            "address": "527 Broome St, New York, NY 10013",
            "image": { "url": "https://scontent-syd2-1.cdninstagram.com/t51.2885-15/e35/14624678_1592777257404742_8870428877353123840_n.jpg" },
            "time": "10:04" 
        }
        ],
        }
      }
    

      
      renderRow(post) {
        return (            
            <Tile>
            <Lightbox >
            <Image
                styleName="large-banner"
                source={{ uri: post.image.url }}>
            </Image>
            </Lightbox>
            <View styleName="content">
                <Title>{post.title}</Title>
                <View styleName="horizontal space-between">
                <Caption>1 hour ago</Caption>
                <Caption>{post.time}</Caption>
                </View>
            </View>
            <Divider style ={{backgroundColor:'#ecf0f1'}}/>
            </Tile >
        );
      }
    
      render() {

        return (
           
          <Screen>
            <View>
            <Row styleName="medium">
            <Image
                styleName="small rounded-corners"
                source={{ uri: me.picture.large }}
            />
           <TextInput placeholderTextColor="rgba(255,255,255,0.7)"
                        placeholder={"What are you up to " + me.name.first + "?"}
                        keyboardType="default"
                        clearButtonMode="while-editing"
                        autoCorrect={true}
                     />
        </Row>
        <Row styleName="small">
        <View styleName="horizontal flexible">
            <Button styleName="full-width">
               <Icon name ="take-a-photo"/>
            <Text>Photo</Text>
            </Button>

            <Button styleName="full-width">
            <Icon name ="my-location"/>
            <Text>Check-in</Text>
            </Button>

            <Button styleName="full-width">
            <Icon name ="social-wall"/>
            <Text>Post</Text>
            </Button>

            
            </View>
        </Row>
            

            </View>
            <Divider />
            <ListView data={this.state.posts}
              renderRow={this.renderRow}>
            </ListView>
          </Screen>
        );
      }


}


const styles = StyleSheet.create({
    contain: {
        flex: 1,
        height: 150,
      },
    
});


//UNUSED NAV BAR
        //     <View style={styles.container}>
        //         <NavigationBar
        //         style={{
        //             container: {
        //             backgroundColor: '#3498db'
        //             },
        //         }}
        //         styleName="clear"
        //         centerComponent={<Title>Feed</Title>}
        //         rightComponent={(
        //         <Button >
        //             <Text>Post</Text>
        //         </Button>)}/>
    //     //   </View>
    
    //     );
    // }