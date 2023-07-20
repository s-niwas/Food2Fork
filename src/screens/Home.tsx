import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import ListItem from './ListItem';
import axios, {AxiosRequestConfig} from 'axios';
import slide from './fooditems';
import UserRecipe from './receipes';

const SearchIcon: React.FC<{size?: number; color?: string}> = ({
  size = 24,
  color = '#A9A9A9',
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15.5 13H14.71L14.43 12.73C15.41 11.57 16 10.07 16 8.5C16 4.91 13.09 2 9.5 2C5.91 2 3 4.91 3 8.5C3 12.09 5.91 15 9.5 15C11.07 15 12.57 14.41 13.73 13.43L14 13.71V14.5L18.5 19L19 18.5L15.5 15V14.21L15.29 14L15.5 13ZM9.5 13C7.01 13 5 10.99 5 8.5C5 6.01 7.01 4 9.5 4C11.99 4 14 6.01 14 8.5C14 10.99 11.99 13 9.5 13Z"
      fill={color}
    />
  </Svg>
);
const StarIcon: React.FC<{}> = ({}) => (
  <Svg width="10" height="9" viewBox="0 0 10 9" fill="none">
    <Path
      d="M7.69533 8.87514C7.62955 8.8754 7.56537 8.8549 7.51193 8.81655L5.00002 6.99546L2.4881 8.81655C2.43444 8.85548 2.36978 8.87632 2.30349 8.87608C2.2372 8.87584 2.1727 8.85452 2.11931 8.81521C2.06593 8.7759 2.02644 8.72063 2.00654 8.65739C1.98664 8.59415 1.98736 8.52623 2.00861 8.46343L2.9883 5.56167L0.449237 3.82046C0.394239 3.78278 0.35273 3.72851 0.330774 3.66557C0.308819 3.60262 0.307567 3.53431 0.327203 3.4706C0.346838 3.40689 0.386332 3.35113 0.439913 3.31147C0.493494 3.27181 0.558354 3.25032 0.625018 3.25015H3.75744L4.70275 0.340966C4.72312 0.278158 4.76285 0.223414 4.81626 0.184587C4.86966 0.145761 4.93399 0.124847 5.00002 0.124847C5.06604 0.124847 5.13038 0.145761 5.18378 0.184587C5.23719 0.223414 5.27692 0.278158 5.29728 0.340966L6.2426 3.25112H9.37502C9.44176 3.25109 9.50677 3.27243 9.56051 3.31202C9.61425 3.3516 9.6539 3.40735 9.67366 3.47111C9.69342 3.53487 9.69225 3.60327 9.67032 3.66631C9.64838 3.72935 9.60684 3.78371 9.55177 3.82143L7.01174 5.56167L7.99084 8.46265C8.0067 8.50961 8.01116 8.55968 8.00386 8.60871C7.99655 8.65775 7.97768 8.70434 7.94881 8.74464C7.91994 8.78494 7.8819 8.81779 7.83782 8.84048C7.79375 8.86317 7.7449 8.87506 7.69533 8.87514Z"
      fill="#FFAD30"
    />
  </Svg>
);

const names: string[] = [
  'All',
  'Indian',
  'Italian',
  'Asian',
  'Chinese',
  'Fruit',
  'Vegetables',
  'Protein',
  'Cereal',
  'Local Dishes',
];

const Home = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  const[selectedItem,setSelectedItem]=useState<string | null>(null);
  const filtered=slide.filter(
    (dish)=>selectedItem === null || selectedItem==='All' || dish.category === selectedItem 
  );

  const handleListItemPress = (item: string,index:number) => {
    setSelectedItemIndex(index);
    setSelectedItem(item);
    console.log(selectedItem);
  };

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (text: string) => {
    setSearchValue(text);
  };

  const [containers, setContainers] = useState<any[]>([]);
  const handleSearchSubmit = () => {
    console.log('Search Value:', searchValue);
  };

  const fetchData = async (searchValue: string) => {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://community-food2fork.p.rapidapi.com/search',
      params: {
        key: 'REQUIRED',
        q: searchValue,
      },
      headers: {
        'X-RapidAPI-Key': 'f76a41e26cmshf0db8b1fa243ebdp137159jsna1794fc517e0',
        'X-RapidAPI-Host': 'community-food2fork.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      // console.log(response.data);
      // setContainers(response.data);
      // console.log(containers);
      if (typeof response.data === 'object') {
        setContainers(response.data.recipe || []);
      } else {
        console.error('Invalid response format:', response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

  const stars = Array.from({length: 5}, (_, index) => (
    <React.Fragment key={index}>
      {index === 0 && <View style={{paddingLeft: 10}} />}

      <StarIcon />
      {index !== 4 && <View style={{width: 5}} />}
    </React.Fragment>
  ));
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>Hello Jega</Text>
          <Text style={styles.subHeaderText}>What are you cooking today?</Text>
        </View>
        <View>
          <Image
            source={require('../photos/pic.png')}
            style={styles.profileImage}
          />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TouchableOpacity
            onPress={handleSearchSubmit}
            style={styles.searchIconContainer}>
            <SearchIcon size={24} color="#A9A9A9" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipe"
            value={searchValue}
            onChangeText={handleSearchChange}
            onSubmitEditing={handleSearchSubmit}
          />
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={names}
          renderItem={({item, index}) => (
            <ListItem
              name={item}
              isSelected={index === selectedItemIndex}
              onPress={() => handleListItemPress(item,index)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={filtered}
        renderItem={({item}) => {
          const foodImageUri = item.foodimage;
          return (
            <View style={{paddingLeft: 10}}>
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
                      <TouchableOpacity >
                        <Image source={require('./Bookmark.png')} ></Image>
                      </TouchableOpacity >
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
          );
        }}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={{paddingLeft: 30}}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 24,
            color: '#000',
          }}>
          New Recipes
        </Text>
      </View>
      <FlatList
        data={UserRecipe}
        renderItem={({item}) => {
          const recipeimage = item.recipeimage;
          const profileimage = item.profileimage;
          return (
            <View style={{paddingLeft:10}}>
            <View
              style={{
                width: 251,
                height: 127,
                flexDirection: 'column-reverse'
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  shadowColor: '#000000',
                  width: 251,
                  height: 95,
                  borderRadius: 10,
                  borderWidth:1,
                  
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
                  top: -2,
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
  container: {
    fontFamily: 'Poppins',

    paddingTop: 64,
    backgroundColor: '#fff',
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    width: 63.21,
    top: 15,
  },
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    color: '#000000',
  },
  subHeaderText: {
    color: '#A9A9A9',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    resizeMode: 'contain',
    backgroundColor: '#FFCE80',
  },
  searchContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
  },
  searchIconContainer: {
    padding: 5,
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  otherContainer: {
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    width: 150,
    height: 176,
    borderRadius: 12,
    position: 'relative',
  },
});

export default Home;
