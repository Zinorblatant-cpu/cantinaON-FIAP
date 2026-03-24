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
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text style={styles.title}>🎫 Sua Senha</Text>
      </View>

      <View style={styles.passwordContainer}>
        <Text style={styles.passwordValue}>{password}</Text>
        <Text style={styles.passwordInfo}>
          Aguarde chamar esse número no balcão
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton} onPress={goBackToMenu}>
          <Text style={styles.backButtonText}>Voltar ao Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
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
    color: '#2ecc71',
    marginBottom: 20,
  },
  passwordInfo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  backButton: {
    backgroundColor: '#2ecc71',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});