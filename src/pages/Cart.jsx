import { useEffect } from "react";
import { getCartTotal } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, itemCount, totalAmount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, itemCount, carts]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp cart={cart} key={i} />
          ))}
          <div className="flex items-center justify-center md:justify-end text-2xl mb-9">
            <div className="bg-gray-100 flex p-4 bg-opacity-60 rounded-md shadow-xl ">
              <span className="text-black font-semibold"> Sepet:</span>
              <span className="font-bold text-2xl ml-3 secondary-color">
                {totalAmount.toFixed(2)} TL
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center font-bold text-2xl mt-20">
          Sepetiniz Boş...
        </div>
      )}
    </div>
  );
};

export default Cart;
