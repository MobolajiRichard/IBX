import React from 'react';
import {Button, SafeAreaView, Pressable} from 'react-native';
import {Screens} from './src';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types';
import {COLORS, ICONS} from './src/constant';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Screens.HomeScreen} />
          <Stack.Screen
            name="feed"
            component={Screens.NewsFeeds}
            options={({navigation}) => ({
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: 'Hot Updates',
              headerTitleStyle: {fontSize: 17, color: COLORS.primary},
              headerShadowVisible:false,
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <ICONS.Back />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="news"
            component={Screens.News}
            options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
