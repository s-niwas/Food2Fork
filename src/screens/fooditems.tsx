import { ImageSourcePropType } from "react-native";

interface Recipes {
    id: string;
    rating: number;
    title: string;
    time: string;
    category:string;
    foodimage: ImageSourcePropType ; // Replace 'number' with the actual type of the image (e.g., number, string, etc.)
  }
  
  const slide: Recipes[] = [
    {
      id: '1',
      rating: 4.5,
      title: 'Classic Greek Salad',
      category:'Indian',
      time: '15 Mins',
      foodimage: require('../photos/food1.png'), // Replace 'require' with the actual image import method
    },
    {
      id: '2',
      rating: 3.5,
      category:'Italian',
      title: 'Crunchy Nut Coleslaw',
      time: '10 Mins',
      foodimage: require('../photos/food2.png'), // Replace 'require' with the actual image import method
    },
    {
      id: '3',
      rating: 3.0,
      category:'Asian',
      title: 'Shrimp Chicken Andouille Sausage Jambalaya',
      time: '10 Mins',
      foodimage: require('../photos/food2.png'), // Replace 'require' with the actual image import method
    },
    {
      id: '4',
      rating: 4,
      category:'Chinese',
      title: 'Barbecue Chicken Jollof Rice',
      time: '10 Mins',
      foodimage: require('../photos/food2.png'), // Replace 'require' with the actual image import method
    },
    {
      id: '5',
      rating: 4.5,
      category:'Indian',
      title: 'Portuguese Piri Piri Chicken',
      time: '10 Mins',
      foodimage: require('../photos/food2.png'), // Replace 'require' with the actual image import method
    },
    {
      id: '6',
      rating: 4.2,
      title: 'Mango Lassi',
      category: 'Fruit',
      time: '10 Mins',
      foodimage: require('../photos/food1.png'),
    },
    {
      id: '7',
      rating: 4.9,
      title: 'Stuffed Bell Peppers',
      category: 'Vegetables',
      time: '14 Mins',
      foodimage: require('../photos/food2.png'),
    },
    {
      id: '8',
      rating: 3.8,
      title: 'Grilled Chicken Skewers',
      category: 'Protein',
      time: '16 Mins',
      foodimage: require('../photos/food1.png'),
    },
    {
      id: '9',
      rating: 4.1,
      title: 'Quinoa Salad',
      category: 'Cereal',
      time: '19 Mins',
      foodimage: require('../photos/food2.png'),
    },
    {
      id: '10',
      rating: 4.6,
      title: 'Butter Chicken',
      category: 'Indian',
      time: '13 Mins',
      foodimage: require('../photos/food1.png'),
    },
    {
      id: '11',
      rating: 3.7,
      title: 'Margherita Pizza',
      category: 'Local Dishes',
      time: '12 Mins',
      foodimage: require('../photos/food2.png'),
    },
    {
      id: '12',
      rating: 4.4,
      title: 'Pad Thai Noodles',
      category: 'Asian',
      time: '18 Mins',
      foodimage: require('../photos/food1.png'),
    },
    {
      id: '13',
      rating: 4.8,
      title: 'Hummus and Pita Bread',
      category: 'Greek',
      time: '15 Mins',
      foodimage: require('../photos/food2.png'),
    },
    {
      id: '14',
      rating: 3.6,
      title: 'Kung Pao Chicken',
      category: 'Chinese',
      time: '17 Mins',
      foodimage: require('../photos/food1.png'),
    },
    {
      id: '15',
      rating: 4.0,
      title: 'Watermelon Feta Salad',
      category: 'Fruit',
      time: '10 Mins',
      foodimage: require('../photos/food2.png'),
    },
    {
      id: '16',
      rating: 4.5,
      title: 'Vegetable Stir Fry',
      category: 'Vegetables',
      time: '14 Mins',
      foodimage: require('../photos/food1.png'),
    },
    {
      id: '17',
      rating: 4.9,
      title: 'Salmon with Lemon Dill Sauce',
      category: 'Protein',
      time: '16 Mins',
      foodimage: require('../photos/food2.png'),
    },
    {
      id: '18',
      rating: 3.8,
      title: 'Muesli with Fresh Berries',
      category: 'Cereal',
      time: '19 Mins',
      foodimage: require('../photos/food1.png'),
    },
    {
      id: '19',
      rating: 4.3,
      title: 'Paneer Tikka Masala',
      category: 'Indian',
      time: '13 Mins',
      foodimage: require('../photos/food2.png'),
    },
    {
      id: '20',
      rating: 3.7,
      title: 'Ravioli with Tomato Sauce',
      category: 'Italian',
      time: '12 Mins',
      foodimage: require('../photos/food1.png'),
    },
    {
      id: '21',
      rating: 4.4,
      title: 'Sushi Roll',
      category: 'Asian',
      time: '18 Mins',
      foodimage: require('../photos/food2.png'),
    },
    {
      id: '22',
      rating: 4.6,
      title: 'Tzatziki Sauce',
      category: 'Greek',
      time: '15 Mins',
      foodimage: require('../photos/food1.png'),
    },
    {
      id: '23',
      rating: 3.9,
      title: 'Orange Chicken',
      category: 'Chinese',
      time: '17 Mins',
      foodimage: require('../photos/food2.png'),
    },
    {
      id: '24',
      rating: 4.1,
      title: 'Fruit Smoothie Bowl',
      category: 'Fruit',
      time: '10 Mins',
      foodimage: require('../photos/food1.png'),
    },
    {
      id: '25',
      rating: 4.5,
      title: 'Stuffed Mushrooms',
      category: 'Vegetables',
      time: '14 Mins',
      foodimage: require('../photos/food2.png'),
    },
    {
      id: '26',
      rating: 4.9,
      title: 'Grilled Steak',
      category: 'Protein',
      time: '16 Mins',
      foodimage: require('../photos/food1.png'),
    },
    {
      id: '27',
      rating: 3.8,
      title: 'Oatmeal Breakfast Bowl',
      category: 'Cereal',
      time: '19 Mins',
      foodimage: require('../photos/food2.png'),
    },
    {
      id: '28',
      rating: 4.2,
      title: 'Chicken Biryani',
      category: 'Indian',
      time: '13 Mins',
      foodimage: require('../photos/food1.png'),
    },
    {
      id: '29',
      rating: 3.7,
      title: 'Lasagna',
      category: 'Italian',
      time: '12 Mins',
      foodimage: require('../photos/food2.png'),
    },
    {
      id: '30',
      rating: 4.4,
      title: 'Spring Rolls',
      category: 'Asian',
      time: '18 Mins',
      foodimage: require('../photos/food1.png'),
    },
  ];
  
  export default slide;
  