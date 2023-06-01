
import Bannar from "../bannar/Bannar";
import BistrooBoss from "../bistroo_boss/BistrooBoss";
import Order from "../order_online/Order";
import PapularItems from "../papularitems/PapularItems";


const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <BistrooBoss></BistrooBoss>

      <Order></Order>

      <PapularItems></PapularItems>
    </div>
  );
};

export default Home;