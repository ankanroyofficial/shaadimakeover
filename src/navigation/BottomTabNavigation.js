import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Platform,
  ImageBackground,
} from 'react-native';
import {Icons} from '../utils/theme/Icons';
import {normalize} from '../utils/theme/Dimens';
import {COLORS} from '../utils/theme/Colors';
import SignIn from '../screen/auth/SignIn';
import SignUp from '../screen/auth/SignUp';
import OtpVerification from '../screen/auth/OtpVerification';
import Home from '../screen/main/home/Home';
import User from '../screen/main/user/User';
import Message from '../screen/main/message/Message';
import Favorite from '../screen/main/favorite/Favorite';
import Booking from '../screen/main/booking/Booking';

const Tab = createBottomTabNavigator();

const tabBarList = [
  {
    name: 'Home',
    component: Home,
    icon: Icons.home,
  },
  {
    name: 'Booking',
    component: Booking,
    icon: Icons.calender,
  },
  {
    name: 'Favorite',
    component: Favorite,
    icon: Icons.tabFav,
  },
  {
    name: 'Message',
    component: Message,
    icon: Icons.message,
  },
  {
    name: 'User',
    component: User,
    icon: Icons.user,
  },
];

export default function BottomTabNavigation(props) {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        // unmountOnBlur: true,
        tabBarStyle: {
          position: 'absolute',
          height: Platform.OS == 'android' ? normalize(57) : normalize(70),
          backgroundColor: COLORS.white,
          width: '92%',
          borderRadius: normalize(12),
          bottom: normalize(15),
          marginHorizontal: normalize(12),
          alignItems: 'center',
          borderTopWidth: 0,
          paddingTop:
            Platform.OS === 'ios'
              ? Dimensions.get('window').height > 736
                ? normalize(24)
                : normalize(0)
              : normalize(0),
          shadowOpacity: 0.5,
          elevation: 3,
          shadowColor: COLORS.primary,
          shadowOffset: {
            height: 1,
            width: 0,
          },
          shadowRadius: 10,
        },
      }}>
      {tabBarList.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    ...styles.view,
                    backgroundColor: focused ? COLORS.primary : 'rgba(0,0,0,0)',
                  }}>
                  <Image
                    resizeMode="contain"
                    source={item.icon}
                    style={{
                      height: normalize(21),
                      width: normalize(21),
                      tintColor: focused ? COLORS.white : '#333333',
                    }}
                  />
                </View>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(7),
  },
  image: {
    height: normalize(20),
    width: normalize(20),
  },
});
