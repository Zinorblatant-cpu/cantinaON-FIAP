import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

// Menu items array
const MENU_ITEMS = [
  {
    id: 1,
    name: 'paçoca',
    price: 'R$ 1,00',
    image: require('../assets/57596f11b42e342e491148f4b2c5b018.jpg'),
  },
  {
    id: 2,
    name: 'pao de batata',
    price: 'R$ 6,00',
    image: require('../assets/78815a4d1e94961c988524b13385288c.jpg'),
  },
  {
    id: 3,
    name: 'cachorro quente',
    price: 'R$ 10,00',
    image: require('../assets/a7e28508d953b4855de4610f24276302.jpg'),
  },
  {
    id: 4,
    name: 'coxinha',
    price: 'R$ 8,00',
    image: require('../assets/d9aac6fcffc571291deb0c7288811d04.jpg'),
  },
];

export default function HomeScreen({ navigation }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const selectItem = (item) => {
    Alert.alert(
      '🍽️ Item selecionado',
      `${item.name} - ${item.price}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Adicionar ao carrinho', 
          onPress: () => {
            setSelectedItems([...selectedItems, item]);
            Alert.alert('✅ Sucesso!', `${item.name} adicionado ao carrinho`);
          }
        }
      ]
    );
  };

  const goToCart = () => {
    navigation.navigate('Sale', { selectedItems });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.title}>🍔 FIAP BURGER</Text>

        <TouchableOpacity 
          style={styles.cartButton}
          onPress={goToCart}
        >
          <Text style={styles.cartIcon}>🛒</Text>
          {selectedItems.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{selectedItems.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        {MENU_ITEMS.map((item) => (
          <TouchableOpacity 
            key={item.id}
            style={styles.menuItem}
            onPress={() => selectItem(item)}
            activeOpacity={0.7}
          >
            <Image 
              source={item.image}
              style={styles.image}
            />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </TouchableOpacity>
        ))}
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
    paddingHorizontal: 20,
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#E3000B',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E3000B',
  },
  cartButton: {
    padding: 8,
    position: 'relative',
  },
  cartIcon: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  badge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#E3000B',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  menuItem: {
    width: '48%', 
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#E3000B',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E3000B',
  },
});