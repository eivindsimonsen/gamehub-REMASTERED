# Gamehub Remastered

> This project is mainly backend focused. It features user creation, log in functionality and CRUD operations by firebase database. The user can now also purchase video games through stripe.
> Live demo [_here_](https://gamehubremastered.netlify.app/).

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Contact](#contact)

## General Information

- Project shall showcase several video games fetched from database.
- Give the user the availability to create a user, and log in as that user.
- Add items to shopping cart.
- Purchase items.

## Technologies Used

- firebase: ^9.22.1,
- react: ^18.2.0,
- react-dom: ^18.2.0,
- sass: ^1.62.0,
- stripe: ^12.18.0,
- express: 4.18.2,
- dotenv: ^16.3.1,
- cors: ^2.8.5

## Features

- Full CRUD functionality
- Login authentication
- Database storing
- Full cart functionality

## Screenshots

![App screenshot](./src/img/gamehub1.JPG)
![App screenshot](./src/img/gamehub2.JPG)
![App screenshot](./src/img/gamehub3.JPG)

## Setup

To start the project, open the console and type:
`npm install`
then
`npm run dev`
to start the dev server.

## Usage

1. First and foremost you need to create a new project in firebase, follow their setup to add a project. Once done, enter the console of the project, and select "Firestore database" and create a collection. You will be provided with a firebase config file which will be important.

2. Create a firebase.js file in the src directory and paste in the config code provided by firebase like so:

```jsx
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR-DATA",
  authDomain: "YOUR-DATA",
  projectId: "YOUR-DATA",
  storageBucket: "YOUR-DATA",
  messagingSenderId: "YOUR-DATA",
  appId: "YOUR-DATA",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

3. For CRUD functionality to work, you need to update the "games" string in all crud operations to whatever you've called your collection. If you have named your collection "games", no changes needs to be made

```jsx
const addGame = async (e) => {
  e.preventDefault();

  await addDoc(collection(db, "YOUR_COLLECTION_NAME"), {
    text: input,
    completed: false,
  });
};
```

You also need to set up a server using Node. And make sure the server is running.
Here you also send a post request to stripe with the products from your cart.
Remember to create an env file with secret content, ref STRIPE_PRIVATE_KEY

To start the server, enter the server folder with:

```console
cd server/
```

then

```console
npm run devStart
```

```jsx
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    // If in dev mode, use SERVER_URL
    origin: process.env.CLIENT_URL,
  })
);

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// Remember to create products on your stripe account
const storeItems = new Map([
  ["YOUR_STRIPE_PRODUCT_ID", { priceInNok: 0, name: "YOUR_PRODUCT_NAME" }],
  ["YOUR_STRIPE_PRODUCT_ID", { priceInNok: 0, name: "YOUR_PRODUCT_NAME" }],
  ["YOUR_STRIPE_PRODUCT_ID", { priceInNok: 0, name: "YOUR_PRODUCT_NAME" }],
  ["YOUR_STRIPE_PRODUCT_ID", { priceInNok: 0, name: "YOUR_PRODUCT_NAME" }],
  ["YOUR_STRIPE_PRODUCT_ID", { priceInNok: 0, name: "YOUR_PRODUCT_NAME" }],
  ["YOUR_STRIPE_PRODUCT_ID", { priceInNok: 0, name: "YOUR_PRODUCT_NAME" }],
  ["YOUR_STRIPE_PRODUCT_ID", { priceInNok: 0, name: "YOUR_PRODUCT_NAME" }],
  ["YOUR_STRIPE_PRODUCT_ID", { priceInNok: 0, name: "YOUR_PRODUCT_NAME" }],
  ["YOUR_STRIPE_PRODUCT_ID", { priceInNok: 0, name: "YOUR_PRODUCT_NAME" }],
]);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "nok",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInNok,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/canceled`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000);
```

## Project Status

Project is: _ongoing_ /

## Contact

Created by [@eivindsimonsen](https://www.linkedin.com/in/eivind-simonsen-9469121b9/) - feel free to contact me!
Visit my portfolio [here](https://www.easimonsen.com/)
