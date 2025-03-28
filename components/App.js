import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {count}</Text>
      <Button title="Artır" onPress={() => setCount(count + 1)} />
      <Button title="Azalt" onPress={() => setCount(count - 1)} />
      <Button title="Sıfırla" onPress={() => setCount(0)} />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      marginBottom: 20,
    },
  });