import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {normalize} from '../utils/theme/Dimens';
import {COLORS} from '../utils/theme/Colors';
import {Fonts} from '../utils/theme/Fonts';
interface obj {
  containerStyle: Object;
  textStyle: Object;
  title: string;
  disabled: boolean;
  onpress: () => void;
}
export default function Button({
  containerStyle,
  textStyle,
  title,
  disabled,
  onpress,
}: obj) {
  return (
    <TouchableOpacity
      onPress={onpress}
      disabled={
        disabled != undefined ? disabled : onpress != undefined ? false : true
      }
      style={[styles.container, containerStyle != undefined && containerStyle]}>
      {title != undefined && (
        <Text style={[styles.text, textStyle != undefined && textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: normalize(42),
    width: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.white,
    fontSize: normalize(12),
    fontFamily: Fonts.PoppinsSemiBold,
    lineHeight: normalize(12) * 1.4,
    // height: normalize(15)
    // includeFontPadding:false
  },
});
