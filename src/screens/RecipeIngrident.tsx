import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const StarIcon: React.FC<{}> = ({}) => (
  <Svg width="10" height="9" viewBox="0 0 10 9" fill="none">
    <Path
      d="M7.69533 8.87514C7.62955 8.8754 7.56537 8.8549 7.51193 8.81655L5.00002 6.99546L2.4881 8.81655C2.43444 8.85548 2.36978 8.87632 2.30349 8.87608C2.2372 8.87584 2.1727 8.85452 2.11931 8.81521C2.06593 8.7759 2.02644 8.72063 2.00654 8.65739C1.98664 8.59415 1.98736 8.52623 2.00861 8.46343L2.9883 5.56167L0.449237 3.82046C0.394239 3.78278 0.35273 3.72851 0.330774 3.66557C0.308819 3.60262 0.307567 3.53431 0.327203 3.4706C0.346838 3.40689 0.386332 3.35113 0.439913 3.31147C0.493494 3.27181 0.558354 3.25032 0.625018 3.25015H3.75744L4.70275 0.340966C4.72312 0.278158 4.76285 0.223414 4.81626 0.184587C4.86966 0.145761 4.93399 0.124847 5.00002 0.124847C5.06604 0.124847 5.13038 0.145761 5.18378 0.184587C5.23719 0.223414 5.27692 0.278158 5.29728 0.340966L6.2426 3.25112H9.37502C9.44176 3.25109 9.50677 3.27243 9.56051 3.31202C9.61425 3.3516 9.6539 3.40735 9.67366 3.47111C9.69342 3.53487 9.69225 3.60327 9.67032 3.66631C9.64838 3.72935 9.60684 3.78371 9.55177 3.82143L7.01174 5.56167L7.99084 8.46265C8.0067 8.50961 8.01116 8.55968 8.00386 8.60871C7.99655 8.65775 7.97768 8.70434 7.94881 8.74464C7.91994 8.78494 7.8819 8.81779 7.83782 8.84048C7.79375 8.86317 7.7449 8.87506 7.69533 8.87514Z"
      fill="#FFAD30"
    />
  </Svg>
);
const RecipeIngrident = () => {
  const route = useRoute();
  const {foodItem} = route.params;
  const [ingrident, setIngrident] = useState(true);
  const [procedure, setProcedure] = useState(false);

  const ingridentHandler = () => {
    setIngrident(!ingrident);
    setProcedure(!procedure);
  };
  const procedureHandler = () => {
    setProcedure(!procedure);
    setIngrident(!ingrident);
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.searchimage}>
          <Image
            source={require('../photos/details1.png')}
            style={styles.backgroundImage}
            resizeMode="cover"></Image>
          <Image
            source={require('../photos/details1hover.png')}
            style={styles.overlayImage}
            resizeMode="contain"></Image>
          <View style={styles.ratingContainer}>
            <StarIcon />
            <Text style={styles.ratingText}>{foodItem.rating}</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              width: 295,
              height: 34,
              top: 99,
              left: 10,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
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
                {foodItem.time}
              </Text>
              <Image
                source={require('../photos/Bookmark.png')}
                style={{}}></Image>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 310,
          height: 41,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 14,
            lineHeight: 21,
            color: '#000000',
            width: 194,
          }}>
          {foodItem.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 19.6,
            fontWeight: '400',
            color: '#A9A9A9',
          }}>
          {foodItem.reviews}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Image
            source={require('../photos/recipeuser1.png')}
            style={{width: 40, height: 40}}></Image>
          <View style={{flexDirection: 'column', paddingLeft: 8}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                lineHeight: 21,
                color: '#121212',
              }}>
              {foodItem.chef}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Svg width="13" height="15" viewBox="0 0 13 15" fill="none">
                <Path
                  d="M12.6058 4.98542C11.8621 1.71292 9.0075 0.239586 6.5 0.239586C6.5 0.239586 6.5 0.239586 6.49292 0.239586C3.9925 0.239586 1.13083 1.70584 0.387082 4.97834C-0.441668 8.63334 1.79667 11.7288 3.8225 13.6767C4.57333 14.3992 5.53667 14.7604 6.5 14.7604C7.46333 14.7604 8.42667 14.3992 9.17042 13.6767C11.1962 11.7288 13.4346 8.64042 12.6058 4.98542ZM6.5 8.53417C5.2675 8.53417 4.26875 7.53542 4.26875 6.30292C4.26875 5.07042 5.2675 4.07167 6.5 4.07167C7.7325 4.07167 8.73125 5.07042 8.73125 6.30292C8.73125 7.53542 7.7325 8.53417 6.5 8.53417Z"
                  fill="#71B1A1"
                />
              </Svg>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 11,
                  lineHeight: 16.5,
                  color: '#A9A9A9',
                  paddingLeft: 2,
                }}>
                {foodItem.location}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: 85,
              height: 37,
              paddingVertical: 10,
              paddingHorizontal: 25,
              borderRadius: 10,
              backgroundColor: '#129575',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 11,
                fontWeight: '600',
                lineHeight: 16.5,
              }}>
              Follow
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 8,
        }}>
        <TouchableOpacity
          style={{
            width: '48%',
            height: 37,
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 10,
            backgroundColor: ingrident ? '#129575' : '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          onPress={ingridentHandler}>
          <Text
            style={{
              color: ingrident ? '#fff' : '#129575',
              fontSize: 11,
              fontWeight: '600',
              lineHeight: 16.5,
            }}>
            Ingrident
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '48%',
            height: 37,
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 10,
            backgroundColor: procedure ? '#129575' : '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          onPress={procedureHandler}>
          <Text
            style={{
              color: procedure ? '#fff' : '#129575',
              fontSize: 11,
              fontWeight: '600',
              lineHeight: 16.5,
            }}>
            Procedure
          </Text>
        </TouchableOpacity>
      </View>
      {ingrident ? (
        <View style={{flex: 1}}>
          <View
            style={{
              justifyContent: 'space-between',
              width: -5,
              flexDirection: 'row',
              paddingTop: 30,
              paddingBottom: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Svg width="17" height="15" viewBox="0 0 17 15" fill="none">
                <Path
                  d="M5.66667 2.58548C5.63902 2.55806 5.63902 2.55806 5.61138 2.53064C5.47317 2.39355 5.41789 2.33871 5.41789 2.22903C5.41789 2.09194 5.47317 2.06452 5.61138 1.92742C5.66667 1.87258 5.74959 1.79032 5.80488 1.73548C5.88781 1.62581 5.8878 1.48871 5.77724 1.40645C5.66667 1.32419 5.52846 1.32419 5.44553 1.43387C5.39024 1.48871 5.33496 1.54355 5.27968 1.59839C5.11382 1.7629 4.94797 1.92742 4.94797 2.25645C4.94797 2.58548 5.11382 2.75 5.27968 2.91452C5.30732 2.94194 5.30732 2.94193 5.33496 2.96935C5.50081 3.10645 5.61138 3.21613 5.61138 3.4629C5.61138 3.7371 5.47317 3.90161 5.30732 4.06613C5.27968 4.09355 5.27967 4.09355 5.25203 4.12097C5.16911 4.23064 5.16911 4.36774 5.27968 4.45C5.33496 4.47742 5.39024 4.50484 5.44553 4.50484C5.50081 4.50484 5.58374 4.47742 5.63902 4.42258C5.66667 4.39516 5.66667 4.39516 5.69431 4.36774C5.88781 4.17581 6.13659 3.90161 6.13659 3.43548C6.10894 2.96935 5.86016 2.75 5.66667 2.58548Z"
                  fill="#A9A9A9"
                  stroke="#A9A9A9"
                  stroke-width="0.2"
                />
                <Path
                  d="M9.03903 1.51613C9.01138 1.48871 9.01138 1.48871 8.98374 1.46129C8.84553 1.32419 8.79025 1.26935 8.79025 1.15968C8.79025 1.02258 8.84553 0.995161 8.98374 0.858064C9.03903 0.803225 9.12195 0.720967 9.17724 0.666128C9.26017 0.556451 9.26016 0.419354 9.1496 0.337096C9.03903 0.254838 8.90082 0.254838 8.81789 0.364515C8.7626 0.419354 8.70732 0.474193 8.65203 0.529032C8.48618 0.693548 8.32033 0.858064 8.32033 1.1871C8.32033 1.51613 8.48618 1.68064 8.65203 1.84516C8.67968 1.87258 8.67968 1.87258 8.70732 1.9C8.87317 2.0371 8.98374 2.14677 8.98374 2.39355C8.98374 2.66774 8.84553 2.83226 8.67968 2.99677C8.65203 3.02419 8.65204 3.02419 8.62439 3.05161C8.54147 3.16129 8.54147 3.29839 8.65203 3.38064C8.70732 3.40806 8.7626 3.43548 8.81789 3.43548C8.87317 3.43548 8.9561 3.40806 9.01138 3.35323C9.03903 3.32581 9.03903 3.32581 9.06667 3.29839C9.26016 3.10645 9.50895 2.83226 9.50895 2.36613C9.4813 1.9 9.23252 1.68064 9.03903 1.51613Z"
                  fill="#A9A9A9"
                  stroke="#A9A9A9"
                  stroke-width="0.2"
                />
                <Path
                  d="M12.439 2.58548C12.4114 2.55806 12.4114 2.55806 12.3837 2.53064C12.2455 2.39355 12.1902 2.33871 12.1902 2.22903C12.1902 2.09194 12.2455 2.06452 12.3837 1.92742C12.439 1.87258 12.5219 1.79032 12.5772 1.73548C12.6602 1.62581 12.6602 1.48871 12.5496 1.40645C12.439 1.32419 12.3008 1.32419 12.2179 1.43387C12.1626 1.48871 12.1073 1.54355 12.052 1.59839C11.8862 1.7629 11.7203 1.92742 11.7203 2.25645C11.7203 2.58548 11.8862 2.75 12.052 2.91452C12.0797 2.94194 12.0797 2.94193 12.1073 2.96935C12.2732 3.10645 12.3837 3.21613 12.3837 3.4629C12.3837 3.7371 12.2455 3.90161 12.0797 4.06613C12.052 4.09355 12.052 4.09355 12.0244 4.12097C11.9415 4.23064 11.9415 4.36774 12.052 4.45C12.1073 4.47742 12.1626 4.50484 12.2179 4.50484C12.2732 4.50484 12.3561 4.47742 12.4114 4.42258C12.439 4.39516 12.439 4.39516 12.4667 4.36774C12.6602 4.17581 12.9089 3.90161 12.9089 3.43548C12.8537 2.96935 12.6049 2.75 12.439 2.58548Z"
                  fill="#A9A9A9"
                  stroke="#A9A9A9"
                  stroke-width="0.2"
                />
                <Path
                  d="M16.8065 12.5661H0.995118C0.856907 12.5661 0.746338 12.6758 0.746338 12.8129V13.3887C0.746338 14.0194 1.27154 14.5403 1.90731 14.5403H15.8943C16.5301 14.5403 17.0553 14.0194 17.0553 13.3887V12.8129C17.0553 12.6758 16.9447 12.5661 16.8065 12.5661ZM16.5577 13.3887C16.5577 13.7726 16.2537 14.0742 15.8667 14.0742H1.90731C1.52032 14.0742 1.21626 13.7726 1.21626 13.3887V13.0597H16.5577V13.3887Z"
                  fill="#A9A9A9"
                  stroke="#A9A9A9"
                  stroke-width="0.2"
                />
                <Path
                  d="M13.2959 7.41129C12.3285 6.47903 11.0846 5.90323 9.78537 5.71129L10.2553 5.24516C10.3935 5.10806 10.4488 4.88871 10.3659 4.69677C10.2829 4.50484 10.1171 4.39516 9.89594 4.39516H7.90569C7.7122 4.39516 7.5187 4.50484 7.43577 4.69677C7.35285 4.88871 7.40813 5.08064 7.54634 5.24516L8.01626 5.71129C6.68943 5.90323 5.47317 6.47903 4.47805 7.41129C3.28943 8.53548 2.59838 10.071 2.54309 11.6887C2.54309 11.8258 2.65366 11.9355 2.76423 11.9355C2.90244 11.9355 3.01301 11.8258 3.01301 11.7161C3.06829 10.2081 3.70407 8.80968 4.80976 7.76774C5.83252 6.78064 7.15935 6.23226 8.54147 6.15C8.56911 6.15 8.59675 6.15 8.62439 6.15C8.65203 6.15 8.67968 6.15 8.70732 6.15C8.73496 6.15 8.73496 6.15 8.7626 6.15C8.79025 6.15 8.84553 6.15 8.87317 6.15C8.90081 6.15 8.9561 6.15 8.98374 6.15C9.01138 6.15 9.01138 6.15 9.03903 6.15C9.06667 6.15 9.09431 6.15 9.12195 6.15C9.14959 6.15 9.17724 6.15 9.20488 6.15C10.6146 6.23226 11.9138 6.78064 12.9366 7.76774C14.0423 8.80968 14.6781 10.2081 14.7333 11.7161C14.7333 11.8532 14.8439 11.9629 14.9821 11.9355C15.1203 11.9355 15.2309 11.8258 15.2033 11.6887C15.1756 10.0435 14.4846 8.53548 13.2959 7.41129ZM9.14959 5.65645H9.12195C9.09431 5.65645 9.06667 5.65645 9.03903 5.65645C8.98374 5.65645 8.9561 5.65645 8.90081 5.65645C8.84553 5.65645 8.81789 5.65645 8.7626 5.65645C8.73496 5.65645 8.70732 5.65645 8.67968 5.65645H8.65203L7.90569 4.91613H9.89594L9.14959 5.65645Z"
                  fill="#A9A9A9"
                  stroke="#A9A9A9"
                  stroke-width="0.2"
                />
              </Svg>
              <Text
                style={{
                  fontSize: 11,
                  lineHeight: 16.5,
                  fontWeight: '400',
                  color: '#A9A9A9',
                }}>
                {'  '}
                {foodItem.serve}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 11,
                  lineHeight: 16.5,
                  color: '#A9A9A9',
                }}>
                {foodItem.items}
              </Text>
            </View>
          </View>
          {/* <View style={{flex:1}}> */}
          <FlatList
            data={foodItem.ingrident}
            renderItem={({item}) => {
              return (
                <View style={{paddingBottom: 10}}>
                  <View
                    style={{
                      paddingHorizontal: 15,
                      width: 315,
                      height: 76,
                      backgroundColor: '#D9D9D9',
                      borderRadius: 12,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        borderRadius: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../photos/ingrident.png')}
                        style={{width: 52, height: 52}}></Image>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 16,
                          lineHeight: 24,
                          color: '#121212',
                          paddingLeft: 10,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontSize: 14,
                          lineHeight: 21,
                          color: '#A9A9A9',
                        }}>
                        {item.grams}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
          {/* </View> */}
        </View>
      ) : (
        <View
          style={{backgroundColor: '#A9A9A9', borderRadius: 10, opacity: 0.5}}>
          <Text style={{padding: 10, textAlign: 'justify', color: '#000'}}>
            {'     '}
            {foodItem.procedure}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
  },
  flatListContent: {
    flexGrow: 1,
  },
  searchimage: {
    width: 315,
    height: 150,
    alignItems: 'center',
    alignContent: 'center',
  },
  ratingContainer: {
    backgroundColor: '#FFE1B3',
    width: 37,
    height: 16,
    top: 10,
    left: 270,
    gap: 3,
    paddingHorizontal: 8,
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
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  overlayImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    position: 'absolute',
  },
});

export default RecipeIngrident;
