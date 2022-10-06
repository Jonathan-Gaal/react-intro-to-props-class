const products = [
{ name: "Ultra Boost", manufacturer: "Adidas", price: 160 },
{ name: "Air Force One Low", manufacturer: "Nike", price: 100 },
{ name: "Classic Leather", manufacturer: "Reebok", price: 120 },
{ name: "Sk8-Hi", manufacturer: "Vans", price: 60 }
];

this variable returns an array of components each with the unique prop based on the index of the loop.
const listItems = products.map(product => {
return (
<ProductItem
        name={product.name}
        price={product.price}
      />
);

});

listItems = [<ProductItems />,<ProductItems />,<ProductItems />,<ProductItems />,]

listItems = [<li></li>,<li></li>,<li></li>,<li></li>]

in reality the map function is returning 4 components like this but with different information based on our products array
const App = () => {
return(

<div>
<ProductItems />
<ProductItems />
<ProductItems />
<ProductItems />

    </div>

)

}

PASSING INFORMATION FROM PARENT TO CHILD TO GRANDCHILD

We can only pass props from parent to child so if App.js holds the information we pass it

App.js -> ProductPage.js -> ProductItem.js

you should never pass props from component to component more than twice i.e. parent to child to grandchild
