import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {normalize} from '../utils/theme/Dimens';
import {COLORS} from '../utils/theme/Colors';
import {Fonts} from '../utils/theme/Fonts';
interface obj {
  value: string;
  textinputStyle: Object;
  textStyle: Object;
  placeholder: string;
  onChange: (text: string) => void;
  editable: boolean;
  keyboardType: any;
}
export default function CustomTextInput({
  value,
  textinputStyle,
  textStyle,
  placeholder,
  onChange,
  editable,
  keyboardType,
}: obj) {
  return (
    <View
      style={[styles.container, textinputStyle != undefined && textinputStyle]}>
      <TextInput
        value={value}
        style={[
          styles.textInputText,
          {
            fontFamily:
              value != undefined && value != ''
                ? Fonts.PoppinsSemiBold
                : Fonts.PoppinsRegular,
          },
          textStyle != undefined && textStyle,
        ]}
        placeholder={placeholder != undefined ? placeholder : ''}
        onChangeText={
          onChange !== undefined
            ? onChange
            : e => {
                console.log('add onChange');
              }
        }
        placeholderTextColor={COLORS.placeholderColor}
        editable={editable != undefined ? editable : true}
        keyboardType={keyboardType != undefined ? keyboardType : 'default'} // email-address numeric
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: normalize(42),
    width: '100%',
    borderRadius: normalize(8),
    overflow: 'hidden',
    paddingHorizontal: normalize(10),
    backgroundColor: COLORS.textinputBackground,
  },

  textInputText: { 
    flex: 1,
    color: COLORS.primary,
    fontSize: normalize(11),
    fontFamily: Fonts.PoppinsMedium,
    // lineHeight: normalize(11) * 1.4,
    // height: normalize(11),
    includeFontPadding:false
  },
});
