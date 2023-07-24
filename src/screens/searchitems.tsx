import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import slide, {Recipes} from './fooditems';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Make sure to install the AsyncStorage library
import {useNavigation} from '@react-navigation/native';

const StarIcon: React.FC<{}> = ({}) => (
  <Svg width="7.5" height="7" viewBox="0 0 10 9" fill="none">
    <Path
      d="M7.69533 8.87514C7.62955 8.8754 7.56537 8.8549 7.51193 8.81655L5.00002 6.99546L2.4881 8.81655C2.43444 8.85548 2.36978 8.87632 2.30349 8.87608C2.2372 8.87584 2.1727 8.85452 2.11931 8.81521C2.06593 8.7759 2.02644 8.72063 2.00654 8.65739C1.98664 8.59415 1.98736 8.52623 2.00861 8.46343L2.9883 5.56167L0.449237 3.82046C0.394239 3.78278 0.35273 3.72851 0.330774 3.66557C0.308819 3.60262 0.307567 3.53431 0.327203 3.4706C0.346838 3.40689 0.386332 3.35113 0.439913 3.31147C0.493494 3.27181 0.558354 3.25032 0.625018 3.25015H3.75744L4.70275 0.340966C4.72312 0.278158 4.76285 0.223414 4.81626 0.184587C4.86966 0.145761 4.93399 0.124847 5.00002 0.124847C5.06604 0.124847 5.13038 0.145761 5.18378 0.184587C5.23719 0.223414 5.27692 0.278158 5.29728 0.340966L6.2426 3.25112H9.37502C9.44176 3.25109 9.50677 3.27243 9.56051 3.31202C9.61425 3.3516 9.6539 3.40735 9.67366 3.47111C9.69342 3.53487 9.69225 3.60327 9.67032 3.66631C9.64838 3.72935 9.60684 3.78371 9.55177 3.82143L7.01174 5.56167L7.99084 8.46265C8.0067 8.50961 8.01116 8.55968 8.00386 8.60871C7.99655 8.65775 7.97768 8.70434 7.94881 8.74464C7.91994 8.78494 7.8819 8.81779 7.83782 8.84048C7.79375 8.86317 7.7449 8.87506 7.69533 8.87514Z"
      fill="#FFAD30"
    />
  </Svg>
);

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
const SearchItems = () => {
  const navigation = useNavigation();
  const [searchedOneItem, setSearchedOneItem] = useState<Recipes[]>(slide);
  const [searchValue, setSearchValue] = useState('');
  const filterItems = (searchValue: string) => {
    const filteredItems = slide.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setSearchedOneItem(filteredItems);
  };

  const handleSearchItemClick = async (item: Recipes) => {
    navigation.navigate('RecipeIngrident', {foodItem: item});
  };

  const handleItemClick = async (item: Recipes) => {
    try {
      const savedSearchHistory = await AsyncStorage.getItem(
        'searchhistory.tsx',
      );
      let searchHistory: Recipes[] = [];
      if (savedSearchHistory) {
        searchHistory = JSON.parse(savedSearchHistory);
      }
      const itemExists = searchHistory.some(
        historyItem => historyItem.id === item.id,
      );
      if (!itemExists) {
        searchHistory.push(item);
        await AsyncStorage.setItem(
          'searchhistory.tsx',
          JSON.stringify(searchHistory),
        );
        console.log('Item added to search history:', item.title);
        setSearchHistory(searchHistory);
      } else {
        console.log('Item already exists in search history:', item.title);
      }
      navigation.navigate('RecipeIngrident', {foodItem: item});
    } catch (error) {
      console.log('Error saving search history:', error);
    }
    setSearchValue('');
  };

  const [searchHistory, setSearchHistory] = useState<Recipes[]>([]);
  const fetchSearchHistory = async () => {
    try {
      const savedSearchHistory = await AsyncStorage.getItem(
        'searchhistory.tsx',
      );
      if (savedSearchHistory) {
        const parsedHistory: Recipes[] = JSON.parse(savedSearchHistory);
        setSearchHistory(parsedHistory);
      }
    } catch (error) {
      console.log('Error fetching search history:', error);
    }
  };
  useEffect(() => {
    fetchSearchHistory();
  }, []);

  const handleSearchChange = (text: string) => {
    setSearchValue(text);
    filterItems(text);
  };
  const handleSearchSubmit = () => {
    filterItems(searchValue);
    console.log('Search Value:', searchValue);
  };
  const onsearch = () => {
    console.log(searchValue);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <TouchableOpacity
              onPress={onsearch}
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

        <View style={{marginVertical: 20}}>
          <Text
            style={{
              fontWeight: '600',
              lineHeight: 24,
              fontSize: 16,
              color: '#000000',
            }}>
            Recent search
          </Text>
        </View>
        {searchValue.length !== 0 ? (
          <FlatList
            data={searchedOneItem}
            renderItem={({item}) => {
              return (
                <View style={{width: '50%', height: 'auto', padding: 10}}>
                  <TouchableOpacity onPress={() => handleItemClick(item)}>
                    <View style={styles.searchimage}>
                      <Image
                        source={require('../photos/searchfood1.png')}
                        style={styles.backgroundImage}
                        resizeMode="cover"></Image>
                      <Image
                        source={require('../photos/searchfood1hover.png')}
                        style={styles.overlayImage}
                        resizeMode="contain"></Image>
                      <View style={styles.ratingContainer}>
                        <StarIcon />
                        <Text style={styles.ratingText}>{item.rating}</Text>
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          width: 130,
                          height: 34,
                          top: 99,
                          left: 10,
                          justifyContent: 'flex-end',
                        }}>
                        <View
                          style={{
                            justifyContent: 'flex-end',
                            alignContent: 'flex-end',
                          }}>
                          <Text
                            style={{
                              color: '#FFFFFF',
                              fontWeight: '600',
                              maxHeight: 34,
                              fontSize: 11,
                              lineHeight: 16.5,
                            }}>
                            {item.title}
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontWeight: '400',
                            fontSize: 8,
                            lineHeight: 12,
                            color: '#A9A9A9',
                          }}>
                          By {item.chef}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={styles.flatListContent}
          />
        ) : (
          <FlatList
            data={searchHistory}
            renderItem={({item}) => {
              return (
                <View style={{width: '50%', height: 'auto', padding: 10}}>
                  <TouchableOpacity onPress={() => handleSearchItemClick(item)}>
                    <View style={styles.searchimage}>
                      <Image
                        source={require('../photos/searchfood1.png')}
                        style={styles.backgroundImage}
                        resizeMode="cover"></Image>
                      <Image
                        source={require('../photos/searchfood1hover.png')}
                        style={styles.overlayImage}
                        resizeMode="contain"></Image>
                      <View style={styles.ratingContainer}>
                        <StarIcon />
                        <Text style={styles.ratingText}>{item.rating}</Text>
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          width: 130,
                          height: 34,
                          top: 99,
                          left: 10,
                          justifyContent: 'flex-end',
                        }}>
                        <View
                          style={{
                            justifyContent: 'flex-end',
                            alignContent: 'flex-end',
                          }}>
                          <Text
                            style={{
                              color: '#FFFFFF',
                              fontWeight: '600',
                              maxHeight: 34,
                              fontSize: 11,
                              lineHeight: 16.5,
                            }}>
                            {item.title}
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontWeight: '400',
                            fontSize: 8,
                            lineHeight: 12,
                            color: '#A9A9A9',
                          }}>
                          By {item.chef}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  flatListContent: {
    flexGrow: 1,
  },
  searchimage: {
    maxWidth: 150,
    maxHeight: 150,
  },
  ratingContainer: {
    backgroundColor: '#FFE1B3',
    width: 37,
    height: 16,
    top: 10,
    left: 103,
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
  searchContainer: {
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
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  overlayImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    position: 'absolute',
  },
});

export default SearchItems;
