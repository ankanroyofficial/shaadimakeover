import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../../utils/theme/Images';
import {COLORS} from '../../utils/theme/Colors';
import {normalize} from '../../utils/theme/Dimens';
import LocationAccessModal from '../auth/LocationAccessModal';

export default function SplashScreen(props: any) {
  const navigation = props.navigation;
  const navigateToNextPage = () => {
    try {
      navigation.replace('LocationAccess');
      // navigation.replace('SignIn');
    } catch (error) {
      console.error('navigateToNextPage>>', error);
    }
  };

  // useEffect(() => {
  //   setTimeout(navigateToNextPage, 2500);
  // }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ImageBackground
        source={Images.splash}
        resizeMode={'stretch'}
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: normalize(80),
            width: normalize(180), 
          }}>
          <Image
            source={Images.whiteLogoWithName}
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
          />
        </View>
      </ImageBackground>
      <LocationAccessModal/>
    </SafeAreaView>
  );
}
