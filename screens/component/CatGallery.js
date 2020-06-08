import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class CatGallery extends Component {
    render () {
        return (
            <View style = {{ height: 280, width: 200, marginLeft:20, borderWidth:0.5, borderColor: '#dddddd', borderRadius: 10 }}>
                <View style = {{flex:2}}>
                    <Image 
                        source = {this.props.imageUri}
                        style = {{ flex:1, width:null, height:null, resizeMode:'cover', borderRadius: 10}}
                    />
                </View>
                <View style = {{ flex: 0, paddingLeft:10, paddingTop:15, paddingBottom: 15 }}>
                    <Text>
                        {this.props.name}
                    </Text>
                </View>
            </View>
        )
    }
}

export default (CatGallery);