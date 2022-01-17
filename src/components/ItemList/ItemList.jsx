import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  console.log("estoy en IL", products);
  const characterList = products;
  return (
    <div>
      <h1>hola soy la lista</h1>
      {characterList.map((char) => (
        <li key={char.id}>
          <Item
            name={char.name}
            image={char.image}
            location={char.location.name}
          />
        </li>
      ))}
    </div>
  );
};
