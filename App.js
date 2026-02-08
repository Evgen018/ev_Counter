import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, styles.buttonMinus]}
          onPress={() => setCount((c) => c - 1)}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonPlus]}
          onPress={() => setCount((c) => c + 1)}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.buttonReset]}
        onPress={() => setCount(0)}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonResetText}>Сброс</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  counter: {
    fontSize: 72,
    fontWeight: '200',
    color: '#eee',
    marginBottom: 48,
  },
  buttons: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 24,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPlus: {
    backgroundColor: '#0f3460',
  },
  buttonMinus: {
    backgroundColor: '#16213e',
  },
  buttonText: {
    fontSize: 32,
    color: '#e94560',
    fontWeight: '600',
  },
  buttonReset: {
    backgroundColor: '#533483',
    paddingHorizontal: 40,
  },
  buttonResetText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
});
