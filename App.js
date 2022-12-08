import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        splashscreen 
      </Text>
      <Card>
        <AssetExample />
      </Card>

      {/* View to hold the button at the bottom of the screen */}
      <View style={styles.bottomButton}>
        {/* Button at the bottom of the screen */}
        <Button title="    Open Camera"> </Button>
        <Button title="Upload Image(s)"> </Button>
        <Button title="Add ENS"> </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row', // Align the button horizontally
    alignItems: 'center', // Center the button vertically
    marginBottom: 20, // Add some space between the button and the bottom of the screen
  },
});

