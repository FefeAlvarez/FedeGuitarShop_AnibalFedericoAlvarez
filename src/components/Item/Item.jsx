export const Item = ({ name, location, image }) => {
  return (
    <div>
      <h1>soy un {name}</h1>
      <p>vivo en {location}</p>
      <img src={image} alt={name} />
    </div>
  );
};
