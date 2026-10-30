# Shopping Cart Application

## 1. Project Overview

The Shopping Cart Application is a responsive web application built using React, Redux Toolkit, and React Bootstrap. It allows users to browse products, add products to their cart, manage quantities, remove items, and view the total cart price.

The application uses Redux Toolkit for centralized state management and React Bootstrap for a responsive user interface.

## 2. Features

- Display a list of products with images, names, descriptions, and prices.
- Add products to the shopping cart.
- Increase or decrease product quantities.
- Prevent product quantities from going below 1.
- Remove individual products from the cart.
- Clear all products from the cart.
- Display the total number of items in the cart.
- Calculate and display the total cart price.
- Responsive user interface using React Bootstrap.
- Manage cart state using Redux Toolkit.

## 3. Technologies Used

- React.js
- JavaScript (ES6+)
- Redux Toolkit
- React Redux
- React Bootstrap
- Bootstrap CSS
- Vite

## 4. Project Structure

```text
shopping-cart/
├── src/
│   ├── redux/
│   │   ├── cartSlice.js
│   │   └── store.js
│   ├── components/
│   │   ├── ProductList.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │   └── CartItem.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 5. Installation and Setup

### Prerequisites

Install Node.js and npm before running the application.

### Step 1: Clone or download the project

Open the project folder in Visual Studio Code.

### Step 2: Install dependencies

Run the following command in the terminal:

```bash
npm install
```

### Step 3: Install required packages

```bash
npm install @reduxjs/toolkit react-redux react-bootstrap bootstrap
```

### Step 4: Start the application

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`.

## 6. Redux State Management

Redux Toolkit is used to manage the shopping cart state centrally.

### cartSlice.js

The cart slice contains the following reducers:

- `addToCart`: Adds a product or increases its quantity if it already exists.
- `increaseQuantity`: Increases the quantity of a selected product.
- `decreaseQuantity`: Decreases the quantity without allowing it to go below 1.
- `removeFromCart`: Removes a selected product from the cart.
- `clearCart`: Removes all products from the cart.

### store.js

The Redux store is created using `configureStore()` and registers the cart reducer.

### main.jsx

The React application is wrapped with Redux `Provider`, which makes the store accessible to the components.

### React Redux Hooks

- `useSelector()` reads cart items and calculates the cart summary.
- `useDispatch()` dispatches Redux actions when users interact with the cart.

## 7. How to Use the Application

1. Browse the available products.
2. Click **Add to Cart** to add a product.
3. Open the cart to view selected products.
4. Use the plus and minus buttons to change quantities.
5. Click **Remove** to delete an individual product.
6. Click **Clear Cart** to remove all products.
7. View the updated item count and total price.

## 8. Learning Outcomes

Through this project, I practiced:

- Building reusable React components.
- Passing data using props.
- Managing application state with Redux Toolkit.
- Using Redux `createSlice()` and `configureStore()`.
- Connecting Redux to React using `Provider`.
- Using `useSelector()` and `useDispatch()`.
- Creating a responsive UI using React Bootstrap.
- Organizing a React application into separate folders and files.

## 9. Future Enhancements

- Add product search and category filters.
- Persist cart items using local storage.
- Add user authentication.
- Integrate a backend and database.
- Implement a real checkout and payment flow.


## Redux Toolkit Concepts Used

### 1. `createSlice()`
`createSlice()` is used in `cartSlice.js` to create the cart slice and define reducers for managing cart operations. In this project, it handles adding products, increasing and decreasing quantities, removing products, and clearing the cart.

### 2. `configureStore()`
`configureStore()` is used in `store.js` to create the Redux store and register the cart reducer. It provides a centralized place to manage the application's cart state.

### 3. `Provider`
The `Provider` component from React Redux is used in `main.jsx` to make the Redux store available to all components in the React application.

### 4. `useSelector()`
`useSelector()` is used to access the cart state from the Redux store. In this project, it retrieves cart items and calculates the total number of items and the total price.

### 5. `useDispatch()`
`useDispatch()` is used to dispatch Redux actions when users interact with the application. It triggers actions such as adding products, updating quantities, removing products, and clearing the cart.

## 10. Author

**Krish Jain**

Project: Shopping Cart Application

