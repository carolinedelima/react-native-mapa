import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import customStyle from './customStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        customMapStyle={customStyle}
        style={styles.mapStyle}
        initialRegion={{
          latitude: -23.290086,
          longitude: -47.296266,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
      >
        <Marker 
          coordinate={{
            latitude: -23.290027,
            longitude: -47.296266,
          }}
          title="Fatec Itu"
          description="Av. Tiradentes, 1211 - Parque Industrial, Itu - SP, 13309-640"
        />

        <Marker 
          coordinate={{
            latitude: -23.264132,
            longitude: -47.299446
          }}
          title="Matriz Nossa Senhora da Candelária"
          description="R. Barão do Itaim, 165-1 - Centro, Itu - SP, 13300-220"
        />

        <Marker 
          coordinate={{
            latitude: -23.267960,
            longitude: -47.319328
          }}
          title="Parque Geológico do Varvito"
          description="Rua Parque do Varvito, 280, Itu - SP"
        />

        <Marker 
          coordinate={{
            latitude: -23.264258,
            longitude: -47.298996
          }}
          title="Museu Republicano Convenção de Itu"
          description="R. Barão do Itaim, 67 - Centro, Itu - SP, 13300-090"
        />

        <Marker 
          coordinate={{
            latitude: -23.282081,
            longitude: -47.229170
          }}
          title="Fazenda de Chocolate"
          description="Estr. dos Romeiros, s/n - KM 90, Itu - SP, 13300-000"
        />

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: '100%'
  }
});
