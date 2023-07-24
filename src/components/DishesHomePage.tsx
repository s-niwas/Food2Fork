import React from "react";
import { Svg,Path } from "react-native-svg";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import slide from "../screens/fooditems";
import { useNavigation, useRoute } from "@react-navigation/native";
import StarIcon from "./StarIcon";

type Props = {
    filterItem: string | null;
  };

const DishesHomePage:React.FC<Props> = ({ filterItem}) =>{
    const filtered = slide.filter(
        dish =>
        filterItem === null ||
        filterItem === 'All' ||
          dish.category === filterItem,
      );
  
    const navigation=useNavigation();
    const handleItemClick=async (item:Recipes)=>{
        navigation.navigate('RecipeIngrident',{foodItem:item});
      }
     
      
    return (
        <View>
<FlatList
        data={filtered}
        renderItem={({item}) => {
          const foodImageUri = item.foodimage;
          return (
            <TouchableOpacity onPress={() => handleItemClick(item)}>
            <View style={{paddingLeft: 15}}>
              <View
                style={{
                  height: 249,
                  paddingTop: 60,
                  width: 150,
                }}>
                <View style={styles.otherContainer}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        fontWeight: '600',
                        fontSize: 14,
                        lineHeight: 21,
                        textAlign: 'center',
                        width: 110,
                        height: 42,
                        top: 45,
                        color: '#484848',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'flex-end',
                      flex: 1,
                      paddingBottom: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: 150,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                      }}>
                      <View style={{flexDirection: 'column'}}>
                        <Text style={{color: '#A9A9A9', fontSize: 11}}>
                          Time
                        </Text>
                        <Text
                          style={{
                            fontWeight: '600',
                            fontSize: 11,
                            lineHeight: 16.5,
                            width: 40,
                            color: '#484848',
                          }}>
                          {item.time}
                        </Text>
                      </View>
                      
                        <Image source={require('./Bookmark.png')}></Image>
                     
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    justifyContent: 'center',
                    position: 'absolute',
                    width: 150.62,
                    height: 110,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={foodImageUri}
                    style={{
                      width: 109,
                      height: 110,
                      top: 20,
                      justifyContent: 'center',
                    }}></Image>
                  <View style={styles.ratingContainer}>
                    <StarIcon />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      </View>
    )
    }

    const styles = StyleSheet.create({
        ratingContainer: {
            backgroundColor: '#FFE1B3',
            width: 35,
            height: 23,
            top: 35,
            left: 95,
            justifyContent: 'space-between',
            paddingHorizontal: 4,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
          },
          ratingText: {
            fontWeight: '400',
            fontSize: 11,
            lineHeight: 16.5,
            color: '#000',
          },
          otherContainer: {
            backgroundColor: 'rgba(217, 217, 217, 0.5)',
            width: 150,
            height: 176,
            borderRadius: 12,
            position: 'relative',
          },
    })

    export default DishesHomePage;