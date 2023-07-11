import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const ParkingScreen = ({navigation}) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelect = slot => {
    setSelectedSlot(slot);
    // Perform any additional logic here, such as booking the selected slot
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a parking slot:</Text>
      <TouchableOpacity
        onPress={() => handleSlotSelect(1)}
        style={selectedSlot === 1 ? styles.selectedSlot : styles.slot}>
        <Text style={styles.slotText}>Slot 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSlotSelect(2)}
        style={selectedSlot === 2 ? styles.selectedSlot : styles.slot}>
        <Text style={styles.slotText}>Slot 2</Text>
      </TouchableOpacity>
      {/* Add more slot options here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  slot: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  selectedSlot: {
    backgroundColor: 'green',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  slotText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ParkingScreen;
