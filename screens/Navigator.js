import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from './Home';
import AccountScreen from './Account';
import BlogScreen from './Blog';
import GalleryScreen from './Gallery';
import SinglePost from './SinglePost';

const HomeStack = createStackNavigator();
const AccountStack = createStackNavigator();
const BlogStack = createStackNavigator();
const GalleryStack = createStackNavigator();
const SinglePostStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      inactiveColor="#a9a9a9"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#fff',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryStackScreen}
        options={{
          tabBarLabel: 'Gallery',
          tabBarColor: '#fff',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="photo-library" color={color}  size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={BlogStackScreen}
        options={{
          tabBarLabel: 'Blog',
          tabBarColor: '#fff',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="file-document-box-multiple" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarColor: '#fff',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default (MainTabScreen);

const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerTitleAlign: {
          alignSelf: 'center',
        }        
    }}>
        <HomeStack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title:'Home' }} 
        />
    </HomeStack.Navigator>
);

const GalleryStackScreen = () => (
  <GalleryStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
        
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerTitleAlign: {
        alignSelf: 'center',
      }        
  }}>
      <GalleryStack.Screen 
          name="Gallery" 
          component={GalleryScreen} 
          options={{ title:'Gallery' }} 
      />
  </GalleryStack.Navigator>
);

const BlogStackScreen = () => (
  <BlogStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
        
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerTitleAlign: {
        alignSelf: 'center',
      }        
  }}>
      <HomeStack.Screen 
          name="Blog" 
          component={BlogScreen} 
          options={{ title:'Blog' }} 
      />
      <SinglePostStack.Screen 
          name="SinglePost"
          component={SinglePost}
          options={{ title:'SinglePost' }}
      />
  </BlogStack.Navigator>
);

const AccountStackScreen = () => (
    <AccountStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#ffe4e1',
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerTitleAlign: {
          alignSelf: 'center',
        }  
    }}>
        <AccountStack.Screen 
            name="Account"
            component={AccountScreen}
            options={{ title:'Account' }}
        />
    </AccountStack.Navigator>
);