import {View, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../../utils/theme/Images';
import {COLORS} from '../../utils/theme/Colors';

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

  useEffect(() => {
    setTimeout(navigateToNextPage, 3000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <Image
        source={Images.splash}
        style={{height: '100%', width: '100%', resizeMode: 'stretch'}}
      />
    </SafeAreaView>
  );
}
