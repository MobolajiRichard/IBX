# Welcome
Good Day, My name is Oginni Mobolaji Richard, thanks for giving me the opportunity to showcase myself.

------------------------------------------------------------------------------------
listed belows are information about this app and instructions to run this application
-------------------------------------------------------------------------------------

# App details
This app was created using React Native Cli, listed below are the dependencies used and their purpose
   "@react-navigation/native": "^6.1.7"  - For Navigation,
    "@react-navigation/native-stack": "^6.9.13" - For Navigation ,
    "@react-navigation/stack": "^6.3.17" - For Navigation ,
    "@reduxjs/toolkit": "^1.9.5" - For App State Management,
    "react-native-linear-gradient": "^2.8.2" - For gradients in the news card,
    "react-native-modal": "^13.0.1" - For modal in the serch screen,
    "react-native-safe-area-context": "^4.7.1" - React Navigation dependency,
    "react-native-screens": "^3.24.0" - React Navigation dependency,
    "react-native-svg": "13.4.0" - For icons,
    "react-redux": "^8.1.2" - For App State Management,
    "typescript": "4.8.4"  - For Type checking

# Starting App
To run app, after succcessfully cloning or downloading the source code on github, run the following code on the terminal:
(Please a working enviroment is required to successfully run the app)
- cd NewsBlog
- yarn install (if using npm please delete the yarn.lock file and run npm install instead)
- cd ios
- pod install
- cd ..
- npm start
- i (opens on iOS simulator) 
- a (opens onAndroid simulator)

# App Workflow
- On successful lanuch,
- App shows the home screen and news in two sections - Latest News and Categories Section
- onPress of the see all, the app navigates to the Hot Updates section which shows all the news from the latest news
- onPress of the search box, the app naviagtes to the search screen on text inputs and submit the app makes an api call to generate the search requests and displays them.
- onPress of any of the cards the app naviagtes to the News Screen where users can see the full details of the news.
- Some cards might not have an image background, this is due to the api returning some broken image links or some news have no cover images.

# NB
- The api is limited by NewsApi.org and can only make 100 api calls in a day.
- Some cards might not have an image background, this is due to the api returning some broken image links or some news have no cover images.
- Some news have no contents
- Users may see words like '[+ 774 chars]' in the news feed this is because the api doesn't realease the full news for developers testing with the api.
    