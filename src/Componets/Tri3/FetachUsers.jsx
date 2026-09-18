import { useEffect, useState } from "react";

const User = "https://jsonplaceholder.typicode.com/users";
const FetachUsers = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetch(User, { signal: controller.signal });

        if (!data.ok) {
          throw new error(`Request failed: ${data.status}`);
        }
        const user = await data.json();
        setUser(user);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

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
    <article className=" p-10">
      <section className="  flex flex-col gap-10">
        <h1 className=" font-author text-2xl capitalize">Names List</h1>
        {user.map((u) => (
          <div key={u.id}>
            <li>{u.name}</li>
          </div>
        ))}
      </section>
    </article>
  );
};

export default FetachUsers;
