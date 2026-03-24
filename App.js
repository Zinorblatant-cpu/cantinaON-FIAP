import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen.js';
import ShoppinScreen from './pages/shoppingCartScreens.js';
import PasswordScreen from './pages/PasswordScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Sale" 
          component={ShoppinScreen} 
          options={{ title: 'Carrinho' }}
        />
        <Stack.Screen 
          name="Password"   // ← agora com P maiúsculo
          component={PasswordScreen} 
          options={{ title: 'Sua Senha' }} // ← título exibido no header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}