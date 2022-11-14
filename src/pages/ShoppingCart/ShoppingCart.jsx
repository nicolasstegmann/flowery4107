import { OutletTitle } from "../../components/OutletTitle";
import { CartDetail } from "../../components/CartDetail";

export const ShoppingCart = ({ title }) => {
  return (
    <div className="cart">
      <OutletTitle title={title} />
      <CartDetail />
    </div>
  );
};