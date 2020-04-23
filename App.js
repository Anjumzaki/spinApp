import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './App/Screens/Splash';
import {
  Home,
  About,
  Spin,
  Counter,
  VBucks,
  SaveWorld,
  BattlePass,
  VBuckToDollars,
  DollarsToVBucks,
  DailyVBucks,
  UpgradeLlama,
  QuizEnd,
  WebVBucks
} from './App/Screens';
import Quiz from './App/Screens/Quiz'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}

        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}

        />

        <Stack.Screen
          name="About"
          component={About}
        />

        <Stack.Screen
          name="Spin"
          component={Spin}
        />

        <Stack.Screen
          name="Counter"
          component={Counter}
        />

        <Stack.Screen
          name="VBucks"
          component={VBucks}
        />

        <Stack.Screen
          name="SaveWorld"
          component={SaveWorld}
        />

        <Stack.Screen
          name="BattlePass"
          component={BattlePass}
        />
         <Stack.Screen
          name="VBuckToDollars"
          component={VBuckToDollars}
        />
         <Stack.Screen
          name="DollarsToVBucks"
          component={ DollarsToVBucks}
        />
        <Stack.Screen
          name="DailyVBucks"
          component={ DailyVBucks}
        />
        <Stack.Screen
          name="UpgradeLlama"
          component={ UpgradeLlama}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QuizEnd"
          component={QuizEnd}
        />
        <Stack.Screen
          name="WebVBucks"
          component={WebVBucks}
        />
       
       
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
