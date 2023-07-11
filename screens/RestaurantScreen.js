import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const RestaurantScreen = ({navigation}) => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableSelect = table => {
    setSelectedTable(table);
    // Perform any additional logic here, such as booking the selected table
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a table:</Text>
      <TouchableOpacity
        onPress={() => handleTableSelect(1)}
        style={selectedTable === 1 ? styles.selectedTable : styles.table}>
        <Text style={styles.tableText}>Table 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleTableSelect(2)}
        style={selectedTable === 2 ? styles.selectedTable : styles.table}>
        <Text style={styles.tableText}>Table 2</Text>
      </TouchableOpacity>
      {/* Add more table options here */}
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
  table: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  selectedTable: {
    backgroundColor: 'green',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  tableText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RestaurantScreen;
