import React from 'react';
import {Text, View, Image} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

const SplashScreen = () => {
  return (
    <View style={{paddingVertical: 150, paddingHorizontal: 20}}>
      <Image
        style={{width: '100%', height: 300, marginVertical: 50}}
        source={{
          uri:
            'https://t3.ftcdn.net/jpg/00/88/43/58/360_F_88435847_HhglbcoGP5qOX3DfudP3hN5z95eTrHqz.jpg',
        }}
      />
      <ActivityIndicator size={60} animating={true} color={Colors.red800} />
    </View>
  );
};

export default SplashScreen;
