import User from "./User";
import ProductPage from "./ProductPage";
import Manufacturers from "./Manufacturers";

import "./App.css";

// App.js
const App = () => {
  // from here to the return vanilla JS applies

  // props is literally a JS object called props
  const userDetails = {
    name: "Jimmy B",
    userId: 7348,
    email: "jimmy@pursuit.org",
  };

  const { name, userId, email } = userDetails;
  // placing state in the App.js component for more than one component to use is called 'Lifting State'
  const products = [
    { name: "Ultra Boost", manufacturer: "Adidas", price: 160 },
    { name: "Air Force One Low", manufacturer: "Nike", price: 100 },
    { name: "Classic Leather", manufacturer: "Reebok", price: 120 },
    { name: "Sk8-Hi", manufacturer: "Vans", price: 60 },
  ];

  return (
    <div>
      {/* JSX lives here after the return */}

      {/* we give the prop a name then we assign it the value in order to pass info to the User component */}
      <User userEmail={email} userId={userId} fullName={name} />
      <ProductPage appProducts={products} />
      <Manufacturers manuProducts={products} />
    </div>
  );
};

export default App;

// imperative & declarative

// declarative
// array.map(....) you just say map through this array. you don't say how to do it
// JSX won't allow imperative. It won't allow a for loop

// imperative

// for (let a of array){
//   ...do something
// }
