import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../../utils/theme/Dimens';
import {Images} from '../../utils/theme/Images';
import BridalImageBackgroundComponent from '../../components/BridalImageBackgroundComponent';
import {globalStyles} from '../../utils/theme/GlobalStyle';
import {COLORS} from '../../utils/theme/Colors';
import Button from '../../components/Button';
import CustomTextInput from '../../components/CustomTextInput';
import {Fonts} from '../../utils/theme/Fonts';
import {Icons} from '../../utils/theme/Icons';

export default function UserTypeSelection(props: Object) {
  const navigation = props.navigation;
  const [whichTypeUser, setWhichTypeUser] = useState('');
  const userTypeList = [
    {
      title: 'Customer',
      value: 'customer',
      image: Images.customer,
      onPress: () => {
        setWhichTypeUser('customer');
      },
    },
    {
      title: 'Makeup Artist',
      value: 'artist',
      image: Images.cosmetics,
      onPress: () => {
        setWhichTypeUser('artist');
      },
    },
  ];
  return (
    <BridalImageBackgroundComponent>
      <View
        style={{
          flex: 1,
        }}>
        {/* Icon */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: normalize(50),
              width: normalize(150),
            }}>
            <Image source={Images.whiteLogoWithName} style={styles.icon} />
          </View>
        </View>
        {/* bottom */}
        <View style={styles.bottomContainer}>
          <Text style={styles.heading}>Select User Type</Text>
          <Text
            style={{
              ...styles.smallText,
              marginBottom: normalize(15),
              marginTop: normalize(3),
            }}>
            Select which user type describes your role the best
          </Text>

          <View style={styles.userType}>
            {userTypeList.map((item, index) => {
              return (
                <Pressable
                  onPress={item.onPress}
                  key={index}
                  style={[
                    styles.userTypeContainer,
                    {
                      backgroundColor:
                        whichTypeUser == item.value
                          ? 'rgba(207, 68, 89, 0.1)'
                          : '#F4F4F4',
                      borderColor: COLORS.primary,
                      borderWidth:
                        whichTypeUser == item.value ? normalize(1) : 0,
                      marginLeft: index == 1 ? normalize(20) : 0,
                    },
                  ]}>
                  <Image
                    source={item.image}
                    style={{height: '60%', width: '60%', resizeMode: 'contain'}}
                  />
                  <Text
                    style={{
                      ...styles.smallText,
                      color:
                        whichTypeUser != item?.value
                          ? COLORS.placeholderColor
                          : COLORS.primary,
                      fontFamily: Fonts.PoppinsMedium,
                      marginTop: normalize(3),
                    }}>
                    {item?.title}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <Button
            onpress={() => navigation.navigate('PersonalInformation')}
            containerStyle={{marginBottom: normalize(10)}}
            title="Continue"
          />
        </View>
      </View>
    </BridalImageBackgroundComponent>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  bottomContainer: {
    paddingVertical: normalize(20),
    paddingHorizontal: globalStyles.paddingHorizantal,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: normalize(35),
    borderTopRightRadius: normalize(35),
  },
  userType: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(10),
    marginBottom: normalize(25),
  },
  userTypeContainer: {
    height: normalize(130),
    width: normalize(95),
    borderRadius: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: normalize(17),
    fontFamily: Fonts.PoppinsSemiBold,
    textAlign: 'center',
    lineHeight: normalize(17) * 1.4,
  },
  smallText: {
    fontSize: normalize(11),
    lineHeight: normalize(11) * 1.4,
    fontFamily: Fonts.PoppinsRegular,
    textAlign: 'center',
  },
});
