
import Bannar from "../bannar/Bannar";
import BistrooBoss from "../bistroo_boss/BistrooBoss";
import Order from "../order_online/Order";


const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <BistrooBoss></BistrooBoss>
      <Order></Order>
    </div>
  );
};

export default Home;