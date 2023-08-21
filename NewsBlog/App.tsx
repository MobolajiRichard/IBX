import React from 'react';
import {Button, SafeAreaView, Pressable} from 'react-native';
import {Screens} from './src';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types';
import {COLORS, ICONS} from './src/constant';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <Provider store={store}>
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
              headerTitleAlign:'center'
            })}
          />
          <Stack.Screen
            name="news"
            component={Screens.News}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name="search"
            component={Screens.Search}
            options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
