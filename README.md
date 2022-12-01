# Development

### Link to Deployed Website
https://partypenguin9123.github.io/Development/

### Goal and Value of the Application
The aim of the application was to create a platform to display some of my favorite baking creations, representing a bakery. The application displays the collection of baked goods in a bakery format where a user is able to explore, select, and add items to a cart with the aim of ultimately making a purchase. It is able to generate user value by providing a medium for a bakery business to garner attention and customers.

### Usability Principles Considered
The application adopts a simple usability with minimalistic designs to emphasize the offerings of baked goods. The user is welcomed to the website with brief information and finds a cart immediately, presenting the objective of the website to purchase items. The user is able to navigate the site through scrolling through item offerings which are presented in identical formats and add/remove them to the cart. The simple layout allows for the user to efficiently make purchases.

### Organization of Components
The application relies on components for item display as well as the sort optionality. Following the display of the cart, the items are displayed via a uniform component. The component renders information about each item as well as an image of it. The component takes in each item (stored in a JSON file) and displays the information on the application. The sort option button also relies on a component that renders the type of sorting feature.

### How Data is Passed Down Through Components
Data is passed through components through use of a JSON file which provides the necessary information to be rendered. Within the components for each item are buttons that allow for the user to add/remove the item from the cart. The buttons interact with states in order to pass and update relevant information (described further below).

### How the User Triggers State Changes
The user triggers state changes through adding/removing items to the cart, clearing the cart, or sorting by calories. The user can press either the add or remove button for each item which updates the state of the cart by passing the index of the prop to the cart and also updates the state of the price. The user can also clear the cart by pressing the clear cart button which will similarly update the state of the price and cart to be 0 and empty, respectively. Lastly, the user can sort by calories by pressing the checkbox which updates the state of the checkbox (true if checked, false if unchecked). This change in state will then call a function that will update the state of the list of items (to either be sorted or revert to original).
