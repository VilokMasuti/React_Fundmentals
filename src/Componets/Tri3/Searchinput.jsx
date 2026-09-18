import { useEffect, useState } from "react";

const API_URL = "https://fakestoreapi.com/products";
const Searchinput = () => {
  const [text, setText] = useState("");
  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPro = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPro();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const Search = product.filter((pro) =>
        pro.title.toLowerCase().includes(text.toLowerCase()),
      );

      setProduct(Search);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [text, product]);

  if (loading) {
    return (
      <section className=" flex items-center justify-center mx-auto">
        <h1 className=" font-author text-3xl">LOADING...!</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className=" flex items-center justify-center mx-auto">
        <h1 className=" font-author text-3xl  text-red-500">
          {error.message}...!
        </h1>
      </section>
    );
  }
  return (
    <article className=" p-2">
      <section className="  flex flex-col gap-10">
        <h1 className=" font-author capitalize  text-3xl">
          Search input with use effect{" "}
        </h1>
        <div className=" flex flex-col gap-4 mt-4">
          <label htmlFor="search">
            <p className=" text-sm font-medium  text-neutral-600">Search</p>
          </label>
          <input
            aria-search={text}
            type="text"
            placeholder="Search..! "
            className=" bg-neutral-900 text-white rounded-sm p-1 outline-none border-0 pl-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <section className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.length > 0 ? (
              product
                .map((p) => (
                  <div
                    key={p.id}
                    className=" w-[15rem] mt-6
                   bg-zinc-900 text-white rounded-sm p-3  text-left "
                  >
                    <h1
                      className=" tracking-tight    line-clamp-1 leading-6
                   "
                    >
                      {p.title}
                    </h1>
                    <p className=" pt-2  tracking-tight    line-clamp-3 text-sm text-neutral-500">
                      {p.description}
                    </p>
                    <div className="  flex justify-between mt-4">
                      <p className=" pt-1">{p.price}</p>
                      <button
                        className=" w-fit px-2.5
                   bg-zinc-50 text-black rounded-sm "
                      >
                        {p.category}
                      </button>
                    </div>
                  </div>
                ))
                .slice(0, 6)
            ) : (
              <p className=" capitalize text-3xl items-center justify-center mx-auto">
                no Result found. Sorry.
              </p>
            )}
          </section>
        </div>
      </section>
    </article>
  );
};

export default Searchinput;
