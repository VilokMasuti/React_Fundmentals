import { useState } from "react";
import { products } from "../../../lib/Json";

const Productfilter = () => {
  const [filters, setFilters] = useState("all");

  const [isStock, setIsStock] = useState(false);

  const isStockPro = isStock
    ? products.filter((p) => p.inStock === true)
    : products;

  const FilteredList =
    filters === "all"
      ? products
      : products.filter((p) => p.category === filters);

  return (
    <section className=" p-10">
      <h1 className="font-author text-3xl uppercase">Filter</h1>

      <div className=" flex-col gap-20">
        <select
          className="mt-10 bg-neutral-800 rounded-md px-1.5 py-1  cursor-pointer"
          onChange={(e) => setFilters(e.target.value)}
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="fitness">Fitness</option>
          <option value="home">Home</option>
        </select>

        <div className="flex md:flex-row gap-4 flex-col">
          {FilteredList.map((p) => (
            <div
              key={p.id}
              className=" w-[20rem] bg-zinc-900 rounded-sm   py-2  px-2.5 mt-9"
            >
              <h1>{p.name}</h1>
              <span className=" bg-neutral-800  rounded-sm    w-fit text-center">
                {p.category}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-20
       flex flex-col gap-5"
      >
        <h1 className=" font-author  text-2xl">Stock available products </h1>

        <label htmlFor="checkbox" className=" flex gap-3">
          <h1> isStock</h1>
          <input
            className="  "
            type="checkbox"
            onChange={(e) => setIsStock(e.target.checked)}
          />
        </label>
        {isStockPro.map((p) => (
          <div
            key={p.id}
            className=" w-[20rem] bg-zinc-900 rounded-sm   py-2  px-2.5 mt-9"
          >
            <h1>{p.name}</h1>
            <span className=" bg-neutral-800  rounded-sm    w-fit text-center">
              {p.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productfilter;
