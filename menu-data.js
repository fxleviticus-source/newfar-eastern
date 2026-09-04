// New Far Eastern menu data — transcribed and verified against the
// official menu PDF. Names, descriptions and prices are preserved
// exactly as printed. Update this file to update the menu site-wide.

const MENU = [
  {
    id: "breakfast",
    name: "Breakfast",
    photo: "https://images.unsplash.com/photo-1554521948-6891dbc1cde7?w=1400&q=75&auto=format&fit=crop",
    items: [
      { name: "Full English Breakfast", desc: "Eggs, Pork or Beef Sausages, Bacon, Sauteed Mushrooms, Baked Beans, Grilled Tomatoes, Toast", price: [{ v: "K160" }] },
      { name: "Eggs and Bacon Plus", desc: "Eggs, Bacon, Baked Beans with Toast", price: [{ v: "K140" }] },
      { name: "Chicken Mayo Sandwich", desc: "Served with chips/salad. Shredded Chicken, Mayonnaise, Spring onion", price: [{ v: "K150" }] },
      { name: "Grilled Ham and Egg Sandwich", desc: "Served with chips/salad. Ham, Scrambled Eggs and Cheddar Cheese", price: [{ v: "K155" }] },
      { name: "Chicken Wrap", desc: "Served with chips/salad. Grilled Chicken, Lettuce, Mixed Bellpeppers, Carrots, Tomato, with Mayonnaise in a Tortilla Wrap", price: [{ v: "K215" }] }
    ]
  },
  {
    id: "breakfast-extras",
    name: "Breakfast Extras",
    items: [
      { name: "Toast", desc: "", price: [{ v: "K10" }] },
      { name: "Eggs", desc: "", price: [{ v: "K10" }] },
      { name: "Bacon", desc: "", price: [{ v: "K10" }] },
      { name: "Beef Sausage", desc: "", price: [{ v: "K10" }] },
      { name: "Pork Sausage", desc: "", price: [{ v: "K10" }] },
      { name: "Chips", desc: "", price: [{ v: "K50" }] }
    ]
  },
  {
    id: "hot-beverages",
    name: "Hot Beverages",
    items: [
      { name: "Tea (Rooibos, Five Roses)", desc: "", price: [{ v: "K60" }] },
      { name: "Chinese Tea", desc: "", price: [{ v: "K80" }] },
      { name: "Americano", desc: "", price: [{ v: "K80" }] },
      { name: "Espresso", desc: "", price: [{ v: "K80" }] },
      { name: "Filter Coffee", desc: "", price: [{ v: "K80" }] },
      { name: "Cappuccino", desc: "", price: [{ v: "K80" }] },
      { name: "Caffe Latte", desc: "", price: [{ v: "K80" }] },
      { name: "Hot Chocolate", desc: "", price: [{ v: "K80" }] },
      { name: "Milo", desc: "", price: [{ v: "K80" }] },
      { name: "Irish Coffee", desc: "", price: [{ v: "K120" }] }
    ]
  },
  {
    id: "starters",
    name: "Starters",
    photo: "https://images.unsplash.com/photo-1651399436026-3ca4088b3d6e?w=1400&q=75&auto=format&fit=crop",
    items: [
      { name: "Fried Dumplings", desc: "Chicken/Beef/Pork/Egg & Vegetables", price: [{ v: "K135" }] },
      { name: "Spring Rolls", desc: "Chicken/Beef/Vegetables", price: [{ v: "K30" }] },
      { name: "Shrimp Dumplings", desc: "", price: [{ v: "K45" }] },
      { name: "Fried Calamari", desc: "", price: [{ v: "Price on request" }] },
      { name: "Gizzards", desc: "", price: [{ v: "K155" }] },
      { name: "Salted Duck", desc: "", price: [{ v: "K260" }] },
      { name: "Fried Peanuts", desc: "", price: [{ v: "K110" }] },
      { name: "Samosa", desc: "", price: [{ v: "K20" }] }
    ]
  },
  {
    id: "salads-cold",
    name: "Salads & Cold Dishes",
    items: [
      { name: "Greek Salad", desc: "", price: [{ v: "K120" }] },
      { name: "Chicken Salad", desc: "", price: [{ v: "K140" }] },
      { name: "Cucumber Salad", desc: "", price: [{ v: "K110" }] },
      { name: "Green Beans with Garlic", desc: "", price: [{ v: "K110" }] },
      { name: "Kimchi", desc: "", price: [{ v: "K110" }] },
      { name: "Refreshing Fungus (Mushroom)", desc: "", price: [{ v: "K120" }] },
      { name: "Bean Curd Skin with Coriander", desc: "", price: [{ v: "K120" }] },
      { name: "Sliced Beef", desc: "", price: [{ v: "K175" }] },
      { name: "Cold Pork Ear with Chili Sauce", desc: "", price: [{ v: "K175" }] }
    ]
  },
  {
    id: "soups",
    name: "Soups",
    items: [
      { name: "Sweetcorn and Chicken", desc: "incl eggs", price: [{ l: "Small", v: "K80" }, { l: "Big", v: "K140" }] },
      { name: "Tomato and Egg Soup", desc: "", price: [{ l: "Small", v: "K80" }, { l: "Big", v: "K140" }] },
      { name: "Beef Mushroom", desc: "", price: [{ l: "Small", v: "K80" }, { l: "Big", v: "K140" }] },
      { name: "Hot and Sour", desc: "incl eggs", price: [{ l: "Small", v: "K80" }, { l: "Big", v: "K140" }] },
      { name: "Wonton Soup", desc: "", price: [{ l: "Small", v: "K80" }, { l: "Big", v: "K140" }] },
      { name: "Seaweed and Egg Soup", desc: "", price: [{ l: "Small", v: "K80" }, { l: "Big", v: "K140" }] },
      { name: "Mushroom & Chicken", desc: "", price: [{ l: "Small", v: "K80" }, { l: "Big", v: "K140" }] },
      { name: "Fish and Tofu", desc: "", price: [{ l: "Small", v: "K80" }, { l: "Big", v: "K140" }] },
      { name: "Seafood", desc: "", price: [{ l: "Small", v: "K80" }, { l: "Big", v: "K140" }] },
      { name: "Village Chicken Soup", desc: "", price: [{ v: "K360" }] }
    ]
  },
  {
    id: "chinese-specials",
    name: "Chinese Specials",
    photo: "https://images.unsplash.com/photo-1767818375229-be50b2b070ef?w=1400&q=75&auto=format&fit=crop",
    items: [
      { name: "Pork Belly with Chili Sauce", desc: "Sliced pork tossed in bellpeppers and fresh chili", price: [{ v: "K280" }] },
      { name: "Roast Pork", desc: "Roasted pork in a potato stew", price: [{ v: "K290" }] },
      { name: "Roast Oxtail", desc: "Roasted oxtail in a potato stew", price: [{ v: "K440" }] },
      { name: "Charcoal Fish", desc: "Roasted bream in a vegetable stew, topped with chili, garlic and spring onion", price: [{ v: "K360" }] },
      { name: "Duck Casserole", desc: "", price: [{ v: "K305" }] },
      { name: "Chinese Whole Baked Sheep", desc: "To be ordered the day before. Grilled whole sheep basted with Chinese spice", price: [{ v: "K4600" }] }
    ]
  },
  {
    id: "main-dish",
    name: "Main Dish",
    items: [
      { name: "Sizzling Hot Plate", desc: "Beef, Chicken, Pork, or Tofu (incl eggs). Green pepper, onion, carrots and black fungus", price: [{ v: "K235" }] },
      { name: "Sizzling Duck Hot Plate", desc: "Sliced duck, green pepper, onion, carrots and black fungus", price: [{ v: "K280" }] },
      { name: "Beef Chili Vegetables", desc: "Sliced beef, Chinese cabbage, Pak choi, Bean sprout, Oyster Mushrooms, Chili", price: [{ v: "K245" }] },
      { name: "Fried Mushrooms", desc: "Beef/Chicken/Pork. Oyster mushrooms, Onions, Carrots", price: [{ v: "K220" }] },
      { name: "Crispy Chicken", desc: "", price: [{ v: "K235" }] },
      { name: "Sweet & Sour Chicken", desc: "", price: [{ v: "K220" }] },
      { name: "Fried Chicken with Cashew Nuts", desc: "Chicken Cubes, Celery, Cucumber, Carrots, Cashew nuts", price: [{ v: "K245" }] },
      { name: "Chicken Chili Vegetables", desc: "Sliced Chicken, Chinese cabbage, Pak choi, Bean sprout, Oyster Mushrooms, Chili", price: [{ v: "K235" }] },
      { name: "Chicken in Garlic Sauce", desc: "", price: [{ v: "K235" }] },
      { name: "Kung Pao Chicken", desc: "Chicken cubes, Celery, Carrots, Cucumber, and Peanuts", price: [{ v: "K255" }] },
      { name: "Chinese Steamed Buns", desc: "With Pork", price: [{ v: "K230" }] },
      { name: "Sweet & Sour Pork", desc: "Fried pork, drenched in a Sweet & Sour Sauce", price: [{ v: "K220" }] },
      { name: "Pineapple Sweet & Sour Pork", desc: "Fried pork, Bellpeppers, and Pineapple drenched in a Sweet & Sour Sauce", price: [{ v: "K230" }] },
      { name: "Pork in Garlic Sauce", desc: "", price: [{ v: "K235" }] },
      { name: "Crispy Duck", desc: "", price: [{ v: "K255" }] },
      { name: "Beijing Duck", desc: "Sliced pieces of roast duck, thin pancakes, savoury sauce with some julienned vegetables", price: [{ l: "Half", v: "K455" }, { l: "Full", v: "K905" }] },
      { name: "Smoked Duck", desc: "", price: [{ v: "K255" }] },
      { name: "Oyster Duck", desc: "Sliced Duck, Green Pepper, Onion, Black Fungus in Oyster Sauce", price: [{ v: "K255" }] },
      { name: "Mapo Tofu", desc: "Tofu Cubes cooked in a Sweet and Chili Sauce", price: [{ v: "K155" }] },
      { name: "Home Styled Fried Tofu", desc: "Tofu Slices, Green Pepper, Carrots, Onion, Black Fungus", price: [{ v: "K165" }] },
      { name: "Mixed Vegetables", desc: "Pakchoi, Chinese Cabbage, Lettuce, Oyster Mushroom, Black Fungus, Carrots, Onions, Green pepper", price: [{ v: "K145" }] },
      { name: "Pak Choi with Mushrooms", desc: "", price: [{ v: "K145" }] },
      { name: "Eggplant in Garlic Sauce", desc: "", price: [{ v: "K145" }] },
      { name: "Lettuce in Oyster Sauce", desc: "", price: [{ v: "K145" }] },
      { name: "Black Fungus with Onion", desc: "Black Fungus, Onion and Carrots", price: [{ v: "K145" }] }
    ]
  },
  {
    id: "fish-seafood",
    name: "Fish / Seafood",
    photo: "https://images.unsplash.com/photo-1569172131007-4954763443d2?w=1400&q=75&auto=format&fit=crop",
    items: [
      { name: "Grilled Fish Fillet", desc: "", price: [{ v: "K270" }] },
      { name: "Whole Deep Fried Fish", desc: "", price: [{ v: "K280" }] },
      { name: "Steamed Fish", desc: "Fresh Bream, Shredded onions, Ginger in Soya Sauce", price: [{ v: "K280" }] },
      { name: "Sweet & Sour Fish", desc: "Fresh Fried Bream, Tomatoes, Bellpeppers, Cucumber, and Pineapple", price: [{ v: "K280" }] },
      { name: "Chef's Garlic Fried Fish", desc: "Fresh Fried Bream, Topped with Garlic and Spring onions", price: [{ v: "K300" }] },
      { name: "Calamari", desc: "", price: [{ v: "K190" }] },
      { name: "Grilled Prawns Feast", desc: "12 Grilled Prawns, served with a side of Chips or a Salad", price: [{ v: "K390" }] },
      { name: "Sweet & Sour Prawns", desc: "Prawns, Tomatoes, Bellpeppers, Cucumber, and Pineapple", price: [{ v: "K390" }] },
      { name: "Powdered Baked Prawns", desc: "Prawns coated in a Mayonnaise and Sweet Chili sauce batter, topped with Julienne Potatoes", price: [{ v: "K390" }] },
      { name: "Pepper Salted Prawns", desc: "Deep Fried Prawns, with Onions, Green pepper, and Carrots", price: [{ v: "K405" }] },
      { name: "Crayfish with Chili Sauce", desc: "Fried Crayfish coated in a Chili Sauce", price: [{ v: "K370" }] },
      { name: "Baked Crayfish", desc: "With garlic sauce", price: [{ v: "K370" }] },
      { name: "Fried Crabs with Scallions & Ginger", desc: "", price: [{ v: "K470" }] },
      { name: "Garlic Crabs", desc: "Deep Fried Crabs topped with Garlic", price: [{ v: "K470" }] },
      { name: "Curry Crabs", desc: "", price: [{ v: "K470" }] },
      { name: "Crabs with Chinese Chili Sauce", desc: "", price: [{ v: "K470" }] },
      { name: "Steamed Oysters with Garlic", desc: "", price: [{ v: "K140" }] }
    ]
  },
  {
    id: "dumplings",
    name: "Dumplings",
    items: [
      { name: "Steamed Dumplings", desc: "Beef, Chicken, Pork, Vegetables", price: [{ v: "K135" }] },
      { name: "Pan Fried Dumplings", desc: "Beef, Chicken, Pork, Vegetables", price: [{ v: "K170" }] }
    ]
  },
  {
    id: "noodles",
    name: "Noodles",
    photo: "https://images.unsplash.com/photo-1622774981363-02f397073e45?w=1400&q=75&auto=format&fit=crop",
    items: [
      { name: "Fried Noodles", desc: "Beef, Chicken, Pork, Egg & Vegetables. Flour Noodles, Zambian Cabbage, and Carrots", price: [{ l: "Regular", v: "K130" }, { l: "Bigger portion", v: "K160" }] },
      { name: "Fried Rice Noodles", desc: "Beef, Chicken, Pork, Egg & Vegetables. Rice Noodles, Zambian Cabbage, and Carrots", price: [{ v: "K145" }] },
      { name: "Seafood Fried Noodles", desc: "Flour Noodles, Prawns, Calamari, Zambian Cabbage, and Carrots", price: [{ v: "K245" }] },
      { name: "Steamed Noodles", desc: "Beef, Chicken, Pork, Vegetables. Flour Noodles, Zambian Cabbage, Carrots, Sesame Oil, Soya Sauce, in a soup. Option to add Chili Oil", price: [{ v: "K150" }] },
      { name: "Steamed Seafood Noodles", desc: "Flour Noodles, Prawns, Calamari, Zambian Cabbage, Carrots, Sesame Oil, Soya Sauce, in a soup. Option to add Chili Oil", price: [{ v: "K245" }] }
    ]
  },
  {
    id: "rice",
    name: "Rice",
    photo: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=1400&q=75&auto=format&fit=crop",
    items: [
      { name: "Steamed Rice", desc: "", price: [{ l: "Regular", v: "K35" }, { l: "Large", v: "K70" }] },
      { name: "Fried Rice", desc: "Egg, Beef, Chicken, Pork, Vegetables", price: [{ l: "Regular", v: "K130" }, { l: "Large", v: "K170" }] },
      { name: "Yuang Zhou Fried Rice", desc: "Pork or Beef with Green peas, and Sweetcorn", price: [{ v: "K170" }] }
    ]
  },
  {
    id: "chinese-bbq",
    name: "Chinese BBQ",
    items: [
      { name: "Chicken Wings", desc: "", price: [{ v: "K35" }] },
      { name: "Prawns", desc: "", price: [{ v: "K35" }] }
    ]
  },
  {
    id: "burgers-wraps",
    name: "Burgers & Wraps",
    photo: "https://images.unsplash.com/photo-1749880183062-ffbf14738723?w=1400&q=75&auto=format&fit=crop",
    items: [
      { name: "Beef Cheeseburger", desc: "Served with a side of Chips/Salad. Beef Patty, Cheddar Cheese, Lettuce, Tomato, Pickles, with BBQ sauce", price: [{ v: "K165" }] },
      { name: "Far East Double Patty Burger", desc: "Served with a side of Chips/Salad", price: [{ v: "K215" }] },
      { name: "Chicken Fillet Burger", desc: "Served with a side of Chips/Salad. Chicken Fillet, Cheddar Cheese, Lettuce, tomato, Pickles, with a Mustard Mayo Sauce", price: [{ v: "K175" }] },
      { name: "Chicken Wrap", desc: "Grilled Chicken, Lettuce, Mixed Bellpeppers, Carrots, Tomato, with Mayonnaise in a Tortilla Wrap", price: [{ v: "K215" }] },
      { name: "Shawarma", desc: "Grilled Chicken, Potato Chips, Pickled cucumber, Lettuce, Garlic Sauce, Mustard Sauce and Sweet Chili Sauce all wrapped in a Pita Bread", price: [{ v: "K120" }] }
    ]
  },
  {
    id: "chicken-dishes",
    name: "Chicken Dishes",
    items: [
      { name: "Grilled Chicken Fillet", desc: "Served with a side of Chips/Steamed rice/Egg fried rice/Salad", price: [{ v: "K230" }] },
      { name: "Smoked Half Chicken", desc: "Served with a side of Chips/Steamed rice/Egg fried rice/Salad", price: [{ v: "K270" }] },
      { name: "Crispy Chicken Wings", desc: "Served with a side of Chips/Steamed rice/Egg fried rice/Salad", price: [{ v: "K255" }] },
      { name: "Jia Hua Chicken", desc: "Village Chicken with Spicy Soya Sauce", price: [{ v: "K360" }] }
    ]
  },
  {
    id: "meat-lovers",
    name: "For Meat Lovers",
    photo: "https://images.unsplash.com/photo-1542365887-1149961dccc7?w=1400&q=75&auto=format&fit=crop",
    items: [
      { name: "T-Bone Steak", desc: "Served with a side of Chips/Steamed rice/Egg fried rice/Salad. T-Bone with a choice of Mushroom, Black Pepper, BBQ or Chili Sauce", price: [{ l: "350g", v: "K250" }, { l: "500g", v: "K340" }] },
      { name: "Fillet Steak", desc: "Served with a side of Chips/Steamed rice/Egg fried rice/Salad. Fillet with a choice of Mushroom, Garlic Butter, Black Pepper or Chili Sauce", price: [{ l: "350g", v: "K255" }, { l: "500g", v: "K320" }] },
      { name: "Spicy Garlic Beef Ribs", desc: "400g", price: [{ v: "K280" }] },
      { name: "Full Rack of Ribs", desc: "700g", price: [{ v: "K360" }] },
      { name: "Lady Ribs", desc: "350g", price: [{ v: "K250" }] },
      { name: "Smoked Ribs", desc: "400g", price: [{ v: "K315" }] }
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    items: [
      { name: "Spaghetti Bolognaise", desc: "Spaghetti tossed in a Mince sauce, topped with parmesan cheese", price: [{ v: "K290" }] },
      { name: "Spicy Creamy Prawn Pasta", desc: "Fettuccine, Prawn, Fresh Cream, Parmesan cheese, Fresh Chili", price: [{ v: "K270" }] },
      { name: "Penny Alfredo", desc: "", price: [{ v: "K215" }] }
    ]
  },
  {
    id: "platters",
    name: "Platters",
    items: [
      { name: "Far Eastern Chinese BBQ Platter", desc: "5 Chicken Wings, 5 Beef, 5 Prawns, 5 Mutton, 5 Pork, and 5 Potatoes with a side of steamed rice or egg fried rice", price: [{ v: "K815" }] },
      { name: "The Big Bite Platter", desc: "Beef, Chicken, Pork, Egg & Vegetables. Flour Noodles, Zambian Cabbage, and Carrots", price: [{ v: "K705" }] },
      { name: "Seafood Platter", desc: "5 Prawns, 5 Crayfish, 5 Calamari, Fish Fillet, served with a side of chips or a salad, tartare sauce or garlic butter sauce", price: [{ v: "K495" }] },
      { name: "Chinese Seafood Platter", desc: "Crabs, Crayfish, Prawns, Prawn Meat Balls, Fish Balls, Chinese Sausage, Vegetables", price: [{ v: "K480" }] },
      { name: "Vegetable Platter", desc: "", price: [{ v: "K215" }] }
    ]
  },
  {
    id: "cocktails",
    name: "Cocktails",
    photo: "https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?w=1400&q=75&auto=format&fit=crop",
    items: [
      { name: "Long Island Iced Tea", desc: "Lemon Juice, Vodka, Rum, Gin, Triple Sec, Tequila, Coke", price: [{ v: "K180" }] },
      { name: "Margarita", desc: "Lemon Juice, Triple Sec, Tequila", price: [{ v: "K115" }] },
      { name: "Cosmopolitan", desc: "Berry Juice, Vodka", price: [{ v: "K110" }] },
      { name: "Berry Mint Crush", desc: "Lemon, Mint, Berry Juice, Vodka, Lemonade", price: [{ v: "K115" }] },
      { name: "Daiquiri", desc: "Strawberry, Kiwi, Mango, Berry, or Tropical", price: [{ v: "K175" }] },
      { name: "M/Shandy", desc: "Ginger Ale, Lemonade, Bitters", price: [{ v: "K90" }] },
      { name: "Martini", desc: "Vodka, Apple Sour, Apple Juice", price: [{ v: "K110" }] },
      { name: "Kiwi-tini", desc: "Vodka, Lemonade, Kiwi syrup, Lime", price: [{ v: "K140" }] },
      { name: "Mojito", desc: "Lemon, Mint, Mint Syrup, Rum, Soda Water", price: [{ v: "K140" }] },
      { name: "Corona Cocktail", desc: "Corona, Tequila, Lime, Mint, Fresh Lemon", price: [{ v: "K150" }] },
      { name: "Berry Mojito", desc: "Rum, Lime, Soda Water, Berry Syrup, Mint Syrup", price: [{ v: "K130" }] },
      { name: "Pina Colada", desc: "Rum, Pineapple juice, Pina Colada syrup", price: [{ v: "K150" }] },
      { name: "Blue Lagoon", desc: "Vodka, Peach schnapps, Blue Curacao, Lemonade", price: [{ v: "K130" }] },
      { name: "Sex on the Beach", desc: "Berry Juice, Peach Liqueur, Vodka, Orange Juice", price: [{ v: "K150" }] },
      { name: "Screaming Orgasm", desc: "Amarula, Vodka, coffee liqueur, Cream", price: [{ v: "K130" }] },
      { name: "Kiwi Sunrise", desc: "Tequila, Peach Liqueur, Kiwi Puree, Apple Juice, Cranberry Juice", price: [{ v: "K130" }] },
      { name: "Eastern Paradise", desc: "Vodka, Granadine, Pineapple Juice, Blue Curacao", price: [{ v: "K115" }] }
    ]
  },
  {
    id: "beers",
    name: "Beers",
    items: [
      { name: "Budweiser", desc: "", price: [{ v: "K50" }] },
      { name: "Corona", desc: "", price: [{ v: "K70" }] },
      { name: "Castle Lager", desc: "", price: [{ v: "K30" }] },
      { name: "Castle Lite", desc: "", price: [{ v: "K35" }] },
      { name: "Mosi", desc: "", price: [{ v: "K30" }] },
      { name: "Heineken", desc: "", price: [{ v: "K50" }] },
      { name: "Windhoek Lager", desc: "", price: [{ v: "K50" }] },
      { name: "Windhoek Draft", desc: "", price: [{ v: "K50" }] },
      { name: "Amstel Lager", desc: "", price: [{ v: "K50" }] },
      { name: "Amstel Lite", desc: "", price: [{ v: "K50" }] },
      { name: "Stella Artois", desc: "", price: [{ v: "K45" }] },
      { name: "Flying Fish", desc: "", price: [{ v: "K45" }] },
      { name: "Black Label", desc: "", price: [{ v: "K35" }] }
    ]
  },
  {
    id: "whiskey",
    name: "Whiskey",
    items: [
      { name: "Jameson", desc: "", price: [{ l: "Tot", v: "K60" }, { l: "Bottle", v: "K920" }] },
      { name: "Jameson Caskmate", desc: "", price: [{ l: "Tot", v: "K70" }, { l: "Bottle", v: "K1100" }] },
      { name: "Jameson Black Barrel", desc: "", price: [{ l: "Tot", v: "K80" }, { l: "Bottle", v: "K1610" }] },
      { name: "Jameson IPA", desc: "", price: [{ l: "Tot", v: "K80" }, { l: "Bottle", v: "K1035" }] },
      { name: "Bell's", desc: "", price: [{ l: "Tot", v: "K55" }, { l: "Bottle", v: "K920" }] },
      { name: "Grants", desc: "", price: [{ l: "Tot", v: "K55" }, { l: "Bottle", v: "K690" }] },
      { name: "J&B", desc: "", price: [{ l: "Tot", v: "K55" }, { l: "Bottle", v: "K970" }] },
      { name: "Jack Daniels", desc: "", price: [{ v: "K60" }] },
      { name: "Tullamore Dew", desc: "", price: [{ l: "Tot", v: "K80" }, { l: "Bottle", v: "K1270" }] },
      { name: "Ballantine's", desc: "", price: [{ v: "K55" }] },
      { name: "Famous Grouse", desc: "", price: [{ v: "K50" }] },
      { name: "Whiskey Corkage", desc: "Per bottle", price: [{ v: "K300" }] },
      { name: "Chinese Whiskey", desc: "", price: [{ l: "Tot", v: "K1200" }, { l: "Bottle", v: "K2000" }] },
      { name: "Glenfiddich 12", desc: "", price: [{ l: "Tot", v: "K115" }, { l: "Bottle", v: "K2250" }] },
      { name: "Glenfiddich 15", desc: "", price: [{ l: "Tot", v: "K195" }, { l: "Bottle", v: "K3450" }] },
      { name: "Glenfiddich 18", desc: "", price: [{ l: "Tot", v: "K240" }, { l: "Bottle", v: "K4600" }] },
      { name: "Glenlivet", desc: "", price: [{ l: "Tot", v: "K115" }, { l: "Bottle", v: "K2250" }] },
      { name: "Chivas 12", desc: "", price: [{ l: "Tot", v: "K70" }, { l: "Bottle", v: "K2300" }] },
      { name: "Johnny Walker Black Label", desc: "", price: [{ v: "K50" }] },
      { name: "Johnny Walker Red", desc: "", price: [{ v: "K35" }] },
      { name: "Johnny Walker Double Black", desc: "", price: [{ v: "K80" }] },
      { name: "Johnny Walker Gold", desc: "", price: [{ v: "K100" }] }
    ]
  },
  {
    id: "cognac",
    name: "Cognac",
    items: [
      { name: "Hennessy", desc: "", price: [{ l: "Tot", v: "K190" }, { l: "Bottle", v: "K4300" }] },
      { name: "Hennessy VSOP", desc: "", price: [{ l: "Tot", v: "K230" }, { l: "Bottle", v: "K4600" }] }
    ]
  },
  {
    id: "gin",
    name: "Gin",
    items: [
      { name: "Gordon's", desc: "", price: [{ l: "Tot", v: "K45" }, { l: "Bottle", v: "K810" }] },
      { name: "Strettons", desc: "", price: [{ l: "Tot", v: "K50" }, { l: "Bottle", v: "K810" }] },
      { name: "Tanqueray", desc: "", price: [{ l: "Tot", v: "K85" }, { l: "Bottle", v: "K1500" }] },
      { name: "Beefeater", desc: "", price: [{ v: "K60" }] },
      { name: "Bombay", desc: "", price: [{ l: "Tot", v: "K60" }, { l: "Bottle", v: "K1300" }] }
    ]
  },
  {
    id: "brandy",
    name: "Brandy",
    items: [
      { name: "Klipdrift", desc: "", price: [{ l: "Tot", v: "K60" }, { l: "Bottle", v: "K1400" }] },
      { name: "KWV 3", desc: "", price: [{ l: "Tot", v: "K50" }, { l: "Bottle", v: "K1200" }] },
      { name: "KWV 5", desc: "", price: [{ l: "Tot", v: "K65" }, { l: "Bottle", v: "K1400" }] },
      { name: "KWV 10", desc: "", price: [{ l: "Tot", v: "K70" }, { l: "Bottle", v: "K1550" }] }
    ]
  },
  {
    id: "ciders",
    name: "Ciders",
    items: [
      { name: "Savanna", desc: "", price: [{ v: "K50" }] },
      { name: "Hunters Dry", desc: "", price: [{ v: "K50" }] },
      { name: "Hunters Gold", desc: "", price: [{ v: "K50" }] },
      { name: "1430", desc: "", price: [{ v: "K50" }] },
      { name: "Breezer", desc: "", price: [{ v: "K50" }] }
    ]
  },
  {
    id: "vodka",
    name: "Vodka",
    items: [
      { name: "Absolut Vodka", desc: "", price: [{ l: "Tot", v: "K65" }, { l: "Bottle", v: "K1300" }] },
      { name: "Belvedere", desc: "Citrus/Pink Grapefruit", price: [{ v: "K950" }] }
    ]
  },
  {
    id: "rum",
    name: "Rum",
    items: [
      { name: "Captain Morgan", desc: "", price: [{ v: "K55" }] },
      { name: "Malibu", desc: "", price: [{ v: "K55" }] },
      { name: "Bacardi", desc: "", price: [{ v: "K45" }] }
    ]
  },
  {
    id: "liqueur",
    name: "Liqueur",
    items: [
      { name: "Southern Comfort", desc: "", price: [{ l: "Tot", v: "K75" }, { l: "Bottle", v: "K710" }] },
      { name: "Amarula", desc: "", price: [{ l: "Tot", v: "K50" }, { l: "Bottle", v: "K800" }] },
      { name: "Strawberry Lips", desc: "", price: [{ v: "K55" }] },
      { name: "Jagermister", desc: "", price: [{ l: "Tot", v: "K65" }, { l: "Bottle", v: "K920" }] }
    ]
  },
  {
    id: "shooters",
    name: "Shooters",
    items: [
      { name: "Snake Bite", desc: "", price: [{ v: "K40" }] },
      { name: "Tequila", desc: "", price: [{ v: "K40" }] },
      { name: "Absolut Vodka", desc: "", price: [{ v: "K45" }] },
      { name: "Sminorf Vodka", desc: "", price: [{ v: "K35" }] },
      { name: "B52", desc: "", price: [{ v: "K45" }] },
      { name: "Jagermister", desc: "", price: [{ l: "Tot", v: "K65" }, { l: "Bottle", v: "K920" }] },
      { name: "Jagerbomb", desc: "", price: [{ v: "K90" }] },
      { name: "Blow Job", desc: "", price: [{ v: "K90" }] }
    ]
  },
  {
    id: "shisha",
    name: "Shisha",
    items: [
      { name: "Shisha", desc: "Mint, Orange Mint, Double Apple, or Blueberry", price: [{ v: "K120" }] },
      { name: "Extra Coal", desc: "", price: [{ v: "K10" }] },
      { name: "Flavour Change", desc: "", price: [{ v: "K25" }] },
      { name: "Disposable Vape", desc: "", price: [{ v: "K300" }] }
    ]
  },
  {
    id: "wine-red",
    name: "Red Wine",
    items: [
      { name: "Drostdy Hof", desc: "", price: [{ l: "Glass", v: "K65" }, { l: "Bottle", v: "K350" }] },
      { name: "Four Cousins", desc: "", price: [{ l: "Glass", v: "K65" }, { l: "Bottle", v: "K350" }] },
      { name: "Robertson Natural Sweet", desc: "", price: [{ l: "Bottle", v: "K400" }] },
      { name: "Cronier Merlot", desc: "", price: [{ l: "Bottle", v: "K600" }] },
      { name: "Nederburg", desc: "", price: [{ l: "Bottle", v: "K480" }] },
      { name: "KWV", desc: "", price: [{ l: "Bottle", v: "K500" }] },
      { name: "Celle Cask", desc: "", price: [{ l: "Bottle", v: "K350" }] },
      { name: "Rupert & Rothschild", desc: "", price: [{ l: "Bottle", v: "K950" }] },
      { name: "Woolworths", desc: "", price: [{ v: "K580" }] },
      { name: "Fat Bastard", desc: "", price: [{ l: "Bottle", v: "K950" }] }
    ]
  },
  {
    id: "wine-white",
    name: "White Wine",
    items: [
      { name: "Nedeberg Sav Blanc", desc: "", price: [{ l: "Bottle", v: "K580" }] },
      { name: "Sunkissed Sweet", desc: "", price: [{ l: "Bottle", v: "K550" }] },
      { name: "Croinier Sweet", desc: "", price: [{ l: "Bottle", v: "K450" }] },
      { name: "Chinese Herbal Wine", desc: "", price: [{ l: "Bottle", v: "K100" }] },
      { name: "Chinese Rice Wine", desc: "", price: [{ l: "Bottle", v: "K200" }] }
    ]
  },
  {
    id: "wine-rose",
    name: "Rose & Sparkling",
    items: [
      { name: "Cronier", desc: "", price: [{ l: "Bottle", v: "K600" }] },
      { name: "Nederburg Rose", desc: "", price: [{ l: "Bottle", v: "K400" }] },
      { name: "JC Le Roux Chanson", desc: "Sparkling Wine/Champagne", price: [{ l: "Bottle", v: "K400" }] }
    ]
  },
  {
    id: "soft-drinks",
    name: "Soft Drinks",
    items: [
      { name: "Water", desc: "", price: [{ v: "K15" }] },
      { name: "Coke", desc: "", price: [{ v: "K20" }] },
      { name: "Coke Zero", desc: "", price: [{ v: "K20" }] },
      { name: "Fanta", desc: "", price: [{ v: "K20" }] },
      { name: "Sprite", desc: "", price: [{ v: "K20" }] },
      { name: "Lemonade", desc: "", price: [{ v: "K35" }] },
      { name: "Ginger Ale", desc: "", price: [{ v: "K35" }] },
      { name: "Rhodes Juice", desc: "Orange, Mango, Cranberry, Apple Cranberry, Pineapple", price: [{ v: "K40" }] },
      { name: "Fruitree", desc: "", price: [{ v: "K40" }] },
      { name: "Chinese Ice Tea", desc: "", price: [{ v: "K60" }] },
      { name: "Chinese Milk", desc: "", price: [{ v: "K50" }] },
      { name: "Peach Ice Tea", desc: "", price: [{ v: "K40" }] },
      { name: "Chinese Green Tea", desc: "", price: [{ v: "K60" }] },
      { name: "Coconut Milk", desc: "", price: [{ v: "K70" }] },
      { name: "Red Bull", desc: "", price: [{ v: "K70" }] },
      { name: "Chinese Red Bull", desc: "", price: [{ v: "K90" }] },
      { name: "Chinese Energy Drink", desc: "", price: [{ v: "K90" }] },
      { name: "Tonic Water", desc: "", price: [{ v: "K35" }] },
      { name: "Soda Water", desc: "", price: [{ v: "K35" }] },
      { name: "Pink Tonic", desc: "", price: [{ v: "K35" }] },
      { name: "Milkshake", desc: "Vanilla, Chocolate, Bar One, Strawberry, Banana, or Bubble Gum", price: [{ v: "K85" }] }
    ]
  }
];

// Flattened index for search: one entry per item with its category context.
const MENU_INDEX = MENU.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    catId: cat.id,
    catName: cat.name,
    searchText: (cat.name + " " + item.name + " " + item.desc).toLowerCase()
  }))
);
