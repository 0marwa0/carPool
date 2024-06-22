
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import SearchBar from './search';

const image = {uri: './assets/Map.png'};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showActivityImage, setShowActivityImage] = useState(false);

  const handleActivityPress = () => {
    setShowActivityImage(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}> 
      {showActivityImage && (
        <ImageBackground source={require('./assets/activities.png')} style={{ flex: 1, resizeMode: 'cover' }} />
      )}
      {!showActivityImage && (
        <ImageBackground source={require('./assets/Map.png')}  resizeMode="cover" style={styles.image} >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          </View>
          <SearchBar/>
          <View style={{ flexDirection: 'row',
          backgroundColor:"white",
          justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12 }}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={handleActivityPress}>
              <View style={styles.circle}>
                <MaterialIcons name="directions-run" size={30} color="#666" />
              </View>
              <Text>Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <View style={styles.circle}>
                <MaterialIcons name="favorite" size={30} color="#666" />
              </View>
              <Text>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <View style={styles.circle}>
                <MaterialIcons name="shopping-bag" size={30} color="#666" />
              </View>
              <Text>Market</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <View style={styles.circle}>
                <MaterialIcons name="work" size={30} color="#666" />
              </View>
              <Text>Work</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#EEEEEE",
  },
  icons:{
    backgroundColor:"white"

  }
  ,
  image: {
    flex: 1,
    justifyContent: 'center',
  }
});
export default App;