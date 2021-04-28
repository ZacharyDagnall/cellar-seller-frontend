## Cellar Seller

### by William Bugenis and Zachary Dagnall

# Functionality

This app is designed to be able to search for and track prices of collectible and second hand items, based on the search results from multiple web sources. Once a User enters a search term, they will able to see search results, including price analytics (min, max, and mean price, and number of results). They can then choose to save an individual item to their profile or choose to save an entire search, along with all of its results. A User can then return to viewing that item or that entire search in the future. When saving an item, a User can choose to save it to an existing item folder or create a new folder. The same price analytics as in the search results are also visible for the items saved in any of the User's folders as well.

On the search results page, a User can choose to sort the results by price, or filter them by the source of the item. A User can also update their password or delete their entire account.

This app implements full Auth, including JSON Web Tokens and localstorage so that a refresh keeps you logged in.

# Technical

This app was built with a Rails backend and a React frontend. The app was styled primarily with custom CSS, as well as with some elements imported from Bootstrap.

The backend includes 3 models:

- User, which has_many Folders (and must have a unique username, and a password of at least 5 characters)
  - a Folder titled "Main" is automatically created upon creation of a new User
- Folder, which has_many Items and belongs_to a User
- Item, which belongs_to a Folder

The frontend also utilizes React Router, allowing navigation with broswer buttons and multiple client-side routes.

# Backend

To see our backend repo, click [here](https://github.com/ZacharyDagnall/cellar-seller-backend).
