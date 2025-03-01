import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import StoreContext from '@/Store/StoreContext';

const Settinge = () => {
  // const [isNightMode, setIsNightMode] = useState(false); // State to toggle modes
  const { isNightMode, setIsNightMode } = useContext(StoreContext)

  const toggleMode = () => {
    setIsNightMode(!isNightMode); // Toggle between night and day modes
  };

  return (
    <View style={[styles.container, isNightMode && styles.nightMode]}>
      <Text style={[styles.numberPhone, isNightMode && styles.nightText]}>To contact the app owner:</Text>
      <Text style={[styles.numberPhone1, isNightMode && styles.nightText]}>0505249480</Text>

      {/* Toggle button to switch modes */}
      <TouchableOpacity onPress={toggleMode} style={[styles.toggleButton, isNightMode && styles.nightButton]}>
        <Text style={[styles.toggleButtonText, isNightMode && styles.nightButtonText]}>
          {isNightMode ? 'Switch to Day Mode' : 'Switch to Night Mode'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settinge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for day mode
    justifyContent: 'center',
    alignItems: 'center',
  },
  nightMode: {
    backgroundColor: '#1E1E1E', // Black background for night mode
  },
  numberPhone: {
    fontSize: 28,
    color: '#000000', // Black text for day mode
    textAlign: 'center',
    marginBottom: 33,
  },
  nightText: {
    color: '#FFD700', // Gold text for night mode
  },
  numberPhone1: {
    backgroundColor: 'white',
    width: 200,
    height: 42,
    marginLeft: 5,
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 30,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 40,
  },
  toggleButton: {
    backgroundColor: '#FFD700', // Gold background for button
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 20,
  },
  nightButton: {
    backgroundColor: '#FFD700', // Gold button for night mode
  },
  toggleButtonText: {
    fontSize: 18,
    color: '#000000', // Black text for day mode
    textAlign: 'center',
  },
  nightButtonText: {
    color: '#FFFFFF', // White text for night mode
  },
});
