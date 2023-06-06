
import FoodCard from '../../components/food_card/FoodCard';

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-10 mx-10">
      {items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
    </div>
  );
};

export default OrderTab;