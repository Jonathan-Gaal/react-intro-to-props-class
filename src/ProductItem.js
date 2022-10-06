const ProductItem = (props) => {
  const { productName, productPrice } = props;

  return (
    <li>
      {productName} - ${productPrice}
    </li>
  );
};

export default ProductItem;
