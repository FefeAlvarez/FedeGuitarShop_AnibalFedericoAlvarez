import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Item } from "../components/Item/Item";

export const Category = () => {
  const { categoryID } = useParams();
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    const dataFilter = await data.filter(
      (cat) => cat.category === `${categoryID}`
    );
    console.log("a ver ", dataFilter);
    setCategories(dataFilter);
  };
  useEffect(() => {
    getCategories();
  }, [categoryID]);
  return (
    <div>
      <h1>Misma categoria</h1>
      {categories.map((cat) => (
        <div key={cat.id}>
          <Item id={cat.id} title={cat.title} image={cat.image} />
        </div>
      ))}
      <Link to="/products">Volver al catalogo completo</Link>
    </div>
  );
};
