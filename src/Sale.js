import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';



export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
        <View style={styles.header}>
            <Text style={styles.title}>🛒 Carrinho</Text>
        </View>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  }
});