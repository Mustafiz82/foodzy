
import { Link } from "react-router";
import Title from "../Shared/Title";
import Product from "../Shared/Product";
import { ProductData } from "../../Data/PopularProductData";
import CartItem from "./CartItem";
const Cart = () => {

  return (
    <div className="container mx-auto p-5 ">
      <div className="overflow-x-auto">
        <table className="table bg-[#F7F7F8]">
          {/* head */}
          <thead className="bg-[#E9E9E9]">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            ProductData.map((item , index) => <CartItem key={index} item={item} /> )
           }
            {/* row 2 */}
          </tbody>
        </table>
      </div>

      <div className="flex my-10 justify-between items-center">
        <Link className="underline text-black/70" to={"#"}>
          Continue Shopping.
        </Link>
        <button className="btn bg-primary text-white">Checkout</button>
      </div>

      <Title
        title={"Popular Products"}
        subTitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis."
        }
      />

     <div className="grid gap-5 mt-10 grid-cols-4">
       {ProductData.slice(0 , 4).map((item) => (
        <Product item={item} />
      ))}
     </div>
    </div>
  );
};

export default Cart;
