import React from 'react';
import {SafeAreaView} from 'react-native';
import { Screens } from './src';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex:1, height:100}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          <Stack.Screen name='Home' component={Screens.HomeScreen}/>
          <Stack.Screen name='feed' component={Screens.NewsFeeds}/>
          <Stack.Screen name='news' component={Screens.News} options={{headerShown:true, headerTitle:'Hot Updates'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


export default App;
