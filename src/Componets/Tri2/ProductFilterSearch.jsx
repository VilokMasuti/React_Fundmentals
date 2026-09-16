import { useState } from "react";

const products = [
  { id: 1, name: "iPhone 15", category: "phone", price: 70000 },
  { id: 2, name: "Samsung S24", category: "phone", price: 65000 },
  { id: 3, name: "MacBook Air", category: "laptop", price: 90000 },
  { id: 4, name: "Dell XPS", category: "laptop", price: 85000 },
  { id: 5, name: "iPad Air", category: "tablet", price: 50000 },
  { id: 6, name: "OnePlus Pad", category: "tablet", price: 30000 },
];

const ProductFilterSearch = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const [price, setPrice] = useState("all");

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.name
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());

    const matchfilter = category === "all" || item.category === category;

    let matchPrice = true;

    if (price === "under40") {
      matchPrice = item.price < 40000;
    }

    if (price === "40to70") {
      matchPrice = item.price >= 40000 && item.price >= 70000;
    }

    return matchSearch && matchfilter && matchPrice;
  });

  return (
    <section className="p-10">
      <h1 className="title">ProductFilterSearch</h1>

      <div className=" flex flex-col gap-10 m-10">
        <section className=" flex gap-20   items-center">
          <label htmlFor="Search" aria-label="Search">
            <p>Search Items*</p>
            <input
              type="text"
              className=" input ml-5 mt-6"
              placeholder="Search.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <select
            className=" bg-neutral-900 cursor-pointer p-1 rounded-sm w-fit mt-10 border-0 outline-0"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="tablet">Tablet</option>
          </select>

          <select
            className=" bg-neutral-900 cursor-pointer p-1 rounded-sm w-fit mt-10 border-0 outline-0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="all">All</option>
            <option value="under40">Under 40k </option>
            <option value="40to70 ">40k–70k </option>
            <option value="above70">Above 70k</option>
          </select>
        </section>
        <span>Showing Products - {filteredProducts.length}</span>

        <div className=" grid grid-cols-1  md:grid-cols-2 gap-10 lg:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((pro) => (
              <section
                key={pro.id}
                className="bg-white shadow-md w-[10rem] text-black p-2 rounded-sm"
              >
                <h1>{pro.name}</h1>
                <h2>{pro.category}</h2>
                <p>{pro.price}</p>
              </section>
            ))
          ) : (
            <p className=" font-black  ">Sorry, no products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductFilterSearch;
