# Web-Mart

Web-Mart is a frontend implemntation of the [faskestore](https://fakestoreapi.com/) e-commerce REST Api. At the top level, the app utilizes the native fetch API to retrieve data from the server (backend) and then uses React.js to implement the user interface. The app features a home page, products page, product page, contact page, and cart page.

## Table of contents

- [Features](#implemented-features)
- [Tecnology used](#technology-used)
- [Tools](#tools)
- [Setup](#setup)
- [Usage](#usage)

## Implemented Features

- Custom and scaleable image slider
- Responsive Web Design (RWD)
- Minicart which provides quick summary of items in cart
- Dynamic cart badge that displays number of items in cart
-

## Technology Used

- Typescript: implement static types
- React:
- React Context: used to manage application wide state
- React Router: used to implement app routes
- React Hook Form: To manage form state and enforce client-side valaidation
- Styled Components: to create re-usable styled elements & prevent name-space conflict

## Tools

- create-react-app
- git & github

## Setup

To run this application locally:

1. Clone this repo

```bash
$ git clone https://github.com/twikista/web-shop.git
```

2. Go the root of the cloned repo and install dependencies

```bash
$ cd web-shop && npm install
```

## Usage

To start the application, run ` npm start` to start the development server at http://localhost:3000/
