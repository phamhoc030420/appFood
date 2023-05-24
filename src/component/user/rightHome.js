import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../style/search/styleSearch';
import {Text, View, Image, Button, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const RightHome = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <View style={styles.rightHomeHeaderRight}>
          <View style={styles.rightHomeIconFirst}>
            <Ionicons
              style={styles.colorIcon}
              name={'arrow-back'}
              size={30}
              onPress={() => navigation.navigate('Home')}
            />
            <Text style={[styles.colorIcon, styles.nameUser]}>user123</Text>
            <Feather style={styles.selectUserRight} name={'chevron-down'} />
          </View>
          <View style={styles.rightHomeIconFirst}>
            <AntDesign
              style={[styles.colorIcon, styles.Icon]}
              name={'videocamera'}
              size={25}
            />
            <FontAwesome
              style={styles.colorIcon}
              name={'pencil-square-o'}
              size={25}
            />
          </View>
        </View>
        <View style={styles.containerSearchUser}>
          <AntDesign
            style={[styles.colorIcon, styles.SearchIcon]}
            name={'search1'}
            size={20}
          />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Tìm Kiếm"
            placeholderTextColor="#000"
            autoCapitalize="none"
            style={styles.searchInput}></TextInput>
        </View>
        <View style={styles.rightImg}>
          <Image
            style={styles.userContentImg}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ros%C3%A9_at_a_fan_signing_event_on_September_25%2C_2022_%28cropped%29.jpg',
            }}
          />
          <Text style={styles.userText}>Ghi chú của bạn</Text>
        </View>
        <View style={styles.rightText}>
          <Text style={[styles.colorIcon, styles.textRight]}>Tin nhắn</Text>
          <Text style={[styles.colorIcons, styles.textRight]}>
            Tin nhắn đang chờ
          </Text>
        </View>
        <View style={styles.rightFooter}>
          <Text style={[styles.colorIcon, styles.rightText1]}>
            Nhắn tin cho bạn bè bằng Direct
          </Text>
          <Text style={[styles.colorIcon, styles.rightText2]}>
            Nhắn tin riêng hoặc chia sẻ trực tiếp các bài viết yêu thích với bạn
            bè
          </Text>
          <Text style={styles.rightText3}>Gửi tin nhắn</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RightHome;
