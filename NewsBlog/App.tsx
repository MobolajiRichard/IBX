import React from 'react';
import { Pressable }from 'react-native';
import {Screens} from './src';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types';
import { ICONS} from './src/constant';
import {Provider} from 'react-redux';
import {store} from './redux/store';

// initializing the stack for navigation
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
        {/* Home screen */}
          <Stack.Screen name="Home" component={Screens.HomeScreen} />

          {/* Hot updates screen */}
          <Stack.Screen
            name="feed"
            component={Screens.NewsFeeds}
            options={({navigation}) => ({
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: 'Hot Updates',
              headerTitleStyle: {
                fontSize: 17,
                color: '#FF3A44',
                fontFamily: 'SF-Pro',
                fontWeight: '600',
              },
              headerShadowVisible: false,
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <ICONS.Back />
                </Pressable>
              ),
              headerTitleAlign: 'center',
            })}
          />

          {/* News screen */}
          <Stack.Screen name="news" component={Screens.News} />

          {/* search screen */}
          <Stack.Screen name="search" component={Screens.Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
