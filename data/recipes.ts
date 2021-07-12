import ChickenMeatballsImg from './images/chicken-meatballs.jpg';
import RoastedTomatoImg from './images/roasted-tomato.jpg';
import PastaPatateImg from './images/pasta-patate.jpg';

export interface Recipe {
  name: string;
  id: string;
  description: string;
  youtubeVideoId: string;
  output: {
    type: string;
    value: string;
  };
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  directions: string[];
  image: string;
  additional?: {
    title: string;
    details: string[];
  }[];
}

const recipes: Recipe[] = [
  {
    name: 'Chicken Meatballs',
    id: 'chicken-meatballs',
    description: 'So moist and flavorful. As I say in the video, dang these are good!',
    youtubeVideoId: '0ZhGzh7YDMg',
    image: ChickenMeatballsImg,
    output: {
      type: 'yields',
      value: '20 meatballs',
    },
    prepTime: '20 minutes',
    cookTime: '12 minutes',
    ingredients: [
      '1lb of ground Chicken',
      '2 large cloves of garlic',
      'Hand full of Fresh Basil',
      '1⁄4 cup Milk (whichever you prefer: 1%, 2%, Whole, Fat Free)',
      '1⁄2 cup Breadcrumbs',
      '1⁄2 teaspoon salt',
      '1/8 teaspoon Cayenne',
      '1 egg',
      '1⁄2 cup Pecorino Romano Cheese',
    ],
    directions: [
      'Preheat oven to 400',
      'Put the chicken in a bowl. In the food processor add garlic and basil and puree. Then add milk, egg and puree all the ingredients together. Add mixture to the chicken, then add breadcrumbs and Romano. Gently mix with hands but do NOT overmix.',
      'Line a baking sheet with parchment paper. Spray with Canola Spray. Using a 2.5 oz ice cream scoop to ensure equal size and put meatballs on the baking sheet and bake 12 minutes until done or 160 degrees. Then add the meatballs to the heated Marinara sauce on stovetop and reheat on med low to soft and tender. Remove meatballs from sauce and put in a baking pan, top with sauce, then top with Mozzarella. Bake until the cheese is melted beautifully.',
    ],
    additional: [
      {
        title: 'parmigiana style',
        details: [
          'Let’s say you make the meatballs one day and later in the week you want to make them for dinner, Parmigiana Style follow the directions below.',
          'In a baking pan, pour about 1” water in pan. Add meatballs, cover with foil and reheat/steam chicken meatballs 10-12 min. Remove from the oven, drain water and cover meatballs with Marinara Sauce and Fresh Mozzarella and finish baking until the cheese is melted beautifully.',
        ],
      },
    ],
  },
  {
    name: 'Pasta Patate e Piselli',
    id: 'pasta-patate-e-piselli',
    description:
      "Mamma Adriana Vicari's signature dish. She would be honored if she knew you made her dish for your famiglia.",
    youtubeVideoId: '7laXHQh2gz4',
    image: PastaPatateImg,
    output: {
      type: 'servings',
      value: '4',
    },
    prepTime: '20 minutes',
    cookTime: '25 minutes',
    ingredients: [
      '1 medium onion chopped',
      '4 cloves of garlic sliced',
      '1 medium potatoes cut in cubes',
      '1 medium zucchini cut in half moons',
      '1 medium yellow summer squash, cut 1/4"-thick pieces',
      '1 cups green peas',
      '6 tbsp. extra virgin olive oil',
      '4 plum tomatoes, peeled, cored, and coarsely chopped',
      'Salt and cayenne to taste',
      '1 lb. spaghetti',
      '1⁄4 cup freshly grated Romano Cheese',
      '2 cups chicken stock',
      'Handful of fresh basil',
    ],
    directions: [
      'Heat olive oil in a 4 qt pan over medium-high heat. Sauté onions for 3 minutes add potatoes and cook until almost done, add garlic and all other vegetables. Season with salt and cayenne.',
      'Add chicken stock and simmer until vegetables are almost cooked. Drop pasta into the pot and cook on medium heat. Add more stock until pasta is covered. Cook for 8 min or until pasta is done.',
      'Stir in Romano cheese and fresh basil and serve.',
    ],
  },
  {
    name: 'Roasted Tomato Basil Soup',
    id: 'roasted-tomato-basil-soup',
    description: 'Nothing says Mind and Heart health like this soup. So warm and comforting',
    youtubeVideoId: 'zak5Tfboyy8',
    image: RoastedTomatoImg,
    output: {
      type: 'servings',
      value: '6-8',
    },
    prepTime: '15 minutes',
    cookTime: '1 hr 30 minutes',
    ingredients: [
      '3 lbs ripe plum tomatoes, cut in half lengthwise',
      '1⁄4 cup plus 2 tablespoons good olive oil',
      '1 tablespoon kosher salt',
      '1 1/2 teaspoons freshly ground black pepper',
      '2 medium yellow onions chopped',
      '6 garlic cloves minced',
      '1 carrot diced',
      '2 tablespoons butter',
      '1/4 teaspoon crushed red pepper flakes',
      '1 (28-ounce) canned plum tomatoes, with their juice',
      '4 cups fresh basil leaves, packed',
      '1 teaspoon fresh thyme leaves',
      '1 quart chicken or Veggie stock',
    ],
    directions: [
      'Preheat the oven to 400 degrees F. In a large baking dish, toss together the tomatoes, 1⁄4 cup olive oil, salt, and pepper. Spread the tomatoes in 1 layer roast for 30-40 minutes. This brings out the sweetness in the tomatoes no matter what season.',
      'In a large stockpot over medium heat saute the onions, carot, garlic in remaining olive oil, butter and red pepper flakes for 10 minutes, until the onions are golden. Add the canned tomatoes, basil, thyme, and stock. Add the oven-roasted tomatoes mixture , including the accumulated juices. Bring to a boil and simmer uncovered for 35-40 minutes. Use an immersion blender (or blender) and blend until the soup is smooth. Taste for seasonings. Serve room temperature, hot or cold.',
    ],
  },
];

export default recipes;
