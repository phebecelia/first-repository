import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';

import CatGallery from './component/CatGallery';
import HomePict from './component/HomePict';
import Jasa from './component/Jasa';

const {height, width} = Dimensions.get('window');

class Home extends Component {
  render () {
    return (
      <View>
        <ScrollView
          scrollEventThrottle = {16}
        >
          <View style = {{ flex:1 }}/>
          <View style = {{  backgroundColor: 'white' }} >
            <HomePict/>           
          </View>


          <View style = {{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <Text style = {{ fontSize:24, fontWeight: '700', paddingHorizontal: 20 }}>
              What can we help you find, Guest?
            </Text>

            <View style = {{ height: 280, marginTop: 20 }}>
              <ScrollView
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
              >
                <CatGallery imageUri = {require('../image/header-1536x480.jpg')} name = 'Home' />
                <CatGallery imageUri = {require('../image/header-1536x480.jpg')} name = 'Kedua' />
                <CatGallery imageUri = {require('../image/header-1536x480.jpg')} name = 'Ketiga' />
              </ScrollView>
            </View>
            <View style = {{ flex:1, marginTop: 40, paddingHorizontal: 20 }}/>
              <Text style = {{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                Introducing UMKM
              </Text>
              <Text style = {{ fontWeight:'100', marginTop: 10,  paddingHorizontal: 20 }}>
                A new selection of home verified for quality and comfort
              </Text>
              <View style = {{width:width-40, height: 200, marginTop: 20, marginLeft:20 }}>
                <Image 
                  style = {{flex:1, height:null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth:1, borderColor: '#dddddd'}} 
                  source = {require('../image/header-1536x480.jpg')}
                />
              </View>
          </View>

          <View style={{ backgroundColor: 'white' }}>
          <View style={{ marginTop: 30 }}/>
            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
              Homes around the world
            </Text>
            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <Jasa width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                rating={4}
              />
              <Jasa width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                rating={4}
              />
              <Jasa width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                rating={4}
              />
              <Jasa width={width}
                name="The Cozy Place"
                type="PRIVATE ROOM - 2 BEDS"
                price={82}
                rating={4}
              />
          </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default (Home);