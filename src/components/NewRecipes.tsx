import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import UserRecipe from '../screens/receipes';
import StarIcon from './StarIcon';

const Newrecipes = () => {
  const stars = Array.from({length: 5}, (_, index) => (
    <React.Fragment key={index}>
      {index === 0 && <View style={{paddingLeft: 10}} />}
      <StarIcon />
      {index !== 4 && <View style={{width: 5}} />}
    </React.Fragment>
  ));
  return (
    <View style={{paddingHorizontal:30}}>
      <FlatList
        data={UserRecipe}
        renderItem={({item}) => {
          const recipeimage = item.recipeimage;
          const profileimage = item.profileimage;
          return (
            <View style={{padding: 10}}>
              <View
                style={{
                  width: 251,
                  height: 127,
                  flexDirection: 'column-reverse',
                }}>
                    
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderColor: '#fff',
                    shadowColor: '#000',
                    width: 251,
                    height: 95,
                    borderRadius: 10,
                    borderWidth: 1,
                    shadowRadius:100,
                    
                    elevation: 6,
                  }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 14,
                      lineHeight: 21,
                      width: 139.44,
                      height: 23,
                      left: 9.3,
                      top: 10,
                    }}>
                    {item.title}
                  </Text>
                  <View style={styles.starContainer}>{stars}</View>
                  <View
                    style={{
                      paddingLeft: 9.3,
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      top: 20,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                      }}>
                      <Image
                        source={profileimage}
                        style={{width: 25, height: 25}}></Image>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontSize: 11,
                          lineHeight: 16.5,
                          color: '#A9A9A9',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                        paddingRight: 5,
                      }}>
                      <Svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none">
                        <Path
                          d="M9.49074 16.1146C5.77907 16.1146 2.76157 13.0971 2.76157 9.38542C2.76157 5.67375 5.77907 2.65625 9.49074 2.65625C13.2024 2.65625 16.2199 5.67375 16.2199 9.38542C16.2199 13.0971 13.2024 16.1146 9.49074 16.1146ZM9.49074 3.71875C6.36699 3.71875 3.82407 6.26167 3.82407 9.38542C3.82407 12.5092 6.36699 15.0521 9.49074 15.0521C12.6145 15.0521 15.1574 12.5092 15.1574 9.38542C15.1574 6.26167 12.6145 3.71875 9.49074 3.71875Z"
                          fill="#A9A9A9"
                        />
                        <Path
                          d="M9.49073 9.73959C9.20032 9.73959 8.95948 9.49876 8.95948 9.20834V5.66667C8.95948 5.37626 9.20032 5.13542 9.49073 5.13542C9.78115 5.13542 10.022 5.37626 10.022 5.66667V9.20834C10.022 9.49876 9.78115 9.73959 9.49073 9.73959Z"
                          fill="#A9A9A9"
                        />
                        <Path
                          d="M11.6157 1.94792H7.36573C7.07532 1.94792 6.83448 1.70709 6.83448 1.41667C6.83448 1.12626 7.07532 0.885422 7.36573 0.885422H11.6157C11.9062 0.885422 12.147 1.12626 12.147 1.41667C12.147 1.70709 11.9062 1.94792 11.6157 1.94792Z"
                          fill="#A9A9A9"
                        />
                      </Svg>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontSize: 11,
                          lineHeight: 16.5,
                          width: 43,
                          height: 17,
                          color: '#A9A9A9',
                        }}>
                        {' '}
                        {item.time}
                      </Text>
                    </View>
                  </View>
                </View>
                <Image
                  source={recipeimage}
                  style={{
                    position: 'absolute',
                    width: 80,
                    height: 86,
                    top: 2,
                    left: 149,
                  }}></Image>
                  
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    width: 63.21,
    top: 15,
  },
});
export default Newrecipes;
