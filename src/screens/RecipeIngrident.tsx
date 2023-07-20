import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const RecipeIngrident = () => {
  const StarIcon: React.FC<{}> = ({}) => (
    <Svg width="7.5" height="7" viewBox="0 0 10 9" fill="none">
      <Path
        d="M7.69533 8.87514C7.62955 8.8754 7.56537 8.8549 7.51193 8.81655L5.00002 6.99546L2.4881 8.81655C2.43444 8.85548 2.36978 8.87632 2.30349 8.87608C2.2372 8.87584 2.1727 8.85452 2.11931 8.81521C2.06593 8.7759 2.02644 8.72063 2.00654 8.65739C1.98664 8.59415 1.98736 8.52623 2.00861 8.46343L2.9883 5.56167L0.449237 3.82046C0.394239 3.78278 0.35273 3.72851 0.330774 3.66557C0.308819 3.60262 0.307567 3.53431 0.327203 3.4706C0.346838 3.40689 0.386332 3.35113 0.439913 3.31147C0.493494 3.27181 0.558354 3.25032 0.625018 3.25015H3.75744L4.70275 0.340966C4.72312 0.278158 4.76285 0.223414 4.81626 0.184587C4.86966 0.145761 4.93399 0.124847 5.00002 0.124847C5.06604 0.124847 5.13038 0.145761 5.18378 0.184587C5.23719 0.223414 5.27692 0.278158 5.29728 0.340966L6.2426 3.25112H9.37502C9.44176 3.25109 9.50677 3.27243 9.56051 3.31202C9.61425 3.3516 9.6539 3.40735 9.67366 3.47111C9.69342 3.53487 9.69225 3.60327 9.67032 3.66631C9.64838 3.72935 9.60684 3.78371 9.55177 3.82143L7.01174 5.56167L7.99084 8.46265C8.0067 8.50961 8.01116 8.55968 8.00386 8.60871C7.99655 8.65775 7.97768 8.70434 7.94881 8.74464C7.91994 8.78494 7.8819 8.81779 7.83782 8.84048C7.79375 8.86317 7.7449 8.87506 7.69533 8.87514Z"
        fill="#FFAD30"
      />
    </Svg>
  );
  return (
    <View style={styles.container}>
      <View style={{flex: 1, paddingHorizontal: 20, top: 10}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            top: 20,
            alignItems: 'center',
          }}>
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path
              d="M7.975 4.94168L2.91667 10L7.975 15.0583"
              stroke="#121212"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M17.0833 10H3.05833"
              stroke="#121212"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
          <Svg width="18" height="4" viewBox="0 0 18 4" fill="none">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0ZM7 2C7 0.89543 7.89543 0 9 0C10.1046 0 11 0.89543 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2ZM14 2C14 0.89543 14.8954 0 16 0C17.1046 0 18 0.89543 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z"
              fill="black"
            />
          </Svg>
        </View>
      </View>
      <View>
        <View style={{top: 88, paddingHorizontal: 30}}>
          <View style={{flex: 1}}>
            <LinearGradient
              colors={['#000000', '#FFFFFF']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{flex: 1}}></LinearGradient>
          </View>
          <Image
            source={require('../photos/details1.png')}
            style={{width: 'auto', borderRadius: 10}}></Image>

          <View style={styles.ratingContainer}>
            <StarIcon />
            <Text style={styles.ratingText}>4.0</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              height: '95%',
              width: '105%',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              paddingRight: 0,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Svg width="18" height="17" viewBox="0 0 18 17" fill="none">
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
                20 min
              </Text>
              <Image source={require('./Bookmark.png')} style={{}}></Image>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          top: 94,
          left: 35,
          width: 315,
          height: 41,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 14,
            lineHeight: 21,
            color: '#000000',
            width: 194,
          }}>
          Spicy chicken burger with French fries
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 19.6,
            fontWeight: '400',
            color: '#A9A9A9',
          }}>
          (13k Reviews)
        </Text>
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <View>
          <View style={{flexDirection:'row'}}>
            <View><Image source={require('../photos/recipeuser2.png')}></Image></View>
            <View style={{flexDirection:'column'}}>
              
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  ratingContainer: {
    backgroundColor: '#FFE1B3',
    width: 37,
    height: 16,
    top: 7,
    left: 333,
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  ratingText: {
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 12,
    color: '#000',
    height: 12,
    width: 12,
  },
});

export default RecipeIngrident;
