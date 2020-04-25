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
          options={{title: ''}}
        />

        <Stack.Screen
          name="Spin"
          component={Spin}
          options={{title: ''}}
        />

        <Stack.Screen
          name="Counter"
          component={Counter}
          options={{title: ''}}
        />

        <Stack.Screen
          name="VBucks"
          component={VBucks}
          options={{title: ''}}
        />

        <Stack.Screen
          name="SaveWorld"
          component={SaveWorld}
          options={{title: ''}}
        />

        <Stack.Screen
          name="BattlePass"
          component={BattlePass}
          options={{title: ''}}
        />
         <Stack.Screen
          name="VBuckToDollars"
          component={VBuckToDollars}
          options={{title: ''}}
        />
         <Stack.Screen
          name="DollarsToVBucks"
          component={ DollarsToVBucks}
          options={{title: ''}}
        />
        <Stack.Screen
          name="DailyVBucks"
          component={ DailyVBucks}
          options={{title: ''}}
        />
        <Stack.Screen
          name="UpgradeLlama"
          component={ UpgradeLlama}
          options={{title: ''}}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{title: ''}}
        />
        <Stack.Screen
          name="QuizEnd"
          component={QuizEnd}
          options={{title: ''}}
        />
        <Stack.Screen
          name="WebVBucks"
          component={WebVBucks}
          options={{title: ''}}
        />
       
       
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
