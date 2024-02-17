import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import MaterialComIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import Login from '../Login';
import Register from '../Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Category from '../category/Category';
import Wallet from '../wallet/Wallet';
import Home from '../Home';
import { CategoryIcon, CategoryOutline } from './CategoryIcon';
import Dashboard from '../dashboard/Dashboard';
import Offer from '../offer/Offer';
import ProductDetails from '../productDetails/ProductDetails';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function StackNavigation() {
    function BottomTabs() {
        return (
            <Tab.Navigator screenOptions={{tabBarActiveBackgroundColor:'black',tabBarInactiveBackgroundColor:'black',
            tabBarActiveTintColor:'#fa8200',
            tabBarStyle:{height:60}
            }}>
                <Tab.Screen
                    name='home'
                    component={Home}
                    options={{
                        tabBarLabel: "Home",
                        tabBarLabelStyle: {  fontSize: 13, },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (<IonIcon name="home" size={35} color="#fa8200" />)
                            : (<IonIcon name="home-outline" size={35} color="#fff" />)
                    }}
                />
                  <Tab.Screen
                    name='offer'
                    component={Offer}
                    options={{
                        tabBarLabel: "Offer",
                        tabBarLabelStyle: {  fontSize: 13, },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (<IonIcon name="pricetags-sharp" size={35} color="#fa8200" />)
                            : (<IonIcon name="pricetags-outline" size={35} color="#fff" />)
                    }}
                />
                <Tab.Screen
                    name='category'
                    component={Category}
                    options={{
                        tabBarLabel: "Category",
                        tabBarLabelStyle: {  fontSize: 13, },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (<CategoryIcon />) : (<CategoryOutline />)
                    }}
                />
                <Tab.Screen
                    name='dashboard'
                    component={Dashboard}
                    options={{
                        tabBarLabel: "Dashboard",
                        tabBarLabelStyle: { fontSize: 13, },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (<MaterialComIcons name="view-dashboard" size={35} color="#fa8200" />) : (<MaterialComIcons name="view-dashboard-outline" size={35} color="#fff" />)
                    }}
                />
                <Tab.Screen
                    name='wallet'
                    component={Wallet}
                    options={{
                        tabBarLabel: "Wallet",
                        tabBarLabelStyle: {  fontSize: 13, },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (<MaterialComIcons name="wallet" size={35} color="#fa8200" />) : (<MaterialComIcons name="wallet-outline" size={35} color="#fff" />)
                    }}
                />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer >
            <Stack.Navigator>
            <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
            <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='main' component={BottomTabs} options={{ headerShown: false }}  />
            <Stack.Screen name="productdetails" component={ProductDetails}  options={{ headerShown: false }}/>
         
          
        
         
            
            </Stack.Navigator>
        </NavigationContainer>
    )

}
