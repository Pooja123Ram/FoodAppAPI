
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './src/recipespage/Home';
import Notification from './src/recipespage/Notification';
import Scan from './src/recipespage/Scan';
import Profile from './src/recipespage/Profile';
import Items from './src/recipespage/Items';
import Food from './src/recipespage/Food';
import Ingredients from './src/recipespage/Ingredients';
import Filter from './src/recipespage/Filter';
import NextScreen from './src/recipespage/NextScreen';
import { View, StyleSheet, Image } from 'react-native';
import ProfileDetails from './src/recipespage/ProfileDetails';
import CardDescription from './src/recipespage/CardDescription';
import Custom from './src/Components/Custom';
import { globalStyles } from './Styles';
import FontsFam from './src/recipespage/FontsFam';
import Itemsearch from './src/recipespage/Itemsearch';
import Bottom_nav from './src/Bottom_nav';
import HomePage from './src/onboardingpage/HomePage';
import HomeLoginpage from './src/onboardingpage/HomeLoginpage';
import RegisterPage from './src/onboardingpage/RegisterPage';
import OtpPage from './src/onboardingpage/OtpPage';
import RestPassword from './src/onboardingpage/RestPassword';
import UploadStep2 from './src/uploadpage/UploadStep2';
import Uploadsuccess from './src/uploadpage/Uploadsuccess';
import Capturer from './src/uploadpage/Capturer';
import UploadStep1 from './src/uploadpage/UploadStep1';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const UploadStack = createStackNavigator();

function UploadStackScreen() {
  return (
    <UploadStack.Navigator>

      <UploadStack.Screen
        name="UploadStep1"
        component={UploadStep1}
        options={{ headerShown: false }}
      />
      <UploadStack.Screen
        name="UploadStep2"
        component={UploadStep2}
        options={{ headerShown: false }}
      />
      <UploadStack.Screen
        name="Uploadsuccess"
        component={Uploadsuccess}
        options={{ headerShown: false }}
      />
      <UploadStack.Screen
        name="Capturer"
        component={Capturer}
        options={{ headerShown: false }}
      />
    </UploadStack.Navigator>
  );
}

function HomeScreen() {
  const route = useRoute();

  return (
    <View style={{ flex: 1,}}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#1FCC79',
          inactiveTintColor: '#9FA5C0',
        }}
        tabBarStyle={{
          elevation: 0, 
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} style={styles.scanIcon1} />
            ),
          }}
        />

<Tab.Screen
          name="Upload"
          component={UploadStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="pencil" color={color} size={size} style={styles.scanIcon1}/>
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate('UploadStep1');
            },
          })}
        />

       
        <Tab.Screen
          name="Scan"
          component={Scan}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="qrcode" color={color} size={size} style={styles.scanIcon} />
            ),
          }}
        />
      
          <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="bell" color={color} size={size} style={styles.scanIcon1}/>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} style={styles.scanIcon1}/>
            ),
          }}
        />
      </Tab.Navigator>
      {route.name === 'Home' && (
        <View style={{ display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#fff', paddingTop:'3%'  }}>
        <Image source={require('./assets/indicator.png')} style={globalStyles.imageIndicator} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scanIcon: {
    backgroundColor: '#1FCC79',
    height: 60,
    width: 60,
    borderRadius: 30,
    marginBottom: 40,
    textAlign: 'center',
    paddingTop: 18,
    color: '#fff',
  },

});

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
   
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Itemsearch" component={Itemsearch}/>
        <Stack.Screen name="Items"component={Items} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Ingredients" component={Ingredients} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
        <Stack.Screen name="RestPassword" component={RestPassword} />
        <Stack.Screen name="HomeLoginpage" component={HomeLoginpage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="OtpPage" component={OtpPage} />
        <Stack.Screen name='ProfileDetails' component={ProfileDetails} />
        <Stack.Screen name='CardDescription' component={CardDescription} />
        <Stack.Screen name="Custom" component={Custom} />
        <Stack.Screen name="UploadStep1" component={UploadStep1} />
        <Stack.Screen name="UploadStep2" component={UploadStep2} />
        <Stack.Screen name="Uploadsuccess"component={Uploadsuccess} />
        <Stack.Screen name="Capturer" component={Capturer} />
        <Stack.Screen name="FontsFam" component={FontsFam}/>
        <Stack.Screen name="Bottom_nav" component={Bottom_nav}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

