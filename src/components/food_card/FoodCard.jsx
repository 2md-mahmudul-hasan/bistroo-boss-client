

const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl  ">
      <figure><img className="w-100 m-7" src={image} alt="Shoes" />  </figure>
      <p className="absolute top-10 left-5 bg-black text-yellow-50">{price}</p>

      <div className="card-body">
        <h2 className="card-title">{name}!</h2>
        <p>{recipe}</p>

        <div className="card-actions justify-center">
          <button className="btn btn-primary">add  to cart </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;