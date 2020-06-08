import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

class DescProfile extends Component {
    render () {
      return (
        <View>
        <ScrollView
          scrollEventThrottle = {16}
        >
        <View style = {{ flex: 1, backgroundColor: 'white' }}>
            <View style = {{width:width, height: 400 }}>
                <Image 
                    style = {{flex:1, height:null, width: null, borderRadius: 5, borderWidth:1, borderColor: '#dddddd'}} 
                    source = {require('../../image/header-1536x480.jpg')}
                />
                <Text style = {{ fontSize: 30, fontWeight: '700', paddingHorizontal: 20, paddingTop: 20 }}>
                    Phebe Celia
                </Text>
                <Text style = {{ fontWeight:'200', marginTop: 10, paddingHorizontal: 20 }}>
                    Faded memories like dreams of a spring day They’ve all disappeared a
                    nd the cold nights grow deeper I try to ignore my exhausted heart Now the days 
                    of our love Days that came to me without a word All the memories from the countless 
                    seasons All the memories that I can’t even erase... 
                </Text>
            </View>
            <View style = {{ flex: 1, backgroundColor: 'white', paddingTop: 20}}/>
                <Text style = {{ fontSize:24, fontWeight: '700', paddingHorizontal: 20 }}>
                    What can we help you find, Guest?
                </Text>

                <View style = {{ height: 280, marginTop: 20 }}>
                <ScrollView
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                >
                   
                    <View style = {{ height: 280, width: 200, marginLeft:20, borderWidth:0.5, borderColor: '#dddddd', borderRadius: 10 }}>
                    <View style = {{flex:2}}>
                        <Image 
                            source = {require('../../image/header-1536x480.jpg')}
                            style = {{ flex:1, width:null, height:null, resizeMode:'cover', borderRadius: 10}}
                        />
                </View>
                <View style = {{ flex: 0, paddingLeft:10, paddingTop:15, paddingBottom: 15 }}>
                    <Text>
                        satu
                    </Text>
                </View>
                   </View>
                </ScrollView>
                </View>
                </View>
        </ScrollView>
      </View>
      )
    }
}

export default (DescProfile);