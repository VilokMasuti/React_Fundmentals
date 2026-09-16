import { useState } from "react";

const initialProducts = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "Keyboard", price: 2000 },
  { id: 4, name: "Monitor", price: 15000 },
];

const CartPrice = () => {
  const [cart, setCart] = useState([]);

  const AddCart = (p) => {
    setCart((pev) => {
      const isThereItem = pev.some((pd) => pd.id === p.id);
      if (isThereItem) {
        return pev.map((item) =>
          item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...pev, { ...p, quantity: 1 }];
    });
  };

  const RemoveCart = (id) => {
    setCart((pev) => pev.filter((p) => p.id !== id));
  };

  const handlein = (id) => {
    setCart((pev) =>
      pev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)),
    );
  };

  const handlede = (id) => {
    setCart((pev) =>
      pev
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((item) => item.quantity > 0),
    );
  };
  const totalPrice = cart.reduce((cu, val) => cu + val.price * val.quantity, 0);

  const totalItems = cart.reduce((cu, val) => cu + val.quantity, 0);
  return (
    <section className="p-10">
      <div className="flex flex-col gap-10 m-10">
        <h1 className="title">Cart Price</h1>
        <div className="flex flex-col gap-10">
          {initialProducts.map((c) => (
            <section
              key={c.id}
              className="bg-neutral-900 w-[12rem] rounded-sm flex flex-col gap-2 shadow-sm px-2.5 py-2 text-white"
            >
              <h1>Name - {c.name}</h1>
              <p>Price - {c.price}</p>
              <button
                onClick={() => AddCart(c)}
                className="cursor-pointer w-fit bg-green-900 px-2.5 rounded-sm"
              >
                AddCart
              </button>
            </section>
          ))}

          <section className="flex flex-col gap-5">
            <h1>CartItems</h1>
            {cart.map((c) => (
              <section
                key={c.id}
                className="w-[12rem] rounded-sm flex flex-col gap-2 shadow-sm px-2.5 py-2 text-black bg-indigo-50 "
              >
                <h1>Name - {c.name}</h1>
                <p>Price - {c.price}</p>
                <p>Quantity - {c.quantity}</p>
                <button
                  onClick={() => handlein(c.id)}
                  className=" w-fit bg-green-400 px-1 rounded-sm"
                >
                  +
                </button>
                <button
                  onClick={() => handlede(c.id)}
                  className=" w-fit bg-red-400 px-1 rounded-sm"
                >
                  -
                </button>

                <button
                  onClick={() => RemoveCart(c.id)}
                  className="cursor-pointer w-fit bg-red-900 text-white px-2.5 rounded-sm"
                >
                  Remove
                </button>
              </section>
            ))}
            <h2 className="text-xl  font-author font-black">
              Total Price: ₹{totalPrice}
            </h2>

            <p className="font-author font-black">
              {" "}
              Total Items -{totalItems}{" "}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CartPrice;
