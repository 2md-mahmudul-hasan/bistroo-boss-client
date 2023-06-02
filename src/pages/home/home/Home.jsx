
import ContactNumber from "../../../components/contact_number/ContactNumber";
import Testimonail from "../../testimonail/Testimonail";
import Bannar from "../bannar/Bannar";
import BistrooBoss from "../bistroo_boss/BistrooBoss";
import ChefRecomends from "../chef_recomends/ChefRecomends";
import Featured_item from "../featured_item/Featured_item";
import Order from "../order_online/Order";
import PapularItems from "../papularitems/PapularItems";


const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <BistrooBoss></BistrooBoss>

      <Order></Order>

      <PapularItems></PapularItems>
      <ContactNumber></ContactNumber>
      <ChefRecomends></ChefRecomends>
      <Featured_item></Featured_item>
      <Testimonail></Testimonail>
    </div>
  );
};

export default Home;