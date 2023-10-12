# React Restaurant Pseudocode
<details>
<summary>Project Requirements </summary>



- [x] Create a wireframe of restaurant site

- [] Generate restaurant name / address / hours of operation

- [x] install bootstrap via npm

- [x] Access API information using Axios

- [] Create a restaurant menu

        - [] At least 15 items

        - [] Multiple Menu sections (apps, drinks, entree)

        - [] Render items using API

- [] Manage React Component State


</details>

<details>
<summary>Build-up for project</summary>

What do we want to display on our restaurant site?

 - Need a header with content 

    -Restaurant title : Le Roux Effronté

    -Address : 348 East Main Street Lexington, KY

    -Hours of Operation: 11a-8p

 - Accordions displaying menu items

    -Size and position : We want 2 accordions above and 2 accordions below.

    - Background picture of a dining room, cafe maybe?

    - Lets shoot for a different header look as not to blend too much with background of accordions

    - Do we want accordions to be clear and show background behind or have their own coloring?

    - Default page load: All accordions closed, can visually see all 4 on one page.

    - Stretch goal for accordions, only have one displayed on page that can rotate when a specific button is clicked

    - While any top accordions are open, lets have bottom auto close to adjust for sizing issues?

    -Maybe adding a randomizer for when each accordion is closed it changes the options?

    - Lets have 4 accordions

        - Appetizer
            - Title: Crispy Calamari

                - Description: Golden-fried calamari served with a tangy marinara sauce

                - Price : 9.99

            - Title: Samosas

                - Description: Crispy pastry pockets filled with spiced potatoes and peas, served with a chutney

                - Price: 6.99
            
            - Title: Shrimp Cocktail

                - Description: Freshly poached shrimp served with cocktail sauce and lemon wedges

                - Price: 11.99

            - Title: Lobster Bisque

                - Description: Creamy soup made with lobster stock, cream, and chunks of lobster meat

                - Price: 11.99

        - Brunch (Category:Breakfast)

            - Title: Shrimp and Grits

                - Description: Buttery grits topped with shrimp, bacon and a spicy Cajun cream sauce

                - Price : 14.99

            - Title: French Toast

                - Description: Thick slices of bread dipped in egg batter and fried, topped with powdered sugar

                - Price: 9.99

            - Title: Bagel and Lox

                - Description: A toasted bagel topped with smoked salmon, cream cheese, capers, and red onions

                - Price: 11.99 (WTF this should cost more than shrimp and grits)

            - Title: Breakfast Burrito

                - Description: A flour tortilla filled with scrambled eggs, bacon, cheese, and salsa. Served
                 with hasbrowns

                - Price: 9.99
        - Entreé

            - Title: Falafel Wrap

                - Description: Crispy falafel balls wrapped in a pita with hummus, lettuce, tomato, and tahini sauce

                - Price: 9.99

            - Title: Pesto Chicken Panini

                - Description: Grilled chicken, mozzarella cheese, pesto, and sun-dried tomatoes on a pressed panini bread

                - Price: 10.99

            - Title: Salmon Burger

                - Description: A juicy salmon patty topped with avocado and a spicy mayo sauce, served on a brioche bun

                - Price: 13.99

            - Title: Garlic Shrimp

                - Description: Sauteed shrimp in a garlic and butter sauce, served with bread

                - Price: 17.99

        - Drinks

            - Title: Bloody Mary
            
                - Description: A classic brunch cocktail made with vodka, tomato juice, and spices

                - Price: 7.99

            - Title: Fruit Smoothie

                - Description: A refreshing blend of fresh fruit, yogurt, and honey

                - Price: 6.99

            - Title: Chocolate Martini

                - Description: A decadent cocktail made with chocolate liqueur, chocolate and cream

                - Price: 9.99
   
</details>

<details>
<summary>Must Haves </summary>

#### Basic Menu Structure:

       - Different available menus using React Components

       - Menu items and details acquired by API
    
####  Should Haves  

        - Visually appealing page and function on different screen adjustments / mobile
        - Order menu / shopping cart for online ordering
#### Could Haves
        - User logins
        - Ratings and reviews
        
#### Won't Haves
        - Payment options
        - Admin panel for restaurant staff


</details>

<details>
<summary>JSX Components</summary>

    - Accordion

        - Title shown in dropdown box

        - In dropdown set a list of menu items

        - Do I need a button? Refer back as you are building

    - Rest

        - Title of restaurant

        - Address

        - H.o.Op

        -Separate background IMG

        - Maybe a footer with fake "social media sites"?

    - BgImage

        - Image displaying in site
        
        - URL for image

    - NavButton

        - Stretch goal, but a button that leads to menu? (obviously page will load on menu, but have it their to show functionality)

        - onClick = Reset state to 0

</details>