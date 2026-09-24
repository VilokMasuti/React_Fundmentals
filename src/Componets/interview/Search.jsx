import { useEffect, useState } from "react";

const FRUITS = [
  "Apple",
  "Banana",
  "Cherry",
  "Grapes",
  "Mango",
  "Orange",
  "Peach",
  "Pineapple",
  "Strawberry",
  "Watermelon",
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(FRUITS);

  useEffect(() => {
    const timer = setTimeout(() => {
      const FilterdList = FRUITS.filter((item) =>
        item.toLowerCase().includes(query.toLocaleLowerCase()),
      );
      setResults(FilterdList);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);
  return (
    <article className="px-10 mt-10">
      <section className=" flex flex-col gap-10 ">
        <h1 className="title">Search</h1>

        <input
          type="text"
          placeholder="Search"
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {results.length === 0 ? (
          <p>No fruits found.</p>
        ) : (
          <ul className=" flex flex-col gap-2">
            {results.map((fruit) => (
              <li
                className=" px-2.5 bg-neutral-800  text-white rounded-sm w-fit text-center"
                key={fruit}
              >
                {fruit}
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
};

export default Search;
