import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './components/HomeScreen';
import GK_Screen from './components/GK_Screen';
import SciScreen from './components/SciScreen';
import MathScreen from './components/MathScreen';
import PakStudyScreen from './components/PakStudyScreen';
import GK_MCQs from './components/GK_MCQs'
import Math_MCQs from './components/Math_MCQs';
import SciMCQsScreen from './components/SciScreen';
import PakStudyMCQsScreen from './components/PakStudyScreen';
import Login from './components/LoginScreen';

const Stack=createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
        name='Home'
        component={HomeScreen}
        />

        <Stack.Screen
        name='GK'
        component={GK_Screen}
        />

        <Stack.Screen
        name='Science'
        component={SciScreen}
        />

        <Stack.Screen
        name='Math'
        component={MathScreen}
        />

        <Stack.Screen
        name='PakStudy'
        component={PakStudyScreen}
        />

        <Stack.Screen
        name='GK_MCQs'
        component={GK_MCQs}
        />

        <Stack.Screen
        name='Math_MCQs'
        component={Math_MCQs}
        />

        <Stack.Screen
        name='Science MCQs'
        component={SciMCQsScreen}
        />

        <Stack.Screen
        name='Pak. Study MCQs'
        component={PakStudyMCQsScreen}
        />

        <Stack.Screen
        name='Login'
        component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App