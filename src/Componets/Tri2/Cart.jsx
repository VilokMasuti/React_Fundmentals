import { useState } from "react";
import { products } from "../../../lib/Json";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const AddCart = (p) => {
    setCart((c) => [...c, p]);
  };

  console.log(cart);

  return (
    <div className=" flex flex-col items-center p-10">
      <section className=" flex flex-col sm:flex-row gap-10">
        <h1 className=" text-2xl font-author">Cart</h1>

        <div className="flex flex-wrap md:flex-row gap-4 flex-col mt-10">
          {products.map((p) => (
            <div
              key={p.id}
              className=" w-[20rem] bg-zinc-900 rounded-sm flex flex-col  gap-2  py-2  px-2.5 mt-9"
            >
              <h1>{p.name}</h1>
              <span className=" bg-neutral-800  rounded-sm    w-fit text-center">
                {p.category}
              </span>

              <button
                onClick={() => AddCart(p)}
                className=" px-2.5 pt-1.5 bg-blue-600 w-fit rounded-sm font-medium  cursor-pointer font-author"
              >
                {" "}
                AddCart
              </button>
            </div>
          ))}
        </div>
      </section>
      <div
        className=" rounded-sm  w-fit bg-amber-50 text-black mt-10
         text-center px-2.5  "
      >
        Cart - {cart.length}
      </div>
    </div>
  );
};

export default Cart;
