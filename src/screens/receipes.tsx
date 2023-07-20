import { ImageSourcePropType } from "react-native";

interface UserRecipes {
    id: string;
    rating: number;
    title: string;
    name: string;
    time:string;
    recipeimage: ImageSourcePropType ; // Replace 'number' with the actual type of the image (e.g., number, string, etc.)
    profileimage:ImageSourcePropType;
}
  
  const UserRecipe: UserRecipes[] = [
    {
      id: '1',
      rating: 5,
      title: 'Steak with tomato sauce and bulgur rice.',
      name:'By James Milner',
      time:'20 mins',
      recipeimage: require('../photos/recipe1.png'),
      profileimage:require('../photos/recipeuser1.png')
    },
    {
        id: '2',
        rating: 5,
        title: 'Pilaf sweet with lamb-and-raisins',
        name:'By Laura wilson',
        time:'20 mins',
        recipeimage: require('../photos/food1.png'),
        profileimage:require('../photos/recipeuser2.png')
      },
      {
        id: '3',
        rating: 5,
        title: 'Rice Pilaf, Broccoli and Chicken',
        name:'By Lucas Moura',
        time:'20 mins',
        recipeimage: require('../photos/food2.png'),
        profileimage:require('../photos/recipeuser1.png')
      },
      {
        id: '4',
        rating: 5,
        title: 'Chicken meal with sauce',
        name:'By Issabella Ethan',
        time:'20 mins',
        recipeimage: require('../photos/recipe1.png'),
        profileimage:require('../photos/recipeuser2.png')
      },
      {
        id: '5',
        rating: 5,
        title: 'Stir-fry chicken with broccoli in sweet and sour sauce and rice.',
        name:'By Miquel Ferran',
        time:'20 mins',
        recipeimage: require('../photos/recipe1.png'),
        profileimage:require('../photos/recipeuser1.png')
      },
  ];
  
  export default UserRecipe;
  