import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function PasswordScreen({ navigation }) {

  const generatePassword = () => {
    return Math.floor(Math.random() * 100).toString();
  };

  const [password] = useState(generatePassword());

  const goBackToMenu = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <Text style={styles.title}>🎫 SUA SENHA</Text>
      </View>

      <View style={styles.passwordContainer}>
        <Text style={styles.passwordValue}>{password}</Text>
        <Text style={styles.passwordInfo}>
          Aguarde chamar esse número no balcão
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton} onPress={goBackToMenu}>
          <Text style={styles.backButtonText}>VOLTAR AO MENU</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#000000',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#E3000B',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E3000B',
  },
  passwordContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  passwordValue: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#E3000B',
    marginBottom: 20,
  },
  passwordInfo: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  footer: {
    padding: 20,
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: '#E3000B',
  },
  backButton: {
    backgroundColor: '#E3000B',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});