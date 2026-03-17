import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

// Menu items array
const MENU_ITEMS = [
  {
    id: 1,
    name: 'paçoca',
    price: 'R$ 1,00',
    image: require('./assets/57596f11b42e342e491148f4b2c5b018.jpg'),
  },
  {
    id: 2,
    name: 'pao de batata',
    price: 'R$ 6,00',
    image: require('./assets/78815a4d1e94961c988524b13385288c.jpg'),
  },
  {
    id: 3,
    name: 'cachorro quente',
    price: 'R$ 10,00',
    image: require('./assets/a7e28508d953b4855de4610f24276302.jpg'),
  },
  {
    id: 4,
    name: 'coxinha',
    price: 'R$ 8,00',
    image: require('./assets/d9aac6fcffc571291deb0c7288811d04.jpg'),
  },
];

export default function HomeScreen() {
  const [selectedItems, setSelectedItems] = useState([]);

  const selectItem = (item) => {
    Alert.alert(
      '🍽️ Item selected',
      `${item.name} - ${item.price}`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Add to cart', 
          onPress: () => {
            setSelectedItems([...selectedItems, item]);
            Alert.alert('✅ Success!', `${item.name} added to cart`);
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.title}>🍔 Menu</Text>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartIcon}>🛒</Text>
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
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  cartButton: {
    padding: 8,
  },
  cartIcon: {
    fontSize: 28,
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
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
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
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
});