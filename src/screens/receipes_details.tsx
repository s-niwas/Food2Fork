import { ImageSourcePropType } from "react-native";

interface RecipesDetails {
    id: string;
    recipeimage: ImageSourcePropType ;
    rating: number;
    time:string;
    bookmarkimage:ImageSourcePropType;
    title: string;
    reviews:string;
    profileimage:ImageSourcePropType;
    name: string;
    location:string;
}
  
  const UserRecipe: RecipesDetails[] = [
    {
        id: '1',
        recipeimage: require('../photos/recipe1.png'),
        rating:4.0,
        time:'20 min',
        bookmarkimage:require('../Bookmark.png'),
        title: 'Spicy chicken burger with French fries',
        reviews:'(13k Reviews)',
        profileimage:require('../photos/recipeuser1.png'),
        name: 'Laura wilson',
        location:'Lagos, Nigeria'
    },
    
  ];
  
  export default UserRecipe;
  