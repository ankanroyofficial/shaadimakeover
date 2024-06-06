import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Image} from 'react-native';
import {Icons} from '../utils/theme/Icons';
import {normalize} from '../utils/theme/Dimens';
import {COLORS} from '../utils/theme/Colors';
import Home from '../screen/main/home/Home';
import Message from '../screen/main/message/Message';
import Booking from '../screen/main/booking/Booking';
import Reel from '../screen/main/reel/Reel';
import {useSelector} from 'react-redux';
import Profile from '../screen/main/user/Profile';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation(props) {
  const navigation = useNavigation();
  const AuthReducer = useSelector(state => state.AuthReducer);
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
    {
      name: 'Reel',
      component: Reel,
      icon: Icons.logo,
      isVisible: true,
    },
    {
      name: 'Message',
      component: Message,
      icon: Icons.message,
      isVisible: true,
    },

    {
      name: 'Profile',
      component: Profile,
      icon: Icons.user,
      isVisible: true,
    },
  ];
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: normalize(57),
          backgroundColor: COLORS.white,
          width: '100%',
          alignItems: 'center',
          borderTopWidth: 0,
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
                        height: index != 2 ? normalize(21) : normalize(23),
                        width: index != 2 ? normalize(21) : normalize(23),
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
