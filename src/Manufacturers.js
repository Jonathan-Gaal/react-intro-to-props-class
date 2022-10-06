const Manufacturers = ({ manuProducts }) => {
  return (
    <div>
      <h1>Manufacturers Page</h1>
      <ol>
        {manuProducts.map(({ manufacturer }) => (
          <li>{manufacturer}</li>
        ))}
      </ol>
    </div>
  );
};
export default Manufacturers;
