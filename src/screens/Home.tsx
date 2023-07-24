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
import ListItem from './ListItem';
import axios, {AxiosRequestConfig} from 'axios';
import {useNavigation} from '@react-navigation/native';
import SearchIcon from '../components/SearchIcon';
import DishesHomePage from '../components/DishesHomePage';
import Newrecipes from '../components/NewRecipes';

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
  const navigation = useNavigation();
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleListItemPress = (item: string, index: number) => {
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
  const onsearch = () => {
    navigation.navigate('searchitem');
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
      if (typeof response.data === 'object') {
        setContainers(response.data.recipe || []);
      } else {
        // console.error('Invalid response format:', response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

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
        <TouchableOpacity onPress={onsearch}>
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
              editable={false}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={names}
          renderItem={({item, index}) => (
            <ListItem
              name={item}
              isSelected={index === selectedItemIndex}
              onPress={() => handleListItemPress(item, index)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{paddingHorizontal: 20}}>
        <DishesHomePage filterItem={selectedItem}></DishesHomePage>
      </View>

      <View style={{paddingLeft: 30, paddingTop: 10}}>
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
      <Newrecipes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Poppins',
    paddingTop: 64,
    backgroundColor: '#fff',
    height: '100%',
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
});

export default Home;
