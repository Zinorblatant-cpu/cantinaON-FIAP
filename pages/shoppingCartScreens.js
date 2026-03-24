import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ShoppinScreen({ route, navigation }) {
  const { selectedItems } = route.params; 
  const groupedItems = selectedItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const total = groupedItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('R$', '').replace(',', '.'));
    return acc + (price * item.quantity);
  }, 0);

  const goToPassword = () => {
    navigation.navigate('Password');
  };

  const isCartEmpty = groupedItems.length === 0;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text style={styles.title}>🛒 Carrinho</Text>
      </View>

      <View style={styles.itemsContainer}>
        {!isCartEmpty ? (
          groupedItems.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                {item.quantity > 1 && (
                  <Text style={styles.itemQuantity}>x{item.quantity}</Text>
                )}
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCart}>Carrinho vazio</Text>
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.payButton, isCartEmpty && styles.payButtonDisabled]} 
          onPress={isCartEmpty ? null : goToPassword} 
          disabled={isCartEmpty} 
        >
          <Text style={[styles.payButtonText, isCartEmpty && styles.payButtonTextDisabled]}>
            Pagar R$ {total.toFixed(2).replace('.', ',')}
          </Text>
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
  itemsContainer: {
    flex: 1,
    padding: 10,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  emptyCart: {
    textAlign: 'center',
    fontSize: 18,
    color: '#999',
    marginTop: 50,
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  payButton: {
    backgroundColor: '#2ecc71',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  payButtonDisabled: {
    backgroundColor: '#ccc', 
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  payButtonTextDisabled: {
    color: '#999',
  }
});