import "./ItemListContainer.css";

const ItemListContainer = ({ welcome, vivero }) => {
  return (
    <div className="welcome">
      <h4>{welcome} Bienvenido nuestro vivero </h4>
      <h4>{vivero}</h4>
    </div>
  );
};

export default ItemListContainer;
