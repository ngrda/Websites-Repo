(function(){

  var DATA = {
    "brand": {
      "name": "Pagoda",
      "fullName": "Pagoda Restaurant",
      "tagline": "Chinese Kitchen · North Pole, Alaska",
      "heroHeadline": "Best Chinese food in North Pole, Alaska",
      "heroSub": "Scratch-made Chinese-American cooking on Santa Claus Lane, serving North Pole and the greater Fairbanks area — order ahead, eat in, or get it delivered on DoorDash.",
     "award": "2025 WINNER ◆ READERS’ CHOICE AWARDS ◆ BEST CHINESE FOOD"
    },
    "contact": {
      "address1": "431 North Santa Claus Lane",
      "address2": "North Pole, AK 99705",
      "phone": "907-488-3338",
      "phoneDisplay": "(907) 488-3338",
      "email": "info@pagodanorthpole.com",
      "mapsQuery": "431 North Santa Claus Lane, North Pole, AK 99705",
      "doorDashUrl": "https://www.doordash.com/store/pagoda-restaurant-santa-claus-lane-north-pole-34344315/71358350/",
      "instagramUrl": "https://www.instagram.com/pagodanorthpole/",
      "tripadvisorUrl": "https://www.tripadvisor.com/Restaurant_Review-g31079-d330863-Reviews-Pagoda_Restaurant-North_Pole_Alaska.html",
      "tripadvisorRating": "4.4",
      "tripadvisorCount": "390+"
    },
    "hours": [
      { "days": "Monday", "time": "Closed" },
      { "days": "Tuesday – Sunday", "time": "11:30 am – 9:30 pm" }
    ],
    "highlights": [
      "Winner — 2025 Readers’ Choice Awards, Best Chinese Food",
      "Full lunch menu served daily",
      "Take-out all day, every day we’re open",
      "Delivery available through DoorDash"
    ],
    "about": {
      "eyebrow": "For the love of cooking",
      "paragraphs": [
        "Nestled in the heart of North Pole, Alaska — the charming hometown of Santa Claus — Pagoda Restaurant brings the flavors of authentic Chinese cuisine to this unique northern locale. Led by the talented and visionary Chef Benny Lin, Pagoda has been a local favorite since it first opened its doors on March 6, 1990.",
        "Chef Lin's menu artfully blends classic Chinese dishes with innovative new creations, offering a culinary experience that is both familiar and exciting. Over the years, Pagoda has built a reputation for excellence and creativity, consistently delighting guests with fresh, high-quality offerings.",
        "Pagoda's dedication to exceptional food has earned it recognition beyond the North Pole, with multiple features on the Food Network, including appearances on \"Diners, Drive-ins and Dives\" and \"Guy's Grocery Games\"."
      ]
    },
    "reviews": [
      { "quote": "Big, generous portions and fair prices, with service that stays quick even on busy weekend nights. The Mongolian beef is a favorite, and delivery orders still arrive piping hot.", "name": "Tripadvisor reviewer" },
      { "quote": "A longtime local favorite for the sizzling rice soup and other specialties — diners say it's some of the best Chinese food they've had anywhere in Alaska.", "name": "Tripadvisor reviewer" },
      { "quote": "Guests praise the attentive, well-run service — drinks kept full, dishes cleared quickly — and call it one of their top picks in the North Pole / Fairbanks area.", "name": "Tripadvisor reviewer" }
    ],
    "menu": [
      {
        "category": "New Appetizers",
        "items": [
          { "name": "Butter Garlic Shrimp", "desc": "Delicious shrimp tossed in a savory garlic-butter sauce. A must try!", "price": "$28.95" },
          { "name": "Bang Bang Shrimp *", "desc": "A new spicy twist to our Signature Walnut Shrimp!", "price": "$29.95" },
          { "name": "Shrimp Trifecta *", "desc": "Includes 3 signature shrimp appetizers: Walnut, Raspberry Wasabi and Bang Bang Shrimp.", "price": "$29.95" },
          { "name": "Raspberry Wasabi Shrimp *", "desc": "Tantalizing raspberry sauce with a zing!", "price": "$24.95" },
          { "name": "Salt & Peppered Squid *", "desc": "Crispy seared squid seasoned with salt and pepper.", "price": "$24.95" },
          { "name": "General Tso Cauliflower *", "desc": "Crispy cauliflower tossed in spicy General Tso sauce.", "price": "$22.95" },
          { "name": "Seared Ahi Tuna +", "desc": "Freshly seared Ahi Tuna.", "price": "$25.95" }
        ]
      },
      {
        "category": "Appetizers",
        "items": [
          { "name": "Beef Eggroll", "desc": "Crispy fried eggroll packed with seasoned beef.", "price": "$3.25" },
          { "name": "Fried Shrimp (6 pc)", "desc": "Crispy deep-fried jumbo shrimp.", "price": "$17.95" },
          { "name": "Fried Wonton (Crispy Chips) (10 pc)", "desc": "Crispy fried wonton chips served with sweet and sour sauce.", "price": "$14.95" },
          { "name": "Edamame", "desc": "Steamed soybeans seasoned with sea salt.", "price": "$12.95" },
          { "name": "Barbecued Pork", "desc": "Sweet roasted Chinese pork sliced thin and seasoned.", "price": "$19.95" },
          { "name": "Pork Potsticker (8 pc)", "desc": "Pan-fried pork and vegetable dumplings.", "price": "$18.95" },
          { "name": "Pu-Pu Platter (Serving size for 2 people)", "desc": "Fried shrimp, egg roll, teriyaki beef, barbecued pork and paper wrapped chicken.", "price": "$22.95" },
          { "name": "Fried Squid Rings", "desc": "Crispy golden squid rings.", "price": "$19.95" },
          { "name": "Teriyaki Beef Skewers (4 pc)", "desc": "Grilled beef skewers glazed in teriyaki sauce.", "price": "$18.95" },
          { "name": "Paper Wrapped Chicken", "desc": "Marinated chicken wrapped in paper to seal in juices.", "price": "$17.95" },
          { "name": "Fried Chicken Wings (10 pc)", "desc": "Crispy deep-fried chicken wings.", "price": "$19.95" },
          { "name": "Crab Rangoon (12 pc)", "desc": "Crispy wonton pockets stuffed with rich cream cheese and crab meat filling.", "price": "$19.95" },
          { "name": "Chicken Lettuce Wrap", "desc": "Minced chicken tossed with house veggies, served with crisp lettuce cups.", "price": "$22.95" },
          { "name": "Walnut Shrimp", "desc": "Crispy glazed prawns tossed in sweet sauce topped with candied walnuts.", "price": "$24.95" }
        ]
      },
      {
        "category": "Soups",
        "items": [
          { "name": "Egg Drop Soup", "desc": "Classic soothing egg drop broth.", "price": "Small $4.00 · Large $14.95" },
          { "name": "Wonton Soup", "desc": "Savory pork wontons in chicken broth with green onions.", "price": "Small $4.00 · Large $14.95" },
          { "name": "Hot & Sour Soup *", "desc": "Spicy & tangy soup with wood ear mushrooms and tofu.", "price": "Small $4.00 · Large $14.95" },
          { "name": "Bean Curd & Vegetable Soup", "desc": "Fresh tofu and house vegetables in clear broth.", "price": "$15.95" },
          { "name": "House Soup w/ Sizzling Rice", "desc": "Shrimp, beef, chicken and vegetables in a light, warm broth topped with dancing, crispy rice!", "price": "$17.95" },
          { "name": "Three Delicacies Soup", "desc": "Shrimp, chicken, scallops and fresh veggies in house broth.", "price": "$18.95" }
        ]
      },
      {
        "category": "Seafood",
        "items": [
          { "name": "Szechuan Shrimp *", "desc": "Fresh shrimp seared and quickly sautéed w/ bell peppers, carrots, cabbages in Northern Szechuan sauce.", "price": "$26.95" },
          { "name": "Shrimp w/ Lobster Sauce", "desc": "Tender shrimp stir-fried in rich lobster sauce with green peas, carrots and whipped eggs.", "price": "$26.95" },
          { "name": "Shrimp w/ Cashew Nut", "desc": "Shrimp, water chestnuts and veggies topped w/ cashew nuts.", "price": "$25.95" },
          { "name": "Shrimp w/ Fresh Peas", "desc": "Shrimp toss fried in light sauce w/ an abundance of fresh snap peas, carrots and onions.", "price": "$26.95" },
          { "name": "Shrimp w/ Garlic Sauce *", "desc": "Shrimp marinated w/ black tree mushrooms and seasoned to perfection.", "price": "$26.95" },
          { "name": "Kung Pao Shrimp *", "desc": "Shrimp cooked w/ Szechuan spices, crisp peanuts and hot chili peppers.", "price": "$25.95" },
          { "name": "Curry Shrimp *", "desc": "Shrimp marinated w/ fresh green peppers, carrots and green onions in a mild yellow curry.", "price": "$26.95" },
          { "name": "Shrimp w/ Sizzling Rice", "desc": "Shrimp cooked in a tomato-based sauce and topped with crispy rice.", "price": "$26.95" },
          { "name": "Shrimp w/ Mixed Vegetables", "desc": "Shrimp seasoned and tossed in light sauce with assorted veggies.", "price": "$26.95" },
          { "name": "Shrimp w/ Broccoli", "desc": "Fresh jumbo shrimp sautéed w/ fresh broccoli, mushrooms, carrots and baby corn.", "price": "$26.95" },
          { "name": "Shrimp w/ Mushrooms", "desc": "Jumbo shrimp sautéed with greens and fresh white mushrooms.", "price": "$27.95" },
          { "name": "Salt & Peppered Shrimp *", "desc": "Soft shelled shrimp toss cooked in salt & pepper seasoning, topped w/ jalapeños.", "price": "$28.95" },
          { "name": "Kung Pao Squid *", "desc": "Fresh squid stir-fried with Szechuan spices, dried chili peppers, veggies & peanuts.", "price": "$26.95" },
          { "name": "Sea Scallops w/ Garlic Sauce *", "desc": "Fresh sea scallops cooked w/ black tree mushrooms and house veggies.", "price": "$29.95" },
          { "name": "Sea Scallops w/ Oyster Sauce", "desc": "Fresh sea scallops marinated w/ house veggies in tasty oyster sauce.", "price": "$29.95" }
        ]
      },
      {
        "category": "Beef",
        "items": [
          { "name": "Mongolian Beef", "desc": "Thin slices of tenderloin in our signature sweet and spicy Mongolian sauce.", "price": "$26.95" },
          { "name": "Beef w/ Fresh Peas", "desc": "Slices of beef sautéed with snap peas, onions, carrots and bell peppers.", "price": "$24.95" },
          { "name": "Beef w/ Green Pepper", "desc": "Slices of beef sautéed with green pepper in a savory chef sauce.", "price": "$24.95" },
          { "name": "Beef w/ Garlic Sauce *", "desc": "Thinly sliced beef, toss cooked w/ black tree mushrooms & onions in tangy garlic sauce.", "price": "$24.95" },
          { "name": "Hunan Hot Beef *", "desc": "Tender sliced beef cooked in a delicious, dark and spicy sauce.", "price": "$24.95" },
          { "name": "Beef w/ Sizzling Rice", "desc": "Tender sliced beef cooked in a tomato-based sauce and topped with crispy rice.", "price": "$24.95" },
          { "name": "Kung Pao Beef *", "desc": "Tender sliced beef cooked w/ Szechuan spices, crisp peanuts and hot chili peppers.", "price": "$24.95" },
          { "name": "Beef w/ Broccoli", "desc": "Sliced beef tenderloin sautéed w/ fresh broccoli and assorted veggies.", "price": "$24.95" }
        ]
      },
      {
        "category": "Pork",
        "items": [
          { "name": "Kung Pao Pork *", "desc": "Sliced pork cooked w/ Szechuan spices, crisp peanuts and hot chili peppers.", "price": "$22.95" },
          { "name": "Pork w/ Broccoli", "desc": "Sliced pork sautéed with broccoli and assorted veggies.", "price": "$22.95" },
          { "name": "Pork w/ Garlic Sauce *", "desc": "Sliced pork cooked in a tangy garlic sauce with black tree mushrooms.", "price": "$22.95" },
          { "name": "Pork w/ Green Pepper", "desc": "Slices of pork sautéed with green pepper in a savory chef sauce.", "price": "$22.95" },
          { "name": "Twice Cooked Pork *", "desc": "Sliced pork marinated with Chinese cabbage in a spicy savory sauce.", "price": "$22.95" },
          { "name": "Pork w/ Fresh Peas", "desc": "Slices of pork sautéed with snap peas, onions, carrots, bell peppers.", "price": "$22.95" },
          { "name": "Pork w/ Chinese Vegetables", "desc": "Sliced pork blended w/ veggies in a savory dark sauce.", "price": "$22.95" }
        ]
      },
      {
        "category": "Poultry",
        "items": [
          { "name": "General Tso Chicken *", "desc": "Breaded chicken sautéed in spicy brown sauce w/ broccoli, carrots, and mushrooms.", "price": "$24.95" },
          { "name": "Szechuan Chicken *", "desc": "Chicken seared and quickly sautéed w/ house veggies in Northern Szechuan sauce.", "price": "$24.95" },
          { "name": "Moo Goo Gai Pan", "desc": "Tender chicken cooked w/ mushrooms, carrots, bamboo shoots & snow peas.", "price": "$23.95" },
          { "name": "Almond Chicken", "desc": "Sautéed chicken, water chestnuts and veggies topped with almonds.", "price": "$22.95" },
          { "name": "Kung Pao Chicken *", "desc": "Chicken stir fried w/ Szechuan spices and dry chili peppers, topped with peanuts.", "price": "$22.95" },
          { "name": "Breaded Almond Chicken", "desc": "Breaded fried chicken cubes, topped w/ house sauce and almonds.", "price": "$22.95" },
          { "name": "Chicken w/ Cashew Nut", "desc": "Chicken, water chestnuts and veggies topped w/ cashew nuts.", "price": "$22.95" },
          { "name": "Chicken w/ Chinese Vegetables", "desc": "Chicken blended w/ house garden veggies in a savory dark sauce.", "price": "$23.95" },
          { "name": "Basil Chicken", "desc": "Tender chicken sautéed w/ Thai basil and house veggies.", "price": "$25.95" },
          { "name": "Chicken w/ Broccoli", "desc": "Chicken sautéed w/ fresh broccoli, mushrooms, carrots and baby corn.", "price": "$23.95" },
          { "name": "Chicken w/ Fresh Peas", "desc": "Chicken tossed in light sauce w/ fresh snap peas, carrots and onions.", "price": "$23.95" },
          { "name": "Chicken w/ Garlic Sauce *", "desc": "Tender chicken cooked w/ black tree mushrooms and house veggies.", "price": "$23.95" },
          { "name": "Curry Chicken *", "desc": "Chicken marinated w/ green peppers, carrots, and green onions in mild curry.", "price": "$24.95" },
          { "name": "Lemon Chicken", "desc": "Battered cubes of chicken breast coated with our delightful lemon sauce.", "price": "$24.95" },
          { "name": "Sesame Chicken *", "desc": "Battered chicken cooked in light sweet & spicy sauce, topped w/ sesame seeds.", "price": "$24.95" },
          { "name": "Mongolian Chicken", "desc": "Tender sliced chicken in our signature sweet & spicy Mongolian sauce.", "price": "$25.95" },
          { "name": "Chicken w/ Cabbage *", "desc": "Chicken sautéed w/ cabbage, carrots, bamboo shoots and snap peas.", "price": "$25.95" }
        ]
      },
      {
        "category": "Sweet & Sour",
        "items": [
          { "name": "Sweet & Sour Chicken", "desc": "Battered deep fried chicken breast tossed in sweet and sour sauce.", "price": "$21.95" },
          { "name": "Sweet & Sour Pork", "desc": "Battered deep fried pork tenderloin tossed in sweet and sour sauce.", "price": "$21.95" },
          { "name": "Sweet & Sour Shrimp", "desc": "Battered deep fried jumbo prawns tossed in sweet and sour sauce.", "price": "$22.95" }
        ]
      },
      {
        "category": "Vegetarian",
        "items": [
          { "name": "Deluxe Vegetables", "desc": "Assorted fresh stir-fried garden vegetables.", "price": "$19.95" },
          { "name": "Mushroom w/ Broccoli", "desc": "Sautéed white mushrooms and fresh broccoli.", "price": "$20.95" },
          { "name": "Broccoli w/ Garlic Sauce *", "desc": "Fresh broccoli cooked with black tree mushrooms in garlic sauce.", "price": "$19.95" },
          { "name": "Kung Pao Tofu *", "desc": "Tofu toss fried w/ Szechuan spices and dry chili peppers, topped w/ peanuts.", "price": "$20.95" },
          { "name": "Mushroom w/ Tofu", "desc": "Braised tofu with fresh mushrooms and greens.", "price": "$19.95" },
          { "name": "Eggplant w/ Garlic Sauce *", "desc": "Tender eggplant sautéed w/ garlic sauce.", "price": "$20.95" },
          { "name": "Assorted Vegetables w/ Garlic Sauce *", "desc": "Mixed fresh garden vegetables in garlic sauce.", "price": "$19.95" },
          { "name": "Baby Corn w/ Broccoli", "desc": "Sautéed baby corn and broccoli in light sauce.", "price": "$19.95" }
        ]
      },
      {
        "category": "Pagoda Chef Specialties",
        "items": [
          { "name": "Happy Family", "desc": "Combo of shrimp, scallops, beef, chicken, pork & veggies in Peking sauce.", "price": "$29.95" },
          { "name": "Three Ingredients", "desc": "Combo of shrimp, scallops and chicken w/ veggies in Peking Sauce.", "price": "$27.95" },
          { "name": "Shanghai Velvet Shrimp", "desc": "Jumbo shrimp sautéed w/ broccoli, peppers, onions in black bean sauce.", "price": "$26.95" },
          { "name": "Szechuan Beef *", "desc": "Slices of beef seared w/ green peppers, carrots and cabbage in Szechuan sauce.", "price": "$25.95" },
          { "name": "Chicken w/ Mushrooms", "desc": "Fresh chicken breast tossed and cooked w/ white mushrooms.", "price": "$24.95" },
          { "name": "Triple Crown", "desc": "Combo of shrimp, pork and chicken sautéed w/ mixed veggies.", "price": "$26.95" },
          { "name": "Eggplant w/ Chicken in Garlic Sauce *", "desc": "Eggplant and chicken sautéed w/ water chestnuts in garlic sauce.", "price": "$26.95" },
          { "name": "Pagoda Roasted Duck", "desc": "Timely roasted w/ five spice, garlic powder and homemade seasonings.", "price": "Half $29.00 · Whole $56.00" },
          { "name": "Seafood Combo w/ Garlic Sauce *", "desc": "Scallops, shrimp and squid sautéed w/ veggies in garlic sauce.", "price": "$29.95" },
          { "name": "Seafood Combo", "desc": "Combo of scallops, shrimp and squid sautéed with Thai basil.", "price": "$29.95" },
          { "name": "Mussels in Black Bean Sauce", "desc": "Fresh mussels sautéed w/ broccoli, ginger in rich black bean sauce.", "price": "$26.95" },
          { "name": "Shrimp & Chicken Peking Style", "desc": "Chicken and shrimp sautéed w/ peppers, celery, bamboo in plum sauce.", "price": "$26.95" },
          { "name": "Pagoda Steak +", "desc": "Prime cuts of ribeye steak seared medium rare w/ veggies & black pepper.", "price": "$43.95" },
          { "name": "Salt & Peppered Pork Chops *", "desc": "Crispy sliced pork chops, scallions, jalapeños, salt & pepper seasoning.", "price": "$25.95" },
          { "name": "House Broccoli", "desc": "Combo of shrimp, chicken and beef w/ veggies sautéed in house sauce.", "price": "$27.95" }
        ]
      },
      {
        "category": "Specials Entrees",
        "items": [
          { "name": "Asparagus Seafood", "desc": "Shrimp, scallops, squid, asparagus, snow peas in coconut milk & white wine sauce.", "price": "$32.95" },
          { "name": "Asparagus Shrimp & Chinese Sausage", "desc": "Shrimp, scallops, squid, asparagus & sausage in coconut white wine sauce.", "price": "$30.95" },
          { "name": "Asparagus Chicken", "desc": "Chicken, asparagus, snow peas, carrots in coconut milk & white wine sauce.", "price": "$28.95" },
          { "name": "Beef & Tomato *", "desc": "Tender pieces of beef with tomato, snow peas, mushrooms & bamboo.", "price": "$25.95" },
          { "name": "Ideal Chicken w/ Ginger Sauce", "desc": "Steamed chicken & low carb veggies served with ginger sauce on the side.", "price": "$25.95" },
          { "name": "Jalapeno Scrambled Eggs *", "desc": "Scrambled eggs like you've never had before! Choice of Shrimp or Chicken.", "price": "$26.95" },
          { "name": "Orange Chicken *", "desc": "A new flavor to our classic breaded chicken dishes, with a spicy kick!", "price": "$25.95" },
          { "name": "Ginger w/ Beef", "desc": "Fresh ginger, yellow onions and green onions w/ tender beef.", "price": "$28.95" },
          { "name": "Malaysian Pineapple Fried Rice", "desc": "Serrano peppers & pineapple w/ shrimp, bbq pork & Chinese sausage.", "price": "$28.95" }
        ]
      },
      {
        "category": "Award-Winning Steaks",
        "items": [
          { "name": "Ribeye Steak +", "desc": "Chef Benny's 18-oz Ribeye cut seasoned and seared to perfection served w/ veggies & choice of fries, pork fried rice or white rice.", "price": "$45.95" },
          { "name": "Filet Mignon +", "desc": "Melt in your mouth 10-oz Filet Mignon served w/ veggies & choice of fries, pork fried rice or white rice.", "price": "$49.95" }
        ]
      },
      {
        "category": "Pagoda Mac & Cheese *",
        "items": [
          { "name": "OG Mac & Cheese *", "desc": "The Original Mac & Cheese with a hint of our special cajun seasoning.", "price": "$25.95" },
          { "name": "Chicken Mac & Cheese *", "desc": "Mac & Cheese mixed with tender slices of sautéed chicken.", "price": "$26.95" },
          { "name": "Steak Mac & Cheese *", "desc": "Made with tender slices of sautéed ribeye.", "price": "$26.95" },
          { "name": "Shrimp Mac & Cheese *", "desc": "Mac & Cheese mixed with delicious pieces of sautéed shrimp.", "price": "$28.95" },
          { "name": "Seafood Mac & Cheese *", "desc": "Mac & Cheese mixed with a delicious blend of seafood medley.", "price": "$25.95" }
        ]
      },
      {
        "category": "Mu-Shu",
        "items": [
          { "name": "Vegetable Mu-Shu", "desc": "Served with 4 paper thin crepes and plum sauce.", "price": "$19.95" },
          { "name": "Chicken Mu-Shu", "desc": "Shredded chicken sautéed w/ veggies & eggs. Served with 4 crepes.", "price": "$21.95" },
          { "name": "Beef Mu-Shu", "desc": "Shredded beef sautéed w/ veggies & eggs. Served with 4 crepes.", "price": "$21.95" },
          { "name": "Pork Mu-Shu", "desc": "Shredded pork sautéed w/ veggies & eggs. Served with 4 crepes.", "price": "$21.95" },
          { "name": "Shrimp Mu-Shu", "desc": "Shredded shrimp sautéed w/ veggies & eggs. Served with 4 crepes.", "price": "$22.95" }
        ]
      },
      {
        "category": "Fried Rice",
        "items": [
          { "name": "Vegetable Fried Rice", "desc": "Wok-fried rice with assorted garden vegetables.", "price": "$20.95" },
          { "name": "Chicken Fried Rice", "desc": "Wok-fried rice with diced chicken breast.", "price": "$22.95" },
          { "name": "Beef Fried Rice", "desc": "Wok-fried rice with tender beef pieces.", "price": "$22.95" },
          { "name": "Pork Fried Rice", "desc": "Wok-fried rice with barbecued pork.", "price": "$22.95" },
          { "name": "Shrimp Fried Rice", "desc": "Wok-fried rice with fresh shrimp.", "price": "$23.95" },
          { "name": "House Fried Rice", "desc": "Includes beef, chicken and shrimp.", "price": "$24.95" }
        ]
      },
      {
        "category": "Chow-Mein & Lo-Mein",
        "items": [
          { "name": "Vegetable Chow-Mein / Lo-Mein", "desc": "Chow-Mein (crunchy fried egg noodles) or Lo-Mein (long soft egg-noodles).", "price": "$20.95" },
          { "name": "Chicken Chow-Mein / Lo-Mein", "desc": "Chicken and veggies w/ choice of crunchy or soft noodles.", "price": "$22.95" },
          { "name": "Beef Chow-Mein / Lo-Mein", "desc": "Beef and veggies w/ choice of crunchy or soft noodles.", "price": "$22.95" },
          { "name": "Pork Chow-Mein / Lo-Mein", "desc": "Pork and veggies w/ choice of crunchy or soft noodles.", "price": "$22.95" },
          { "name": "Shrimp Chow-Mein / Lo-Mein", "desc": "Shrimp and veggies w/ choice of crunchy or soft noodles.", "price": "$23.95" },
          { "name": "House Chow-Mein / Lo-Mein", "desc": "Includes beef, chicken & shrimp with noodles.", "price": "$24.95" }
        ]
      },
      {
        "category": "Hong Kong & Udon Noodles",
        "items": [
          { "name": "Hong Kong Noodles - Chicken", "desc": "Chinese noodles in a seafood sauce tossed with chicken.", "price": "$24.95" },
          { "name": "Hong Kong Noodles - Beef", "desc": "Chinese noodles in a seafood sauce tossed with beef.", "price": "$25.95" },
          { "name": "Hong Kong Noodles - Shrimp", "desc": "Chinese noodles in a seafood sauce tossed with shrimp.", "price": "$26.95" },
          { "name": "Hong Kong Noodles - House", "desc": "Combination of Beef, Chicken & Shrimp.", "price": "$29.95" },
          { "name": "Udon Vegetable Noodle Soup", "desc": "Authentic thick white udon noodles in a light flavorful broth.", "price": "$20.95" },
          { "name": "Udon Chicken Noodle Soup", "desc": "Udon noodles in broth with tender chicken.", "price": "$21.95" },
          { "name": "Udon Beef Noodle Soup", "desc": "Udon noodles in broth with tender beef.", "price": "$21.95" },
          { "name": "Udon Shrimp Noodle Soup", "desc": "Udon noodles in broth with fresh shrimp.", "price": "$22.95" },
          { "name": "Udon House Noodle Soup", "desc": "Combination of Beef, Chicken & Shrimp.", "price": "$24.95" }
        ]
      },
      {
        "category": "Chop Suey",
        "items": [
          { "name": "Vegetable Chop Suey", "desc": "Served with a side of steamed white rice and crunchy fried noodles.", "price": "$20.95" },
          { "name": "Chicken Chop Suey", "desc": "Chicken and veggies served with white rice.", "price": "$22.95" },
          { "name": "Beef Chop Suey", "desc": "Beef and veggies served with white rice.", "price": "$22.95" },
          { "name": "Pork Chop Suey", "desc": "Pork and veggies served with white rice.", "price": "$22.95" },
          { "name": "Shrimp Chop Suey", "desc": "Shrimp and veggies served with white rice.", "price": "$23.95" },
          { "name": "House Chop Suey", "desc": "Includes beef, chicken & shrimp. Served with white rice.", "price": "$24.95" }
        ]
      },
      {
        "category": "Family Style Dinners",
        "items": [
          { "name": "#1 Mongolian Special", "desc": "Mongolian Beef, Sweet & Sour Pork, Fried Wonton. (Priced per person, min. order 2)", "price": "$27.95" },
          { "name": "#2 Cantonese Special", "desc": "Chicken Chow-Mein, Mongolian Beef, Sweet & Sour Pork, Fried Wonton, Barbecued Pork. (Priced per person, min. order 2)", "price": "$30.95" },
          { "name": "#3 Mandarin Special", "desc": "Mongolian Beef, Sweet & Sour Pork, Almond Chicken, Fried Shrimp, Barbecued Pork. (Priced per person, min. order 2)", "price": "$30.95" },
          { "name": "#4 Shanghai Special", "desc": "Mongolian Beef, Sesame Chicken *, Shrimp w/ Cashew Nut, Fried Shrimp, Barbecued Pork. (Priced per person, min. order 2)", "price": "$30.95" },
          { "name": "#5 Pagoda Special", "desc": "Mongolian Beef, Sweet & Sour Pork, Shrimp w/ Mixed Vegetables, Fried Shrimp, Barbecued Pork. (Priced per person, min. order 2)", "price": "$30.95" },
          { "name": "#6 Peking Special", "desc": "Mongolian Beef, Kung Pao Chicken *, Sizzling Rice Shrimp, Fried Shrimp, Barbecued Pork. (Priced per person, min. order 2)", "price": "$30.95" },
          { "name": "#7 Chef Special", "desc": "Beef w/ Oyster Sauce, Sweet & Sour Shrimp, Kung Pao Chicken *, Fried Shrimp, Barbecued Pork. (Priced per person, min. order 2)", "price": "$29.95" },
          { "name": "#8 Happy Family Special", "desc": "Chicken w/ Garlic Sauce *, Beef w/ Vegetables, Sweet & Sour Shrimp, Fried Shrimp, Barbecued Pork. (Priced per person, min. order 2)", "price": "$29.95" },
          { "name": "Benny's Special", "desc": "Choice of Soup, Walnut Shrimp, Mongolian Beef, Asparagus Chicken, Lemon Chicken, Pork Fried Rice. (Priced per person, min. order 2)", "price": "$36.95" },
          { "name": "Guy's Special", "desc": "Choice of Soup, Bang Bang Shrimp, Orange Chicken, Mongolian Beef *, Dragon Chicken *, Pork Fried Rice. (Priced per person, min. order 2)", "price": "$37.95" }
        ]
      },
      {
        "category": "Lunch Menu ($20.99 Specials)",
        "items": [
          { "name": "Lunch Special Option (M1 - M35)", "desc": "Offered Weekdays 11:30am to 2:30pm. Served with pork fried rice, eggroll and your choice of egg drop, wonton or hot & sour soup.", "price": "$20.99" }
        ]
      }
    ]
  };

  function telHref(phone){ return 'tel:' + phone.replace(/[^0-9+]/g,''); }

  function slugify(str){
    return str.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  }

  function initScrollReveal(){
    var revealEls = document.querySelectorAll('.reveal, .full-menu-category');
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if ('IntersectionObserver' in window && !prefersReducedMotion) {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
      
      revealEls.forEach(function(el){ io.observe(el); });
    } else {
      revealEls.forEach(function(el){ el.classList.add('in-view'); });
    }
  }

  function renderFullMenu(data){
    var jump = document.getElementById('fullMenuJump');
    var body = document.getElementById('fullMenuBody');
    if(!jump || !body || !data.menu) return;

    var jumpHtml = '';
    var bodyHtml = '';

    data.menu.forEach(function(cat, catIndex){
      var catSlug = 'cat-' + slugify(cat.category);
      jumpHtml += '<a href="#' + catSlug + '" class="full-menu-jump-link' + (catIndex === 0 ? ' active' : '') + '" data-cat="' + catSlug + '">' + cat.category + '</a>';

      bodyHtml += '<div class="full-menu-category' + (catIndex === 0 ? '' : ' is-hidden') + '" id="' + catSlug + '">';
      bodyHtml += '' +
        '<div class="full-menu-cat-head">' +
          '<h3 class="full-menu-cat-title">' + cat.category + '</h3>' +
          '<span class="full-menu-cat-count">' + cat.items.length + (cat.items.length === 1 ? ' item' : ' items') + '</span>' +
        '</div>';

      bodyHtml += '<div class="full-menu-list-container">';

      cat.items.forEach(function(item){
        bodyHtml += '' +
          '<div class="menu-list-row">' +
            '<div class="menu-list-header">' +
              '<span class="menu-list-name">' + item.name + '</span>' +
              '<span class="menu-list-dots"></span>' +
              '<span class="menu-list-price">' + item.price + '</span>' +
            '</div>' +
            (item.desc ? '<p class="menu-list-desc">' + item.desc + '</p>' : '') +
          '</div>';
      });

      bodyHtml += '</div></div>';
    });

    jump.innerHTML = jumpHtml;
    body.innerHTML = bodyHtml;
  }

  function initFullMenu(){
    var jumpLinks = document.querySelectorAll('.full-menu-jump-link');
    var categories = document.querySelectorAll('.full-menu-category');

    jumpLinks.forEach(function(a){
      a.addEventListener('click', function(e){
        e.preventDefault();
        var targetId = a.getAttribute('data-cat');

        jumpLinks.forEach(function(link){
          link.classList.toggle('active', link === a);
        });

        categories.forEach(function(cat){
          cat.classList.toggle('is-hidden', cat.id !== targetId);
        });

        var target = document.getElementById(targetId);
        if(target){
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function setupFeedInfiniteScroll() {
    var track = document.getElementById('feedTrack');
    if(!track) return;
    if(!track.dataset.duplicated) {
      track.innerHTML += track.innerHTML;
      track.dataset.duplicated = "true";
    }
  }

  function render(data){
    var heroAwardEl = document.getElementById('heroAward');
    if(heroAwardEl){ heroAwardEl.textContent = data.brand.award; }

    document.querySelectorAll('#heroDoorDash, #headerDoorDash, #visitDoorDash, #fullMenuDoorDash').forEach(function(el){
      if(el) el.href = data.contact.doorDashUrl;
    });

    var feedFollow = document.getElementById('feedFollow');
    if(feedFollow && data.contact.instagramUrl){ feedFollow.href = data.contact.instagramUrl; }

    document.querySelectorAll('.feed-photo').forEach(function(link) {
      if(data.contact.instagramUrl) { link.href = data.contact.instagramUrl; }
    });

    var tripadvisorLink = document.getElementById('tripadvisorLink');
    if(tripadvisorLink && data.contact.tripadvisorUrl){
      tripadvisorLink.href = data.contact.tripadvisorUrl;
      tripadvisorLink.textContent = 'Rated ' + data.contact.tripadvisorRating + '/5 on Tripadvisor (' + data.contact.tripadvisorCount + ' reviews) →';
    }

    document.querySelectorAll('#phoneLink, #footerPhone, #heroCall').forEach(function(el){
      if(!el) return;
      el.href = telHref(data.contact.phone);
      if(el.id !== 'heroCall' && el.id !== 'headerPhone' && el.id !== 'ctaCall'){
        el.textContent = data.contact.phoneDisplay;
      }
    });

    var emailLink = document.getElementById('emailLink');
    if(emailLink){
      emailLink.href = 'mailto:' + data.contact.email;
      emailLink.textContent = data.contact.email;
    }

    var tickerTrack = document.getElementById('tickerTrack');
    if(tickerTrack){
      var items = data.highlights.map(function(h){ return '<span class="plain">' + h + '</span><span>◆</span>'; }).join('');
      tickerTrack.innerHTML = items + items;
    }

    var aboutText = document.getElementById('aboutText');
    if(aboutText && data.about){
      aboutText.innerHTML = data.about.paragraphs.map(function(p){ return '<p>' + p + '</p>'; }).join('');
    }

    var reviewQuote = document.getElementById('reviewQuote');
    var reviewName = document.getElementById('reviewName');
    if(reviewQuote && data.reviews && data.reviews.length){
      var reviewIndex = 0;
      var reviewTimer = null;
      var showReview = function(i){
        reviewIndex = (i + data.reviews.length) % data.reviews.length;
        reviewQuote.style.opacity = '0';
        setTimeout(function(){
          reviewQuote.textContent = '“' + data.reviews[reviewIndex].quote + '”';
          reviewName.textContent = data.reviews[reviewIndex].name;
          reviewQuote.style.opacity = '1';
        }, 200);
      };
      var startAutoRotate = function(){
        if(reviewTimer){ clearInterval(reviewTimer); }
        reviewTimer = setInterval(function(){ showReview(reviewIndex + 1); }, 10000);
      };
      showReview(0);
      startAutoRotate();
      var prevBtn = document.getElementById('reviewPrev');
      var nextBtn = document.getElementById('reviewNext');
      if(prevBtn){ prevBtn.addEventListener('click', function(){ showReview(reviewIndex - 1); startAutoRotate(); }); }
      if(nextBtn){ nextBtn.addEventListener('click', function(){ showReview(reviewIndex + 1); startAutoRotate(); }); }
    }

    var hoursTable = document.getElementById('hoursTable');
    if(hoursTable){
      hoursTable.innerHTML = data.hours.map(function(h){
        return '<tr><td>' + h.days + '</td><td>' + h.time + '</td></tr>';
      }).join('');
    }

    var addr = data.contact.address1 + '<br>' + data.contact.address2;
    var addressBlock = document.getElementById('addressBlock');
    if(addressBlock) addressBlock.innerHTML = addr;
    var footerAddress = document.getElementById('footerAddress');
    if(footerAddress) footerAddress.innerHTML = addr;

    var yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    initNav();
    renderFullMenu(data);
    initFullMenu();
    initScrollReveal();
    initScrollFX();
    setupFeedInfiniteScroll();
  }

  function initScrollFX(){
    var header = document.getElementById('siteHeader');
    var progress = document.getElementById('scrollProgress');
    if(!header && !progress) return;
    var onScroll = function(){
      if(header){
        header.classList.toggle('scrolled', window.scrollY > 12);
      }
      if(progress){
        var h = document.documentElement;
        var scrollTop = h.scrollTop || document.body.scrollTop;
        var scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
        var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progress.style.width = pct + '%';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initNav(){
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('mainNav');
    if(!toggle || !nav) return;

    toggle.addEventListener('click', function(e){
      e.stopPropagation();
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', function(e){
      if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ 
        nav.classList.remove('open'); 
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    render(DATA);
  });

})();