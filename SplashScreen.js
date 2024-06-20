import React from 'eact';
import { View, Text, StyleSheet } from 'eact-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carpool</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // black background
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF', // white text
  },
});

export default SplashScreen;