import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GalleryScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Blog Screen</Text>
        <Button
            title="Go to Account screen"
            onPress={() => navigation.navigate("Account")}
        />
      </View>
    );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});