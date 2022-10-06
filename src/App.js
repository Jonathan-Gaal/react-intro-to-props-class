import User from "./User";
import ProductPage from "./ProductPage";
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

  return (
    <div>
      {/* JSX lives here after the return */}

      {/* we give the prop a name then we assign it the value in order to pass info to the User component */}
      <User userEmail={email} userId={userId} fullName={name} />
      <ProductPage />
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
