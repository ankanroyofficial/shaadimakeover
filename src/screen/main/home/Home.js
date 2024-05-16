import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {normalize} from '../../../utils/theme/Dimens';
import {globalStyles} from '../../../utils/theme/GlobalStyle';
import {COLORS} from '../../../utils/theme/Colors';
import {Images} from '../../../utils/theme/Images';
import {Icons} from '../../../utils/theme/Icons';
import HeaderWithIcon from '../../../components/header/HeaderWithIcon';
import {Fonts} from '../../../utils/theme/Fonts';
import FilterTextInput from '../../../components/FilterTextInput';
import CategoryComponent from '../../../components/cart/CategoryComponent';
import Banner from '../../../components/Banner';
import MakeupArtistComponent from '../../../components/MakeupArtistComponent';
import PostComponent from '../../../components/PostComponent';

export default function Home() {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
        translucent={false}
      />
      <HeaderWithIcon
      // isUserProfileButton
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: normalize(100)}}>
        <FilterTextInput isFilterIcon />
        <CategoryComponent />
        <Banner />
        <MakeupArtistComponent />
        <PostComponent />
      </ScrollView>
    </SafeAreaView>
  );
}
