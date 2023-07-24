import React from 'react';
import {View, TouchableOpacity, Modal, FlatList, Text, Image} from 'react-native';
import { Svg,Path } from 'react-native-svg';

const CustomMenu: React.FC<{visible: boolean; onClose: () => void}> = ({
  visible,
  onClose,
}) => {
  const menuOptions = [
    {label: 'share', onPress: () => console.log('Share option pressed')},
    {
      label: 'Rate Recipe',
      onPress: () => console.log('Rate Recipe option pressed'),
    },
    {label: 'Review', onPress: () => console.log('Review option pressed')},
    {label: 'Unsave', onPress: () => console.log('Unsave option pressed')},
  ];
  const renderIcon = (label: string) => {
    switch (label) {
      case 'share':
        return (
          <Svg width={20} height={20} viewBox="0 0 20 20">
            <Path d="M19 9h-6V3c0-.6-.4-1-1-1s-1 .4-1 1v6H3c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1v-6h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </Svg>
        );
      case 'Rate Recipe':
        return (
          <Svg width={20} height={20} viewBox="0 0 20 20">
            <Path d="M10 15l-4.5 3 1-5-3.5-3.5 4.5-.5L10 5l1.5 4.5 4.5.5-3.5 3.5 1 5z" />
          </Svg>
        );
      // Add more cases for other icons if needed
      default:
        return null;
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          
        }}
        activeOpacity={1}
        onPress={onClose}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingVertical: 8,
            width:164,
          padding:10,
          left:225,
          top:35
          }}>
          <FlatList
            data={menuOptions}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={item.onPress}
                style={{paddingVertical: 12}}>
                <View style={{flexDirection:'row'}}>
                {renderIcon(item.label)}
                <Text style={{fontSize:14,fontWeight:'400',lineHeight:21,color:'#121212'}}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.label}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomMenu;
