import ProductItem from "./ProductItem";

const ProductPage = ({ appProducts }) => {
  // You can see here that we start our functional `ProductPage` component with an array of objects, each with certain consistent traits: `name`, `manufacturer`, and `price`.

  // const products = [
  //   { name: "Ultra Boost", manufacturer: "Adidas", price: 160 },
  //   { name: "Air Force One Low", manufacturer: "Nike", price: 100 },
  //   { name: "Classic Leather", manufacturer: "Reebok", price: 120 },
  //   { name: "Sk8-Hi", manufacturer: "Vans", price: 60 },
  // ];

  // We then then use this array to render our products in JSX:

  // this is correct and can be used for now
  //REMEMBER if your map function has curly braces you MUST use the 'RETURN' keyword
  //   called explicit return
  const listItems = appProducts.map((product) => {
    return (
      <ProductItem productName={product.name} productPrice={product.price} />
    );
  });

  // this is how you will see it in the wild
  // in map function when using  parenthesis no RETURN keyword needed
  // called implicit return
  // const listItems2 = products.map(({ name, price }) => (
  //   <ProductItem productName={name} productPrice={price} />
  // ));

  return (
    <div>
      <h1>Product Page</h1>
      <ul>{listItems}</ul>
    </div>
  );
};

export default ProductPage;
