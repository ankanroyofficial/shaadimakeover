import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/intro/SplashScreen';
import SignIn from '../screen/auth/SignIn';
import OtpVerification from '../screen/auth/OtpVerification';
import SignUp from '../screen/auth/SignUp';
import LocationAccess from '../screen/auth/LocationAccess';
import PersonalInformation from '../screen/auth/PersonalInformation';
import UserTypeSelection from '../screen/auth/UserTypeSelection';
import BottomTabNavigation from './BottomTabNavigation';
import MakeupArtistDetails from '../screen/main/makeupArtist/MakeupArtistDetails';
import MakeupArtistProfile from '../screen/main/makeupArtist/MakeupArtistProfile';

export default function StackNavigation() {
  const Stack = createNativeStackNavigator();

  const stackArr = {
    SplashScreen: SplashScreen,
    LocationAccess: LocationAccess,
    SignIn: SignIn,
    SignUp: SignUp,
    PersonalInformation: PersonalInformation,
    OtpVerification: OtpVerification,
    UserTypeSelection: UserTypeSelection,
    BottomTabNavigation: BottomTabNavigation,
    MakeupArtistDetails: MakeupArtistDetails,
    MakeupArtistProfile: MakeupArtistProfile,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SplashScreen">
        {Object.entries({
          ...stackArr,
        }).map(([name, component]) => {
          return (
            <Stack.Screen
              name={name}
              component={component}
              key={name}
              options={
                {
                  // gestureEnabled: name == 'WaitingForApproval' ? false : true,
                }
              }
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
