import {ImageSourcePropType} from 'react-native';

interface Ingrident {
  name: string;
  grams: string;
}

interface Recipes {
  id: string;
  rating: number;
  title: string;
  time: string;
  category: string;
  foodimage: ImageSourcePropType;
  chef: string;
  ingrident: Ingrident[];
  reviews: string;
  location: string;
  serve: string;
  items: string;
  procedure: string;
}

const slide: Recipes[] = [
  {
    id: '1',
    rating: 4.5,
    title: 'Classic Greek Salad',
    category: 'Indian',
    time: '15 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'John Doe',
    ingrident: [
      {name: 'tomatos', grams: '500g'},
      {name: 'Cabbage', grams: '300g'},
    ],
    reviews: '(13k Reviews)',
    location: 'Lagos, Nigeria',
    serve: '1 serve',
    items: '2 items',
    procedure:
      'Soak the red onion in a bowl of heavily salted ice water, 15 minutes. Meanwhile, whisk the vinegar, lemon zest and juice, honey, dried oregano, 1/2 teaspoon salt and 1/4 teaspoon pepper in a large bowl. Whisk in the olive oil in a slow, steady stream until emulsified. Add the tomatoes and olives and toss. Peel the cucumbers, leaving alternating strips of green peel. Trim the ends, halve lengthwise and slice crosswise, about 1/2 inch thick; add to the bowl with the tomatoes. Drain the red onion, add to the bowl and toss. Drain the feta and slice horizontally into 4 even rectangles. Divide the salad among plates. Top with the feta and oregano; drizzle with olive oil and season with pepper. ',
  },
  {
    id: '2',
    rating: 3.5,
    category: 'Italian',
    title: 'Crunchy Nut Coleslaw',
    time: '10 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Jane Smith',
    ingrident: [
      {name: 'Cabbage', grams: '300g'},
      {name: 'Carrots', grams: '150g'},
      {name: 'Nuts', grams: '50g'},
      {name: 'Mayonnaise', grams: '3 tablespoons'},
      {name: 'Vinegar', grams: '1 tablespoon'},
      {name: 'Sugar', grams: '1 teaspoon'},
      {name: 'Salt', grams: '1/2 teaspoon'},
      {name: 'Black Pepper', grams: '1/4 teaspoon'},
      {name: 'Mustard', grams: '1 teaspoon'},
      {name: 'Celery Seeds', grams: '1/2 teaspoon'},
      // Add 1 more ingredient
      // { name: 'Ingredient Name', grams: 'Ingredient Quantity' },
    ],
    reviews: '(7.5k Reviews)',
    location: 'Rome, Italy',
    serve: '2 serves',
    items: '8 items', // Assuming 8 ingredients in the recipe
    procedure:
      'Add the cabbage, carrots, nuts, and dressing in a large bowl. Toss until well combined and crunchy. Serve immediately.',
  },
  {
    id: '3',
    rating: 3.0,
    category: 'Asian',
    title: 'Shrimp Chicken Andouille Sausage Jambalaya',
    time: '10 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Michael Lee',
    ingrident: [
      {name: 'Shrimp', grams: '250g'},
      {name: 'Chicken', grams: '300g'},
      {name: 'Andouille Sausage', grams: '200g'},
      {name: 'Rice', grams: '1 cup'},
      {name: 'Tomatoes', grams: '2 large'},
      {name: 'Bell Peppers', grams: '2'},
      {name: 'Celery', grams: '2 stalks'},
      {name: 'Onion', grams: '1 large'},
      {name: 'Garlic', grams: '3 cloves'},
      {name: 'Cajun Seasoning', grams: '2 tablespoons'},
    ],
    reviews: '(8k Reviews)',
    location: 'New Orleans, USA',
    serve: '3 serves',
    items: '10 items', // Assuming 10 ingredients in the recipe
    procedure:
      'In a large skillet, sauté the shrimp, chicken, and sausage. Add the rice, tomatoes, bell peppers, celery, onion, and garlic. Season with Cajun seasoning. Cook until the rice is tender and the flavors meld together.',
  },
  {
    id: '4',
    rating: 4,
    category: 'Chinese',
    title: 'Barbecue Chicken Jollof Rice',
    time: '10 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Emily Johnson',
    ingrident: [
      {name: 'Chicken', grams: '400g'},
      {name: 'Rice', grams: '1.5 cups'},
      {name: 'Barbecue Sauce', grams: '1/2 cup'},
      {name: 'Tomato Paste', grams: '2 tablespoons'},
      {name: 'Bell Peppers', grams: '2'},
      {name: 'Onion', grams: '1 large'},
      {name: 'Garlic', grams: '4 cloves'},
      {name: 'Ginger', grams: '1 tablespoon'},
      {name: 'Vegetable Oil', grams: '2 tablespoons'},
      {name: 'Salt', grams: '1 teaspoon'},
    ],
    reviews: '(10k Reviews)',
    location: 'Beijing, China',
    serve: '4 serves',
    items: '9 items', // Assuming 9 ingredients in the recipe
    procedure:
      'Marinate the chicken in barbecue sauce. In a large pot, sauté the onions, garlic, and ginger. Add the rice, tomato paste, and bell peppers. Cook until the rice is tender. Grill the marinated chicken and serve over the jollof rice.',
  },
  {
    id: '5',
    rating: 4.5,
    category: 'Indian',
    title: 'Portuguese Piri Piri Chicken',
    time: '10 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'William Adams',
    ingrident: [
      {name: 'Chicken', grams: '800g'},
      {name: 'Potatoes', grams: '500g'},
      {name: 'Piri Piri Sauce', grams: '1/4 cup'},
      {name: 'Lemon', grams: '1'},
      {name: 'Garlic', grams: '4 cloves'},
      {name: 'Olive Oil', grams: '3 tablespoons'},
      {name: 'Salt', grams: '1 teaspoon'},
      {name: 'Black Pepper', grams: '1/2 teaspoon'},
      {name: 'Paprika', grams: '1 teaspoon'},
      {name: 'Rosemary', grams: '1 sprig'},
    ],
    reviews: '(9k Reviews)',
    location: 'Lisbon, Portugal',
    serve: '4 serves',
    items: '9 items', // Assuming 9 ingredients in the recipe
    procedure:
      'In a bowl, mix piri piri sauce, lemon juice, minced garlic, olive oil, salt, black pepper, and paprika. Coat chicken with the marinade and refrigerate for 1 hour. Grill the chicken and potatoes until cooked. Serve with a garnish of rosemary.',
  },
  {
    id: '6',
    rating: 4.2,
    category: 'Fruit',
    title: 'Mango Lassi',
    time: '10 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Olivia Brown',
    ingrident: [
      {name: 'Mango', grams: '2 ripe'},
      {name: 'Yogurt', grams: '1 cup'},
      {name: 'Milk', grams: '1/2 cup'},
      {name: 'Sugar', grams: '2 tablespoons'},
      {name: 'Cardamom', grams: '1/4 teaspoon'},
      {name: 'Ice Cubes', grams: '4'},
      {name: 'Mint Leaves', grams: 'for garnish'},
    ],
    reviews: '(6k Reviews)',
    location: 'Delhi, India',
    serve: '2 serves',
    items: '7 items', // Assuming 7 ingredients in the recipe
    procedure:
      'Peel and chop the mangoes. In a blender, blend mangoes, yogurt, milk, sugar, cardamom, and ice cubes until smooth. Pour into glasses and garnish with mint leaves.',
  },
  {
    id: '7',
    rating: 4.9,
    category: 'Vegetables',
    title: 'Stuffed Bell Peppers',
    time: '14 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Benjamin Garcia',
    ingrident: [
      {name: 'Bell Peppers', grams: '4 large'},
      {name: 'Quinoa', grams: '1 cup'},
      {name: 'Black Beans', grams: '1 can'},
      {name: 'Tomatoes', grams: '2 large'},
      {name: 'Onion', grams: '1 large'},
      {name: 'Garlic', grams: '3 cloves'},
      {name: 'Chili Powder', grams: '1 teaspoon'},
      {name: 'Cumin', grams: '1/2 teaspoon'},
      {name: 'Paprika', grams: '1/2 teaspoon'},
      {name: 'Cheese', grams: '1/2 cup shredded'},
    ],
    reviews: '(12k Reviews)',
    location: 'Mexico City, Mexico',
    serve: '4 serves',
    items: '10 items', // Assuming 10 ingredients in the recipe
    procedure:
      'Preheat oven to 375°F (190°C). Cut the tops off the bell peppers and remove the seeds. In a saucepan, cook quinoa according to package instructions. In a skillet, sauté onions, garlic, tomatoes, black beans, and spices. Stir in cooked quinoa. Stuff the mixture into the bell peppers. Sprinkle cheese on top. Bake for 25 minutes or until peppers are tender.',
  },
  {
    id: '8',
    rating: 3.8,
    category: 'Protein',
    title: 'Grilled Chicken Skewers',
    time: '16 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Isabella Lopez',
    ingrident: [
      {name: 'Chicken', grams: '500g'},
      {name: 'Bell Peppers', grams: '2'},
      {name: 'Red Onion', grams: '1'},
      {name: 'Cherry Tomatoes', grams: '10'},
      {name: 'Olive Oil', grams: '2 tablespoons'},
      {name: 'Lemon', grams: '1'},
      {name: 'Garlic', grams: '3 cloves'},
      {name: 'Oregano', grams: '1 teaspoon'},
      {name: 'Salt', grams: '1 teaspoon'},
      {name: 'Black Pepper', grams: '1/2 teaspoon'},
    ],
    reviews: '(7.5k Reviews)',
    location: 'Madrid, Spain',
    serve: '3 serves',
    items: '9 items', // Assuming 9 ingredients in the recipe
    procedure:
      'Cut chicken into cubes. In a bowl, mix olive oil, lemon juice, minced garlic, oregano, salt, and black pepper. Marinate chicken in the mixture for 30 minutes. Thread chicken, bell peppers, red onion, and cherry tomatoes onto skewers. Grill until chicken is cooked and veggies are tender.',
  },
  {
    id: '9',
    rating: 4.1,
    category: 'Cereal',
    title: 'Quinoa Salad',
    time: '19 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Alexander Scott',
    ingrident: [
      {name: 'Quinoa', grams: '1 cup'},
      {name: 'Cucumber', grams: '1'},
      {name: 'Tomatoes', grams: '2 large'},
      {name: 'Bell Peppers', grams: '1'},
      {name: 'Red Onion', grams: '1/2'},
      {name: 'Parsley', grams: '1/4 cup chopped'},
      {name: 'Lemon', grams: '1'},
      {name: 'Olive Oil', grams: '3 tablespoons'},
      {name: 'Salt', grams: '1/2 teaspoon'},
      {name: 'Black Pepper', grams: '1/4 teaspoon'},
    ],
    reviews: '(11k Reviews)',
    location: 'Santiago, Chile',
    serve: '4 serves',
    items: '8 items', // Assuming 8 ingredients in the recipe
    procedure:
      'Rinse quinoa under cold water. In a saucepan, cook quinoa according to package instructions. Chop cucumber, tomatoes, bell peppers, and red onion. In a bowl, mix quinoa, chopped vegetables, parsley, olive oil, lemon juice, salt, and black pepper. Toss until well combined.',
  },
  {
    id: '10',
    rating: 4.6,
    category: 'Indian',
    title: 'Butter Chicken',
    time: '13 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Mia Roberts',
    ingrident: [
      {name: 'Chicken', grams: '500g'},
      {name: 'Yogurt', grams: '1/2 cup'},
      {name: 'Tomatoes', grams: '2 large'},
      {name: 'Onion', grams: '1 large'},
      {name: 'Garlic', grams: '4 cloves'},
      {name: 'Ginger', grams: '1 tablespoon'},
      {name: 'Butter', grams: '2 tablespoons'},
      {name: 'Heavy Cream', grams: '1/2 cup'},
      {name: 'Garam Masala', grams: '1 teaspoon'},
      {name: 'Kasuri Methi', grams: '1 teaspoon'},
    ],
    reviews: '(14k Reviews)',
    location: 'Mumbai, India',
    serve: '3 serves',
    items: '9 items', // Assuming 9 ingredients in the recipe
    procedure:
      'Marinate chicken in yogurt, ginger, and garlic paste. Grill the chicken until cooked. In a skillet, sauté onions and tomatoes. Blend the onion-tomato mixture until smooth. Add butter, heavy cream, garam masala, and kasuri methi to the skillet. Simmer for a few minutes. Add grilled chicken and let it simmer in the sauce for a few more minutes.',
  },
  {
    id: '11',
    rating: 3.7,
    category: 'Local Dishes',
    title: 'Margherita Pizza',
    time: '12 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Ethan White',
    ingrident: [
      {name: 'Pizza Dough', grams: '1 ball'},
      {name: 'Tomato Sauce', grams: '1/2 cup'},
      {name: 'Fresh Mozzarella', grams: '100g'},
      {name: 'Fresh Basil', grams: 'a few leaves'},
      {name: 'Olive Oil', grams: '1 tablespoon'},
      {name: 'Garlic', grams: '2 cloves'},
      {name: 'Salt', grams: '1/2 teaspoon'},
      {name: 'Black Pepper', grams: '1/4 teaspoon'},
      {name: 'Red Pepper Flakes', grams: '1/4 teaspoon'},
    ],
    reviews: '(9k Reviews)',
    location: 'New York City, USA',
    serve: '2 serves',
    items: '9 items', // Assuming 9 ingredients in the recipe
    procedure:
      'Preheat oven to 475°F (245°C). Roll out pizza dough on a floured surface. Spread tomato sauce evenly over the dough. Top with sliced mozzarella and torn basil leaves. Drizzle olive oil and minced garlic over the pizza. Season with salt, black pepper, and red pepper flakes. Bake until crust is golden and cheese is bubbly.',
  },
  {
    id: '12',
    rating: 4.4,
    category: 'Asian',
    title: 'Pad Thai Noodles',
    time: '18 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Sophia Hall',
    ingrident: [
      {name: 'Rice Noodles', grams: '200g'},
      {name: 'Shrimp', grams: '200g'},
      {name: 'Tofu', grams: '150g'},
      {name: 'Bean Sprouts', grams: '1 cup'},
      {name: 'Eggs', grams: '2'},
      {name: 'Scallions', grams: '4'},
      {name: 'Garlic', grams: '4 cloves'},
      {name: 'Peanuts', grams: '1/4 cup'},
      {name: 'Lime', grams: '1'},
      {name: 'Fish Sauce', grams: '2 tablespoons'},
    ],
    reviews: '(12k Reviews)',
    location: 'Bangkok, Thailand',
    serve: '2 serves',
    items: '10 items', // Assuming 10 ingredients in the recipe
    procedure:
      'Soak rice noodles in hot water for 10 minutes. Drain and set aside. In a wok, sauté shrimp, tofu, and bean sprouts. Push the ingredients to one side and scramble eggs on the other side. Add minced garlic and chopped scallions. Toss in cooked rice noodles. Add fish sauce and lime juice. Stir-fry until noodles are evenly coated. Garnish with crushed peanuts.',
  },
  {
    id: '13',
    rating: 4.8,
    category: 'Greek',
    title: 'Hummus and Pita Bread',
    time: '15 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Gabriel Martinez',
    ingrident: [
      {name: 'Chickpeas', grams: '1 can'},
      {name: 'Tahini', grams: '1/4 cup'},
      {name: 'Lemon', grams: '1'},
      {name: 'Garlic', grams: '3 cloves'},
      {name: 'Olive Oil', grams: '2 tablespoons'},
      {name: 'Paprika', grams: '1/2 teaspoon'},
      {name: 'Cumin', grams: '1/2 teaspoon'},
      {name: 'Salt', grams: '1/2 teaspoon'},
      {name: 'Black Pepper', grams: '1/4 teaspoon'},
      {name: 'Pita Bread', grams: '4 pieces'},
    ],
    reviews: '(15k Reviews)',
    location: 'Athens, Greece',
    serve: '4 serves',
    items: '10 items', // Assuming 10 ingredients in the recipe
    procedure:
      'In a blender, blend chickpeas, tahini, lemon juice, minced garlic, olive oil, paprika, cumin, salt, and black pepper until smooth. Drizzle olive oil and sprinkle paprika on top. Serve with warm pita bread.',
  },
  {
    id: '14',
    rating: 3.6,
    category: 'Chinese',
    title: 'Kung Pao Chicken',
    time: '17 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Ava Wilson',
    ingrident: [
      {name: 'Chicken', grams: '400g'},
      {name: 'Bell Peppers', grams: '2'},
      {name: 'Zucchini', grams: '1'},
      {name: 'Red Chili Peppers', grams: '2'},
      {name: 'Garlic', grams: '4 cloves'},
      {name: 'Ginger', grams: '1 tablespoon'},
      {name: 'Soy Sauce', grams: '3 tablespoons'},
      {name: 'Vinegar', grams: '1 tablespoon'},
      {name: 'Hoisin Sauce', grams: '1 tablespoon'},
      {name: 'Cornstarch', grams: '1 tablespoon'},
    ],
    reviews: '(11.5k Reviews)',
    location: 'Beijing, China',
    serve: '3 serves',
    items: '9 items', // Assuming 9 ingredients in the recipe
    procedure:
      'Cut chicken into bite-sized pieces. In a wok, stir-fry chicken until cooked. Add chopped bell peppers, zucchini, red chili peppers, minced garlic, and ginger. In a small bowl, mix soy sauce, vinegar, hoisin sauce, and cornstarch. Pour the sauce over the chicken and vegetables. Stir-fry until the sauce thickens.',
  },
  {
    id: '15',
    rating: 4.0,
    category: 'Fruit',
    title: 'Watermelon Feta Salad',
    time: '10 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Liam Thompson',
    ingrident: [
      {name: 'Watermelon', grams: '4 cups diced'},
      {name: 'Feta Cheese', grams: '1 cup crumbled'},
      {name: 'Cucumber', grams: '1'},
      {name: 'Mint Leaves', grams: '1/4 cup chopped'},
      {name: 'Balsamic Glaze', grams: '2 tablespoons'},
      {name: 'Olive Oil', grams: '2 tablespoons'},
      {name: 'Salt', grams: '1/4 teaspoon'},
      {name: 'Black Pepper', grams: '1/4 teaspoon'},
    ],
    reviews: '(7k Reviews)',
    location: 'Santorini, Greece',
    serve: '4 serves',
    items: '8 items', // Assuming 8 ingredients in the recipe
    procedure:
      'In a large bowl, combine watermelon cubes, crumbled feta, sliced cucumber, and chopped mint leaves. Drizzle balsamic glaze and olive oil over the salad. Season with salt and black pepper. Toss gently and serve chilled.',
  },
  {
    id: '16',
    rating: 4.5,
    category: 'Vegetables',
    title: 'Vegetable Stir Fry',
    time: '14 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Harper Cooper',
    ingrident: [
      {name: 'Broccoli', grams: '1 head'},
      {name: 'Bell Peppers', grams: '2'},
      {name: 'Carrots', grams: '2'},
      {name: 'Snow Peas', grams: '1 cup'},
      {name: 'Mushrooms', grams: '1 cup sliced'},
      {name: 'Garlic', grams: '4 cloves'},
      {name: 'Ginger', grams: '1 tablespoon'},
      {name: 'Soy Sauce', grams: '3 tablespoons'},
      {name: 'Sesame Oil', grams: '1 tablespoon'},
      {name: 'Cornstarch', grams: '1 tablespoon'},
    ],
    reviews: '(10k Reviews)',
    location: 'Tokyo, Japan',
    serve: '3 serves',
    items: '9 items', // Assuming 9 ingredients in the recipe
    procedure:
      'Cut broccoli into florets. Slice bell peppers and carrots. In a wok, stir-fry vegetables until tender-crisp. Add minced garlic and grated ginger. In a small bowl, mix soy sauce, sesame oil, and cornstarch. Pour the sauce over the vegetables. Stir-fry until the sauce thickens.',
  },
  {
    id: '17',
    rating: 4.9,
    category: 'Protein',
    title: 'Salmon with Lemon Dill Sauce',
    time: '16 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Aiden Green',
    ingrident: [
      {name: 'Salmon', grams: '400g'},
      {name: 'Lemon', grams: '1'},
      {name: 'Fresh Dill', grams: '1/4 cup chopped'},
      {name: 'Garlic', grams: '4 cloves'},
      {name: 'Olive Oil', grams: '2 tablespoons'},
      {name: 'Salt', grams: '1/2 teaspoon'},
      {name: 'Black Pepper', grams: '1/4 teaspoon'},
      {name: 'Parsley', grams: 'for garnish'},
    ],
    reviews: '(14k Reviews)',
    location: 'Oslo, Norway',
    serve: '2 serves',
    items: '8 items', // Assuming 8 ingredients in the recipe
    procedure:
      'Preheat oven to 400°F (200°C). Season salmon with salt and black pepper. In a bowl, mix lemon juice, chopped dill, minced garlic, and olive oil. Pour the mixture over the salmon. Bake until salmon is cooked through. Garnish with fresh parsley before serving.',
  },
  {
    id: '18',
    rating: 4.1,
    category: 'Cereal',
    title: 'Caprese Quinoa Bowl',
    time: '19 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Aria Martinez',
    ingrident: [
      {name: 'Quinoa', grams: '1 cup'},
      {name: 'Cherry Tomatoes', grams: '1 cup'},
      {name: 'Fresh Mozzarella', grams: '100g'},
      {name: 'Basil Leaves', grams: '1/4 cup chopped'},
      {name: 'Balsamic Vinegar', grams: '2 tablespoons'},
      {name: 'Olive Oil', grams: '2 tablespoons'},
      {name: 'Salt', grams: '1/4 teaspoon'},
      {name: 'Black Pepper', grams: '1/4 teaspoon'},
    ],
    reviews: '(11k Reviews)',
    location: 'Rome, Italy',
    serve: '3 serves',
    items: '8 items', // Assuming 8 ingredients in the recipe
    procedure:
      'Rinse quinoa under cold water. In a saucepan, cook quinoa according to package instructions. In a bowl, combine cooked quinoa, halved cherry tomatoes, fresh mozzarella balls, and chopped basil leaves. Drizzle balsamic vinegar and olive oil over the bowl. Season with salt and black pepper. Toss gently and serve.',
  },
  {
    id: '19',
    rating: 4.7,
    category: 'Indian',
    title: 'Vegetable Biryani',
    time: '13 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Sofia Hernandez',
    ingrident: [
      {name: 'Basmati Rice', grams: '1 cup'},
      {name: 'Carrots', grams: '2'},
      {name: 'Potatoes', grams: '2'},
      {name: 'Green Beans', grams: '1 cup'},
      {name: 'Cauliflower', grams: '1 cup'},
      {name: 'Peas', grams: '1/2 cup'},
      {name: 'Onion', grams: '1 large'},
      {name: 'Tomatoes', grams: '2 large'},
      {name: 'Yogurt', grams: '1/2 cup'},
      {name: 'Ghee', grams: '2 tablespoons'},
    ],
    reviews: '(16k Reviews)',
    location: 'Delhi, India',
    serve: '4 serves',
    items: '10 items', // Assuming 10 ingredients in the recipe
    procedure:
      'Soak basmati rice in water for 30 minutes. Drain and set aside. In a skillet, sauté onions until golden. Add tomatoes, carrots, potatoes, green beans, cauliflower, and peas. Cook until vegetables are tender. In a separate bowl, mix yogurt and ghee. Layer rice and vegetable mixture in a pot. Pour the yogurt-ghee mixture over the layers. Cover and cook until the rice is cooked and flavors blend together.',
  },
  {
    id: '20',
    rating: 3.7,
    category: 'Local Dishes',
    title: 'Fish and Chips',
    time: '12 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Noah Scott',
    ingrident: [
      {name: 'White Fish Fillets', grams: '500g'},
      {name: 'Potatoes', grams: '4 large'},
      {name: 'All-Purpose Flour', grams: '1 cup'},
      {name: 'Cornstarch', grams: '1/2 cup'},
      {name: 'Baking Powder', grams: '1 teaspoon'},
      {name: 'Beer', grams: '1 cup'},
      {name: 'Vegetable Oil', grams: 'for frying'},
      {name: 'Salt', grams: '1 teaspoon'},
      {name: 'Black Pepper', grams: '1/2 teaspoon'},
    ],
    reviews: '(8k Reviews)',
    location: 'London, UK',
    serve: '3 serves',
    items: '9 items', // Assuming 9 ingredients in the recipe
    procedure:
      'Peel and cut potatoes into thick fries. In a bowl, mix flour, cornstarch, baking powder, salt, and black pepper. Stir in beer to make a batter. Dip fish fillets in the batter. Fry the fish and potatoes in hot oil until golden and crispy. Serve with tartar sauce and lemon wedges.',
  },
  {
    id: '21',
    rating: 3.9,
    category: 'Asian',
    title: 'Chicken Teriyaki',
    time: '18 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Oliver Turner',
    ingrident: [
      {name: 'Chicken Thighs', grams: '500g'},
      {name: 'Soy Sauce', grams: '1/2 cup'},
      {name: 'Mirin', grams: '1/4 cup'},
      {name: 'Brown Sugar', grams: '2 tablespoons'},
      {name: 'Garlic', grams: '4 cloves'},
      {name: 'Ginger', grams: '1 tablespoon'},
      {name: 'Sesame Oil', grams: '1 tablespoon'},
      {name: 'Green Onions', grams: '4'},
      {name: 'Sesame Seeds', grams: '1 tablespoon'},
    ],
    reviews: '(12k Reviews)',
    location: 'Tokyo, Japan',
    serve: '3 serves',
    items: '9 items', // Assuming 9 ingredients in the recipe
    procedure:
      'Cut chicken thighs into bite-sized pieces. In a bowl, mix soy sauce, mirin, brown sugar, minced garlic, grated ginger, and sesame oil. Marinate chicken in the sauce for 30 minutes. In a skillet, stir-fry marinated chicken until cooked. Garnish with chopped green onions and sesame seeds.',
  },
  {
    id: '22',
    rating: 4.2,
    category: 'Fruit',
    title: 'Berry Smoothie Bowl',
    time: '10 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Ella Collins',
    ingrident: [
      {name: 'Mixed Berries', grams: '1 cup'},
      {name: 'Banana', grams: '1'},
      {name: 'Greek Yogurt', grams: '1/2 cup'},
      {name: 'Almond Milk', grams: '1/2 cup'},
      {name: 'Chia Seeds', grams: '2 tablespoons'},
      {name: 'Granola', grams: '1/4 cup'},
      {name: 'Coconut Flakes', grams: '1 tablespoon'},
      {name: 'Honey', grams: '1 tablespoon'},
      {name: 'Mint Leaves', grams: 'for garnish'},
    ],
    reviews: '(13k Reviews)',
    location: 'Bali, Indonesia',
    serve: '2 serves',
    items: '9 items', // Assuming 9 ingredients in the recipe
    procedure:
      'In a blender, blend mixed berries, banana, Greek yogurt, and almond milk until smooth. Pour the smoothie into bowls. Top with chia seeds, granola, coconut flakes, and drizzle honey over the bowl. Garnish with mint leaves before serving.',
  },
  {
    id: '23',
    rating: 4.5,
    category: 'Vegetables',
    title: 'Stuffed Zucchini Boats',
    time: '14 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Zoe Martinez',
    ingrident: [
      {name: 'Zucchini', grams: '4 large'},
      {name: 'Ground Turkey', grams: '400g'},
      {name: 'Tomatoes', grams: '2 large'},
      {name: 'Onion', grams: '1 large'},
      {name: 'Garlic', grams: '4 cloves'},
      {name: 'Mozzarella Cheese', grams: '1 cup shredded'},
      {name: 'Olive Oil', grams: '2 tablespoons'},
      {name: 'Italian Seasoning', grams: '1 teaspoon'},
      {name: 'Salt', grams: '1/2 teaspoon'},
      {name: 'Black Pepper', grams: '1/4 teaspoon'},
    ],
    reviews: '(10k Reviews)',
    location: 'Rome, Italy',
    serve: '4 serves',
    items: '10 items', // Assuming 10 ingredients in the recipe
    procedure:
      'Cut zucchini in half lengthwise and scoop out the seeds. In a skillet, cook ground turkey until browned. Add chopped tomatoes, onions, minced garlic, and Italian seasoning. Stir in shredded mozzarella cheese. Stuff the zucchini halves with the mixture. Drizzle olive oil and season with salt and black pepper. Bake until zucchini is tender and cheese is bubbly.',
  },
  {
    id: '24',
    rating: 4.9,
    category: 'Protein',
    title: 'Grilled Salmon Salad',
    time: '16 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Isabella Clark',
    ingrident: [
      {name: 'Salmon Fillet', grams: '300g'},
      {name: 'Mixed Greens', grams: '4 cups'},
      {name: 'Cherry Tomatoes', grams: '1 cup'},
      {name: 'Cucumber', grams: '1'},
      {name: 'Avocado', grams: '1'},
      {name: 'Red Onion', grams: '1/2'},
      {name: 'Lemon', grams: '1'},
      {name: 'Olive Oil', grams: '2 tablespoons'},
      {name: 'Dijon Mustard', grams: '1 tablespoon'},
      {name: 'Honey', grams: '1 tablespoon'},
    ],
    reviews: '(7.5k Reviews)',
    location: 'Seattle, USA',
    serve: '2 serves',
    items: '9 items', // Assuming 9 ingredients in the recipe
    procedure:
      'Season salmon fillet with salt and black pepper. Grill until cooked through. In a large bowl, toss mixed greens, halved cherry tomatoes, sliced cucumber, diced avocado, and thinly sliced red onion. In a separate bowl, whisk together lemon juice, olive oil, Dijon mustard, and honey. Drizzle the dressing over the salad. Top with grilled salmon before serving.',
  },
  {
    id: '25',
    rating: 4.1,
    category: 'Cereal',
    title: 'Mushroom Risotto',
    time: '19 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Sophie Walker',
    ingrident: [
      {name: 'Arborio Rice', grams: '1 cup'},
      {name: 'Mushrooms', grams: '200g'},
      {name: 'Vegetable Broth', grams: '4 cups'},
      {name: 'White Wine', grams: '1/2 cup'},
      {name: 'Onion', grams: '1 large'},
      {name: 'Garlic', grams: '4 cloves'},
      {name: 'Butter', grams: '2 tablespoons'},
      {name: 'Parmesan Cheese', grams: '1/2 cup grated'},
      {name: 'Thyme', grams: '1 teaspoon'},
      {name: 'Salt', grams: '1/2 teaspoon'},
      {name: 'Black Pepper', grams: '1/4 teaspoon'},
    ],
    reviews: '(11k Reviews)',
    location: 'Milan, Italy',
    serve: '4 serves',
    items: '11 items', // Assuming 11 ingredients in the recipe
    procedure:
      'In a saucepan, sauté chopped mushrooms and diced onions in butter until tender. Add minced garlic and Arborio rice. Cook for a few minutes. Pour in white wine and cook until absorbed. Gradually add vegetable broth, stirring constantly until rice is creamy and tender. Stir in grated Parmesan cheese and fresh thyme. Season with salt and black pepper.',
  },
  {
    id: '26',
    rating: 4.6,
    category: 'Indian',
    title: 'Paneer Tikka Masala',
    time: '13 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Maya Patel',
    ingrident: [
      {name: 'Paneer', grams: '400g'},
      {name: 'Tomatoes', grams: '3 large'},
      {name: 'Onion', grams: '1 large'},
      {name: 'Garlic', grams: '4 cloves'},
      {name: 'Ginger', grams: '1 tablespoon'},
      {name: 'Heavy Cream', grams: '1/2 cup'},
      {name: 'Yogurt', grams: '1/2 cup'},
      {name: 'Garam Masala', grams: '1 teaspoon'},
      {name: 'Turmeric', grams: '1/2 teaspoon'},
      {name: 'Cumin', grams: '1/2 teaspoon'},
      {name: 'Coriander', grams: '1/2 teaspoon'},
    ],
    reviews: '(14k Reviews)',
    location: 'Mumbai, India',
    serve: '3 serves',
    items: '11 items', // Assuming 11 ingredients in the recipe
    procedure:
      'Cut paneer into cubes. In a blender, blend tomatoes, onion, ginger, and garlic into a smooth puree. In a skillet, sauté the tomato-onion puree until the oil separates. Stir in garam masala, turmeric, cumin, and coriander. Add yogurt and heavy cream. Cook until the sauce thickens. Add paneer cubes and simmer for a few minutes.',
  },
  {
    id: '27',
    rating: 3.8,
    category: 'Cereal',
    title: 'Oatmeal Breakfast Bowl',
    time: '19 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Lucas Garcia',
    ingrident: [
      {name: 'Rolled Oats', grams: '1 cup'},
      {name: 'Almond Milk', grams: '1 1/2 cups'},
      {name: 'Chia Seeds', grams: '2 tablespoons'},
      {name: 'Honey', grams: '1 tablespoon'},
      {name: 'Almonds', grams: '1/4 cup chopped'},
      {name: 'Fresh Berries', grams: '1/2 cup'},
      {name: 'Banana', grams: '1'},
      {name: 'Cinnamon', grams: '1/2 teaspoon'},
      {name: 'Vanilla Extract', grams: '1/2 teaspoon'},
      {name: 'Salt', grams: '1/4 teaspoon'},
    ],
    reviews: '(9k Reviews)',
    location: 'Barcelona, Spain',
    serve: '2 serves',
    items: '9 items', // Assuming 9 ingredients in the recipe
    procedure:
      'In a saucepan, combine rolled oats, almond milk, chia seeds, honey, cinnamon, vanilla extract, and a pinch of salt. Cook over medium heat, stirring occasionally, until the oats are tender and the mixture thickens. Remove from heat and let it cool. Top with chopped almonds, fresh berries, and sliced banana before serving.',
  },
  {
    id: '28',
    rating: 4.2,
    category: 'Indian',
    title: 'Chicken Biryani',
    time: '13 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Amelia Roberts',
    ingrident: [
      {name: 'Basmati Rice', grams: '1 cup'},
      {name: 'Chicken Thighs', grams: '400g'},
      {name: 'Onion', grams: '1 large'},
      {name: 'Tomatoes', grams: '2 large'},
      {name: 'Yogurt', grams: '1/2 cup'},
      {name: 'Ginger-Garlic Paste', grams: '2 tablespoons'},
      {name: 'Biryani Masala', grams: '2 tablespoons'},
      {name: 'Saffron', grams: 'a pinch'},
      {name: 'Mint Leaves', grams: '1/4 cup chopped'},
      {name: 'Coriander Leaves', grams: '1/4 cup chopped'},
      {name: 'Ghee', grams: '2 tablespoons'},
      {name: 'Oil', grams: '2 tablespoons'},
      {name: 'Salt', grams: '1 teaspoon'},
      {name: 'Black Pepper', grams: '1/2 teaspoon'},
    ],
    reviews: '(15k Reviews)',
    location: 'Hyderabad, India',
    serve: '3 serves',
    items: '14 items', // Assuming 14 ingredients in the recipe
    procedure:
      'Marinate chicken thighs with yogurt, ginger-garlic paste, biryani masala, chopped mint leaves, chopped coriander leaves, saffron, and a pinch of salt. Let it marinate for 30 minutes. In a pot, heat ghee and oil. Sauté sliced onions until golden. Add chopped tomatoes and cook until soft. Add marinated chicken and cook until chicken is tender. In a separate pot, cook basmati rice until half done. Layer the chicken and rice in the pot. Sprinkle saffron-infused milk over the layers. Cover and cook on low heat until rice is fully cooked.',
  },
  {
    id: '29',
    rating: 3.7,
    category: 'Italian',
    title: 'Lasagna',
    time: '12 Mins',
    foodimage: require('../photos/food1.png'),
    chef: 'Henry Turner',
    ingrident: [
      {name: 'Lasagna Noodles', grams: '12 sheets'},
      {name: 'Ground Beef', grams: '500g'},
      {name: 'Onion', grams: '1 large'},
      {name: 'Garlic', grams: '4 cloves'},
      {name: 'Tomato Sauce', grams: '2 cups'},
      {name: 'Ricotta Cheese', grams: '1 cup'},
      {name: 'Shredded Mozzarella Cheese', grams: '2 cups'},
      {name: 'Parmesan Cheese', grams: '1/2 cup grated'},
      {name: 'Egg', grams: '1'},
      {name: 'Basil Leaves', grams: '1/4 cup chopped'},
      {name: 'Olive Oil', grams: '2 tablespoons'},
      {name: 'Salt', grams: '1/2 teaspoon'},
      {name: 'Black Pepper', grams: '1/4 teaspoon'},
    ],
    reviews: '(13k Reviews)',
    location: 'Rome, Italy',
    serve: '6 serves',
    items: '13 items', // Assuming 13 ingredients in the recipe
    procedure:
      'In a skillet, sauté chopped onions and minced garlic in olive oil until soft. Add ground beef and cook until browned. Stir in tomato sauce and chopped basil leaves. In a separate bowl, mix ricotta cheese, grated Parmesan cheese, egg, salt, and black pepper. Preheat the oven to 180°C (350°F). In a baking dish, layer lasagna noodles, meat sauce, ricotta mixture, and shredded mozzarella cheese. Repeat the layers. Bake for 30 minutes or until cheese is bubbly and golden.',
  },
  {
    id: '30',
    rating: 4.4,
    category: 'Asian',
    title: 'Spring Rolls',
    time: '18 Mins',
    foodimage: require('../photos/food2.png'),
    chef: 'Sophia White',
    ingrident: [
      {name: 'Rice Paper Wrappers', grams: '10 sheets'},
      {name: 'Shrimp', grams: '200g'},
      {name: 'Rice Vermicelli Noodles', grams: '100g'},
      {name: 'Carrots', grams: '1 large'},
      {name: 'Cucumber', grams: '1'},
      {name: 'Lettuce', grams: '4 leaves'},
      {name: 'Mint Leaves', grams: '1/4 cup'},
      {name: 'Thai Basil Leaves', grams: '1/4 cup'},
      {name: 'Peanuts', grams: '1/4 cup crushed'},
      {name: 'Water', grams: 'for soaking'},
      {name: 'Soy Sauce', grams: '1/4 cup'},
      {name: 'Hoisin Sauce', grams: '1/4 cup'},
      {name: 'Garlic', grams: '2 cloves'},
      {name: 'Ginger', grams: '1 tablespoon minced'},
      {name: 'Lime', grams: '1'},
      {name: 'Water', grams: 'for sealing'},
    ],
    reviews: '(10k Reviews)',
    location: 'Bangkok, Thailand',
    serve: '4 serves',
    items: '16 items', // Assuming 16 ingredients in the recipe
    procedure:
      'Cook rice vermicelli noodles according to the package instructions. In a bowl, soak rice paper wrappers in warm water until soft. On each softened wrapper, place lettuce leaves, cooked rice vermicelli noodles, sliced carrots, sliced cucumbers, fresh mint leaves, fresh Thai basil leaves, and cooked shrimp. Roll tightly and seal with water. In a small bowl, mix soy sauce, hoisin sauce, minced garlic, minced ginger, and lime juice for the dipping sauce. Serve the spring rolls with the dipping sauce and crushed peanuts.',
  },
];

export default slide;
