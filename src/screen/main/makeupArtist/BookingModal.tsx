import {View, Text, Platform, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  normalize,
  screenHeight,
  screenWidth,
} from '../../../utils/theme/Dimens';
import {COLORS} from '../../../utils/theme/Colors';
import {Fonts} from '../../../utils/theme/Fonts';
import {Agenda, Calendar, CalendarList} from 'react-native-calendars';
import Button from '../../../components/Button';
import {Icons} from '../../../utils/theme/Icons';
import moment from 'moment';
interface bookingModalObj {
  isVisible: boolean;
  onClose: void;
}
export default function BookingModal({isVisible, onClose}: bookingModalObj) {
  const [selectedDate, setSelectDate] = useState('');
  const today = '2024-05-19';
  return (
    <Modal
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}
      isVisible={isVisible}
      style={{width: '100%', alignSelf: 'center', margin: 0}}
      animationInTiming={800}
      animationOutTiming={1000}
      onBackdropPress={() => {
        onClose != undefined && onClose();
      }}
      onBackButtonPress={() => {
        onClose != undefined && onClose();
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTopRightRadius: normalize(20),
          borderTopLeftRadius: normalize(20),
          // height: screenHeight * 0.5,
          paddingTop: normalize(20),
          // paddingHorizontal: normalize(25),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: normalize(20),
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: normalize(12),
              lineHeight: normalize(12) * 1.4,
              fontFamily: Fonts.PoppinsMedium,
              color: COLORS.textColor,
              width: '90%',
            }}>
            Service Name Goes Here
          </Text>
          <Pressable
            onPress={() => {
              onClose();
            }}
            style={{
              width: normalize(25),
              height: normalize(25),
              backgroundColor: COLORS.primary,
              borderRadius: normalize(9),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={Icons.dash}
              style={{height: '45%', width: '45%', resizeMode: 'contain'}}
            />
          </Pressable>
        </View>
        <Text
          numberOfLines={1}
          style={{
            fontSize: normalize(12),
            lineHeight: normalize(12) * 1.4,
            fontFamily: Fonts.PoppinsMedium,
            color: COLORS.textColor,
            width: '90%',
            paddingVertical: normalize(10),
            alignSelf: 'center',
          }}>
          Avaliable Dates
        </Text>
        <View style={{backgroundColor: 'red', height: screenHeight * 0.35}}>
          <CalendarList
            // ItemSeparatorComponent={()=>{
            //   return(
            //     <View style={{height:20,backgroundColor:"red"}}/>
            //   )
            // }}
            markingType={'period'}
            markedDates={{
              '2024-05-15': {marked: true, dotColor: COLORS.primary},
              '2024-05-16': {marked: true, dotColor: COLORS.primary},
              '2024-05-21': {
                startingDay: true,
                color: COLORS.primary,
                textColor: 'white',
              },
              '2024-05-22': {
                color: 'rgba(207, 68, 89, 0.5)',
                textColor: 'white',
              },
              '2024-05-23': {
                color: 'rgba(207, 68, 89, 0.5)',
                textColor: 'white',
                marked: true,
                dotColor: 'white',
              },
              '2024-05-24': {
                color: 'rgba(207, 68, 89, 0.5)',
                textColor: 'white',
              },
              '2024-05-25': {
                endingDay: true,
                color: COLORS.primary,
                textColor: 'white',
              },
            }}
            onDayPress={day => {
              console.log('selected day', day?.dateString);
              setSelectDate(day.dateString);
            }}
            calendarWidth={screenWidth}
            calendarStyle={{margin: 0, padding: 0}}
            // calendarHeight={screenHeight*0.5}
            // onVisibleMonthsChange={months => {
            //   console.log('now these months are visible', months);
            // }}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={0}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={12}
            // Enable or disable scrolling of the calendar list
            scrollEnabled={true}
            // Enable or disable the vertical scroll indicator. Default = false
            showScrollIndicator={false}
            // pagingEnabled
            onScroll={res => console.log('first', res)}
            renderHeader={date => {
              console.log(date);
              return (
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: normalize(12),
                    lineHeight: normalize(12) * 1.4,
                    fontFamily: Fonts.PoppinsMedium,
                    color: COLORS.textColor,
                  }}>
                  {moment(new Date(date)).format('MMMM,YYYY')}
                </Text>
              );
            }}
          />
        </View>
        <Text
          numberOfLines={1}
          style={{
            fontSize: normalize(12),
            lineHeight: normalize(12) * 1.4,
            fontFamily: Fonts.PoppinsMedium,
            color: COLORS.textColor,
            width: '90%',
            paddingVertical: normalize(10),
            alignSelf: 'center',
          }}>
          23 September, 2024
        </Text>
        <View
          style={{
            width: '90%',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginBottom: normalize(10),
            flexDirection: 'row',
          }}>
          <Button
            title="Cancel"
            onpress={() => {
              onClose();
            }}
            containerStyle={{
              width: '35%',
              backgroundColor: 'transparent',
              borderWidth: normalize(1),
              borderColor: COLORS.placeholderColor,
            }}
            textStyle={{color: COLORS.textColor}}
          />
          <Button
            title="Continue"
            containerStyle={{
              width: '61%',
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
