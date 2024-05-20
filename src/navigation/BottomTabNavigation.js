import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  View,
  Image, 
  Platform, 
} from 'react-native';
import {Icons} from '../utils/theme/Icons';
import {normalize} from '../utils/theme/Dimens';
import {COLORS} from '../utils/theme/Colors';
import Home from '../screen/main/home/Home';
import Message from '../screen/main/message/Message';
import Favorite from '../screen/main/favorite/Favorite';
import Booking from '../screen/main/booking/Booking'; 
import MyProfileAsMakeupArtist from '../screen/main/user/MyProfileAsMakeupArtist';
import MyProfileAsCustomer from '../screen/main/user/MyProfileAsCustomer';

const Tab = createBottomTabNavigator();

const tabBarList = [
  {
    name: 'Home',
    component: Home,
    icon: Icons.home,
    isVisible: true,
  },
  {
    name: 'Booking',
    component: Booking,
    icon: Icons.calender,
    isVisible: true,
  },
  // {
  //   name: 'Favorite',
  //   component: Favorite,
  //   icon: Icons.tabFav,
  // isVisible:true
  // },
  {
    name: 'Message',
    component: Message,
    icon: Icons.message,
    isVisible: true,
  },
  {
    name: 'MyProfileAsCustomer',
    component: MyProfileAsCustomer,
    icon: Icons.user,
    isVisible: 5 != 5,
  },
  {
    name: 'MyProfileAsMakeupArtist',
    component: MyProfileAsMakeupArtist,
    icon: Icons.user,
    isVisible: 5 == 5,
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
          elevation: 3,
          // borderTopWidth: 0,
          // paddingTop: normalize(0),
          // shadowOpacity: 0.5,
          // shadowColor: COLORS.primary,
          // shadowOffset: {
          //   height: 1,
          //   width: 0,
          // },
          // shadowRadius: 10,
        },
      }}>
      {tabBarList.map((item, index) => {
        return (
          item?.isVisible && (
            <Tab.Screen
              key={index}
              name={item.name}
              component={item.component}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      ...styles.view,
                      backgroundColor: focused
                        ? COLORS.primary
                        : 'rgba(0,0,0,0)',
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
          )
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
