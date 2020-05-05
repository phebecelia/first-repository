import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Account screen"
            onPress={() => navigation.navigate("Account")}
        />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});